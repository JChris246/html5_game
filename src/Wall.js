const assets = require('./assets.js');
import { Entity } from './Entity.js';

export class Wall extends Entity {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
	}

	load() {
		return assets.loadImage('images/Wall.png').then(img => { this.img = img; });
	}

	draw(canvas) {
		canvas.drawImage(this.img, this.x, this.y, 128, 108);
	}

	update(elapsed) {}
}
