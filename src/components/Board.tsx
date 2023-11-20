import { useState } from 'react';
import Character from '../classes/Character';
import Game from '../classes/Game';

const generateAssets = () => {
  const characters = [];
  const knight = new Character('knight', 'hero', 50, 5, 2);
  const goblin = new Character('goblin', 'monster', 15, 5, 1);

  characters.push(knight, goblin);
  const game = new Game(characters);
  return { characters, game };
};

const Board = () => {
  const [characters, setCharacters] = useState(generateAssets().characters);
  const [game, setGame] = useState(generateAssets().game);

  return (
    <main className="board">
      <section className="hero-area">
        <h2>Hero character</h2>
      </section>
      <section className="monster-area">
        <h2>Monster character</h2>
      </section>
      <section className="action-area">
        <h2>Action menu</h2>
      </section>
    </main>
  );
};

export default Board;
