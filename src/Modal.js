import React, { useState } from 'react';
import './App.css';

function Modal() {


  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
  }

    return (
        <div>
        <div className={`modalBackground modalShowing-${modalState}`}>
          <div className='modalInner'>
            <div className='modalImage'>
              <img src="https://res.cloudinary.com/ron7602/image/upload/c_scale,h_708,w_708/v1607614606/imagePuzzle_zfpxmv.jpg" alt='photoLetters'/>
            </div>
            <div className='modalText'>
              <h2>Game Play</h2>
              <ul>
              <li>Click <b>Start Game</b> button to scramble letters</li>
              <li>Click on a letter to move to the open space</li>
              <li>Re-arrange the letters back to their original places</li>
              <li>The letters must be in the exact order as they appeared at the start</li>  
              <li>Use this game key as a reference!</li>
              </ul>                
              <button className='closeButton' onClick={() => toggleModal()}>close</button>
            
            </div>
          </div>
        </div>
        <button className='playButton' onClick={() => toggleModal()}>How to Play</button>
       
      </div>
    );
}

export default Modal;