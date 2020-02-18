import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row } from 'reactstrap';

class CardList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			people: [
				{ name: 'Winnie', color: '#8e6e95', cards: ['Card 1', 'Card 2']},
				{ name: 'Bob', color: '#39a59c', cards: ['Card 1', 'Card 2']},
				{ name: 'Thomas', color: '#344759', cards: ['Card 1', 'Card 2']},
				{ name: 'George', color: '#e8741e', cards: ['Card 1', 'Card 2']},
			],
		};
	}

	addCard(personIndex) {
		const newCard = window.prompt('Enter text for the card');
		const people = this.state.people.map(person => person);
		people[personIndex].cards.push(newCard);

		console.log('people', people);


		this.setState({people});
	}

	moveCard(isLeft) {
		console.log('move card');
	}

	render() {
		return (
			<div style={{ backgroundColor: '#ccc', padding: 25 }}>
			<Container>
				<Row>
					{ this.state.people.map((person, i) => (
						<Col xs key={i}>
							<Container>
								<Row>
									<Col xs="12" style={{ backgroundColor: person.color }}>{person.name}</Col>
									{ person.cards.map((cardContent, j) => (
										<Col xs="12" key={j} style={{ backgroundColor: '#fff' }}>
											{ i !== 0 ? (<div style={{ display: 'inline-block' }} onClick={() => this.moveCard(true)}>&lsaquo;&nbsp;</div>) : '' }
											{ cardContent }
											{ i !== this.state.people.length - 1 ? (<div style={{ display: 'inline-block' }}  onClick={() => this.moveCard()}>&nbsp;&rsaquo;</div>) : '' }
										</Col>
									))}
									<Col xs="12" onClick={() => this.addCard(i)}>+ Add a card</Col>
								</Row>
							</Container>
						</Col>
						))
					}
				</Row>
			</Container>
			</div>
		);
	}
}

export default CardList;

// ReactDOM.render(<NewApp />, document.getElementById('root'));