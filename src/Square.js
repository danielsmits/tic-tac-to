import { useState } from 'react';

const Square = () => {
    const [value, setValue] = useState(null);

    function handleClick() {
        const nextSquares = squares.slice();
        nextSquares[0] = "X";
        setSquares(nextSquares);
      }    

    const handeClick = () => {
        setValue('X');
    }
    return (
        <button className="square" onClick={onSquareClick}>{ value }</button>
);
}

export default Square;
