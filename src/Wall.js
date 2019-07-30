// @flow

const assets = require('./assets.js');
import { Entity } from './Entity.js';
import {GameCanvas} from './canvas.js';

export class Wall extends Entity {
	x: number;
	y: number;
	img: Image;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
	}

	load() {
		return assets.loadImage('images/Wall.png').then(img => { this.img = img; });
	}

	draw(canvas: GameCanvas) {
		canvas.drawImage(this.img, this.x, this.y, 128, 108);
	}

	update(elapsed: number) {}
}
