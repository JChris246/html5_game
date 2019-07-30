// @flow 

const assets = require('./assets.js');
import { Entity } from './Entity.js';
import GameCanvas from './canvas.js';
import { type Bounds, doBoundsIntersect } from './mathTypes.js';

type State = 'DESCENDING' | 'ATTACKING';


export default class Monster extends Entity {
	x: number;
	y: number;
	scale: number;
	totalTime: number;
	img: Image;
	state: State;

	constructor(x: number) {
	    super();
	    this.x = x;
	    this.y = 0;
	    this.scale = 1;
	    this.totalTime = 0;
	    this.state = 'DESCENDING';
    }

	load() {
		return assets.loadImage('images/Green_Blob.png').then(img => {
			this.img = img;
		});
	}

	draw(canvas: GameCanvas) {
		canvas.drawImage(this.img, this.x, this.y, 128, 128, this.scale)
	}

	update(elapsed: number) { 
		if (this.state === 'DESCENDING')
			this.y += elapsed * 10;
		this.totalTime += elapsed; 
		this.scale = 0.05 * Math.sin(2 * this.totalTime) + 1.0;
	}

	testWallCollision(bounds: Bounds) {
		const monsterBounds = {
	    	x: this.xPosition,
    		y: this.yPosition,
    		width: 128,
    		height: 128
    	};
    	if (doBoundsIntersect(bounds, monsterBounds))
      		this.state = 'ATTACKING';
  	}
}
