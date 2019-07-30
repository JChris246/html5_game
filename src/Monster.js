const assets = require('./assets.js');
import { Entity } from './Entity.js';
export class Monster extends Entity {
	constructor() { 
		super(); 
		this.y = 25;
		this.x = 25;
		this.scale = 1;
		this.totalTime = 0;
	}

	load() {
		return assets.loadImage('images/Green_Blob.png').then(img => {
			this.img = img;
		});
	}

	draw(canvas) {
		canvas.drawImage(this.img, this.x, this.y, 128, 128, this.scale)
	}

	update(elapsed) { 
		this.y += elapsed * 10;
		this.totalTime += elapsed; 
		this.scale = 0.05 * Math.sin(2 * this.totalTime) + 1.0;
	}
}
