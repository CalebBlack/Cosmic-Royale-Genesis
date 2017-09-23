import React from 'react';
import setupGame from './setupGame';
import './game.css';

class Game extends React.Component {
  componentDidMount(){
    setupGame(this.game);
  }
  render(){
    return (<canvas ref={(gameCanvas)=>{this.game = gameCanvas;}} className='game' id='game'/>);
  }
}
export default Game;
