import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

class Piano extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			audioContext: new AudioContext(),
			keys: [ 
				{ freq: 130, oscillator: {} },
				{ freq: 146, oscillator: {} },
				{ freq: 164, oscillator: {} },
				{ freq: 174, oscillator: {} },
				{ freq: 196, oscillator: {} },
				{ freq: 220, oscillator: {} },
				{ freq: 246, oscillator: {} },
				{ freq: 211, oscillator: {} },
				{ freq: 293, oscillator: {} },
				{ freq: 329, oscillator: {} },
				{ freq: 349, oscillator: {} },
				{ freq: 392, oscillator: {} },
				{ freq: 440, oscillator: {} }, ],
		};
	}

	handleClick(keyObj) {
		const oscillator = this.state.audioContext.createOscillator();
		const gain = this.state.audioContext.createGain();
		oscillator.connect(gain);
		console.log('freq', keyObj.freq);
		oscillator.frequency.value = keyObj.freq;
		oscillator.type = "square";

		gain.connect(this.state.audioContext.destination);
		gain.gain.value=10*0.01;
		oscillator.start(this.state.audioContext.currentTime);
		keyObj.oscillator = oscillator;
	}

	stopPlaying(keyObj) {
		keyObj.oscillator.stop(this.state.audioContext.currentTime);
	}

	render () {
		return (
			<>
			{ this.state.keys.map((keyObj, i) => (
				<div className="key" key={i} onMouseDown={()=>this.handleClick(keyObj)} onMouseUp={() => this.stopPlaying(keyObj)}>{keyObj.freq}</div>))}
			</>
		);
	}
}

export default Piano;
// ReactDOM.render(<Piano />, document.getElementById('root'));