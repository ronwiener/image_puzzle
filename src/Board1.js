import React, { useState } from 'react';
import Tile1 from './Tile1';
import {canSwap, swap, shuffle, isSolved} from './helper1';
import './Game.css';



function Board1(props){

    const { rows, cols, width, height, images } = props;
    const [tiles, setTiles] = useState([...Array(rows * cols).keys()]);
    const [isStarted, setIsStarted] = useState(false);
    
    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles,rows, cols);
        setTiles(shuffledTiles);
    }

    const swapTiles = (tileIndex) => {
        if(canSwap(tileIndex, tiles.indexOf(tiles.length - 1), rows, cols)){
           const newTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
           setTiles(newTiles);
        }
    }

    const handleTileClick = (index) => {
        swapTiles(index)
    }

    const handleButtonClick = () => {
        shuffleTiles();
        setIsStarted(true);
    }

    const solved = isSolved(tiles);

    const resetGame = () => {
        setTiles([...Array(rows * cols).keys()])
        setIsStarted(false);
    }

  
    const pieceWidth = Math.round(width/ cols);
    const pieceHeight = Math.round(height / rows);
    const style = {
        width,
        height,
    };


    return (
        <>
        <ul style={style} className='board'>
          
            {tiles.map((tile, index)=> (
                <Tile1
                {...props}
                index={index}
                tile={tile}
                key={tile}
                width={pieceWidth}
                height={pieceHeight}
                boardSize={width}
                image={images[tile]}
                onClick={handleTileClick}
                /> 
                ))} 
               
        </ul>
        <div>
            {solved && isStarted ? <div>
        <span id='neon-orange'>Puzzle </span>
        <span id='neon-blue'>solved!!</span></div>: " "}
        </div>
        <div className='buttons'>
        <button className='btn' onClick={handleButtonClick}>
            {!isStarted || solved ? "Start Game" : "Re-scramble"}
        </button>
        <button className='resetBtn' onClick={resetGame}>Reset Game</button>
        </div>
        </>
    );
}

export default Board1;