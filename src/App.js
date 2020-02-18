import React from 'react';
import logo from './logo.svg';
import './App.css';
import Battleship from './battleship/index';
import Piano from './piano/index';
import BookSearch from './bookSearch';
import CardList from './cardList';
import TicTacToe from './tic-tac-toe/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>One-sided Battleship exercise</h2>
      <Battleship />
      <br />
      <h2>Simple keyboard</h2>
      <Piano />
      <br />
      <h2>ISBN search</h2>
      <BookSearch />
      <br />
      <h2>Card List</h2>
      <CardList />
      <br />
      <h2>Tic Tac Toe</h2>
      <TicTacToe />
    </div>
  );
}

export default App;