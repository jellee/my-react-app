import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// Exercise 
// https://gist.github.com/dbraga/8209ae72ac74a330fe0c9e7a94a5ca7e

/*
Carrier, size 5
Battleship, size 4
Destroyer, size 3
Submarine, size 3
Patrol Boat, size 2
*/

const player2Ships = {
  "carrier":  [ "A10", "B10", "C10","D10","E10"],
  "battleship":  [ "B3", "B4", "B5","B6"],
  "destroyer":  [ "F3", "G3", "H3"],
  "submarine":  [ "G1","H1","I1"],
  "patrol":  ["A9", "B9"],
};

class Battleship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(10).fill(Array(10).fill(null)),
      rowLabels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    };
  }
  
  checkHitOrMiss(row, col) {
    const coordinate = this.state.rowLabels[row] + (col+1);
    const newGrid = this.state.squares.map((col) => col.slice());
    
    for (let ship in player2Ships) {
      if (player2Ships[ship].includes(coordinate)) {
        newGrid[row][col] = 'hit';
        this.setState({
          squares: newGrid
        });
        return true;
      }
    }
    
    newGrid[row][col] = 'miss';
    this.setState({
      squares: newGrid
    });
  }
  
  render() {
    return (
      <>
        <div className="colLabel">&nbsp;</div>
        { Array(10).fill(null).map((item, i) => (
          <div className="colLabel" key={i}>{i+1}</div>))}
        
        
        { this.state.squares.map((row, i) => (
          <div className="b-row" key={i}>
            <div className="colLabel">{ this.state.rowLabels[i] }</div>
            { row.map((col, j) => {
              let tempClass = 'square ';
              const squareState = this.state.squares[i][j];
              tempClass += squareState || '';
              return (
                <div key={j} className={tempClass}
                  onClick={() => this.checkHitOrMiss(i,j)}></div>);
            })}
          </div>))
        }</>
    );
  }
}

// const player2Moves = ["H10", "C7", "D10", "H2", "I4", "E8", "G4", "J3", "D6", "B9", "G9", "J10", "F8", "B8", "G6", "A4", "D9", "I9", "I8", "E1", "D7", "B5", "H6", "H1", "F2", "E2", "F1", "C10", "J1", "B6", "H8", "F3", "H3", "B1", "J6", "D4", "A5", "H5", "E4", "A7", "D5", "C2", "C5", "J5", "J9", "J8", "G3", "F4", "C1", "B10", "D8", "H9", "C9", "C6", "G10", "A1", "A2", "F5", "H4", "I10", "C3", "J7", "I1", "H7", "I3", "I2", "J2", "C8", "F7", "A10", "E10", "E6", "A8", "E3", "B7", "D1", "F9", "F10", "D3", "A6", "B2", "I6", "G7", "G2", "G5", "E9", "E5", "B4", "D2", "J4", "C4", "I7", "G8", "G1", "A3", "F6", "I5", "A9", "B3", "E7"];

export default Battleship;
// ReactDOM.render(<Board />, document.getElementById("root"));