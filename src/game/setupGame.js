import Babylon from 'babylonjs';
import setupResizing from './functions/setupResizing';
import exampleScene from './scenes/example';

function setupGame(gameCanvas){
  const engine = new Babylon.Engine(gameCanvas, true);
  setupResizing(engine,gameCanvas);
  const scene = exampleScene(engine,gameCanvas);
  engine.runRenderLoop(function () {
    scene.render();
  });
}
export default setupGame;
