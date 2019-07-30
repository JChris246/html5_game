const VIEWPORT_HEIGHT = 1080, VIEWPORT_WIDTH = 720; 
const SCREEN_VIEWPORT_RATIO = window.innerHeight / VIEWPORT_HEIGHT;

export class GameCanvas {
	constructor(canvasElement) {
		this.canvasElement = canvasElement;
		this.context = canvasElement.getContext('2d');
		canvasElement.setAttribute('height', window.innerHeight);
		canvasElement.setAttribute('width', VIEWPORT_WIDTH * SCREEN_VIEWPORT_RATIO);
		this.context.fillStyle = '#e2fcbf';
		this.context.fillRect(0, 0, canvasElement.clientWidth, canvasElement.clientHeight); 
	}

	drawImage(img, x, y, width, height, scale = 1.0) {
		const sWidth = (width * scale), sHeight = (height * scale);
		this.context.drawImage(img, 
			(x - (sWidth - width) / 2)  * SCREEN_VIEWPORT_RATIO, 
			(y - (sHeight - height) / 2) * SCREEN_VIEWPORT_RATIO, 
			sWidth * SCREEN_VIEWPORT_RATIO, 
			sHeight * SCREEN_VIEWPORT_RATIO);
	}

	clear() { 
		this.context.fillStyle = '#e2fcbf'; 
		this.context.fillRect(0, 0, this.canvasElement.clientWidth, this.canvasElement.clientHeight); 
	}

	fillRect(style, x, y, width, height) { 
		this.context.fillStyle = style;
		this.context.fillRect(x * SCREEN_VIEWPORT_RATIO, y * SCREEN_VIEWPORT_RATIO, width * SCREEN_VIEWPORT_RATIO, height * SCREEN_VIEWPORT_RATIO); 
	} 
	
	get height() { return VIEWPORT_HEIGHT; } 
	get width() { return VIEWPORT_WIDTH; }
}
