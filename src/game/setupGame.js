import Babylon from 'babylonjs';
import setupResizing from './functions/setupResizing';
function setupGame(gameCanvas){
  var engine = new Babylon.Engine(gameCanvas, true);
  setupResizing(engine);
}
export default setupGame;
