import Babylon from 'babylonjs';
function setupGame(gameCanvas){
  var engine = new Babylon.Engine(gameCanvas, true);
  window.addEventListener('resize', function(){
      engine.resize();
  });
}
export default setupGame;
