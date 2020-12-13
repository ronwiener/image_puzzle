import React from 'react';
import Board1 from './Board1';
import Modal from './Modal';
import './Game.css';
import { Letters } from './Letters';

//Credits to: Barely Coding with Daniel Bark
function App1() {
 
  const images = [...Letters]

  return (
    
    <div className='App'>
    <div className="title">
      <h2 >Sliding Puzzle Game</h2>
    </div>
      <div className='subtitle'>
      <p>By Ron's Fun and Games</p>
      </div>
      <Modal />
    
      <div>
      <Board1
        rows={4}
        cols={4}
        width={320}
        height={420}
        images={images}
      />
      </div>   
    </div>
  );
}

export default App1;