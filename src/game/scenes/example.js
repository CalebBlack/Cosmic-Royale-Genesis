// Copied From http://www.Babylonjs-playground.com/#12S23Y
import Babylon from 'babylonjs';
export default function(engine,canvas) {
    var scene = new Babylon.Scene(engine);
    var camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(0, 5, -10), scene);
    camera.setTarget(Babylon.Vector3.Zero());
    camera.attachControl(canvas, true);
    var light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene);
    var sphere = Babylon.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;
    var ground = Babylon.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    return scene;
};
