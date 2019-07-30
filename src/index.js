import { GameCanvas } from './canvas.js';
import { Monster } from './Monster.js';
import { Wall } from './Wall.js';
import { ToolPalette } from './toolPalette.js';

const assets = require('./assets.js');

const gameCanvas = new GameCanvas(document.getElementById('main-canvas'));
const monster = new Monster();
const wall = new Wall(25, 150);

const entities = [monster, new ToolPalette()];

let time = 0;

Promise.all(entities.map(entity => entity.load())).then(() => { 
	time = Date.now();
	requestAnimationFrame(gameLoop);
});

function gameLoop() {
	const newTime = Date.now(); 
	const elapsed = (newTime - time) / 1000; 
	time = newTime;
	entities.forEach(entity => {entity.update(elapsed);} ); 
	gameCanvas.clear();
	entities.forEach(entity => {entity.draw(gameCanvas); }); 
	requestAnimationFrame(gameLoop);
}
