import React from 'react';
import setupGame from './setupGame';
import './game.css';

class Game extends React.Component {
  componentDidMount(){
    setupGame(this.gameCanvas);
  }
  render(){
    return (<canvas ref={(gameCanvas)=>{this.gameCanvas = gameCanvas;}} className='game' id='game'/>);
  }
}
export default Game;
