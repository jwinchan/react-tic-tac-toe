import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  
  // testing stuff
  // <div>
  //   <Square value = "1" onClickCallback={() => onClickCallback('test string')} />
  // </div>
  
  squares = squares.flat();
  return squares.map((square) => {
    return <Square
      key={square.id}
      id={square.id}
      value={square.value}
      onClickCallback={onClickCallback}
      />
  })
}


  // attempt 1
  // const gridArray = squares.map((square) => {
  //   return(
  //     <Square
  //     id = {square.id}
  //     value = {square.value}
  //     />
  //   )
  // })

  // return(
  //   <div>{gridArray}</div>
  // )



const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
