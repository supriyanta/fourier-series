let angle = 0;
let curve = [];
// change the value of N to see different result
let N = 12;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight * 0.9);
	slider = createSlider(1, 50, 1);
}

function draw() {
	background(0);
	translate(250, 250);

	let cx = 0,
		cy = 0;

	for (let i = 0; i < slider.value(); ++i) {
		let n = 2 * i + 1;

		let center = { x: cx, y: cy };

		let radius = 100 * (4 / (n * PI));
		let theta = n * angle;

		noFill();
		stroke(255, 100);
		circle(center.x, center.y, 2 * radius);

		cx += radius * cos(theta);
		cy += radius * sin(theta);

		line(center.x, center.y, cx, cy);
	}
	curve.unshift(cy);

	translate(400, 0);

	line(cx - 400, cy, 0, curve[0]);

	beginShape();
	noFill();
	for (let i = 0; i < curve.length; ++i) {
		vertex(i, curve[i]);
	}
	endShape();

	angle += 0.01;

	if (curve.length > 700) {
		curve.pop();
	}
}
