import React from 'react'
import './Board.css'

const Board = ({ boxes, onClick, winPlayer, setWinPlayer, resetBoard }) => {  //props coming from Game.jsx
  const handleOk = () => {
    resetBoard()
    setWinPlayer(null)
  }
  return (
    <div className='board'>
      <div className='rows'>
        {boxes.map((value, index) => {   // Iterating through the 'boxes' prop
          const style = value === "X" ? "box X" : "box O";    //Giving a style depending on the value
          return (
            <div className={style} value={value} onClick={() => value === null && onClick(index)} key={index}>{value}</div>  //making a div with the value from the 'boxes'
          )
        })}
      </div>
      {winPlayer &&                  //Popup to show if there is a winner or a draw
        <div className='win-alert' >
          {winPlayer === "Draw" ? <h3>Its a {winPlayer}</h3> : <h3>Player {winPlayer} won!</h3>}
          <button className='ok-button' onClick={handleOk}>OK</button>
        </div>
      }
    </div>
  )
}

export default Board