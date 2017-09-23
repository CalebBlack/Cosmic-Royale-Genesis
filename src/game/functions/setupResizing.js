function setupResizing(babylonEngine){
  window.addEventListener('resize', function(){
      babylonEngine.resize();
  });
}
export default setupResizing;
