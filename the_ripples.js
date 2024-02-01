let t = 0; // A time variable to control movement and color changes

function setup() {
  createCanvas(800, 600);
  noStroke();
  fill(255, 104, 204, 150);
}

function draw() {
  background(10, 10); // Semi-transparent background for a trail effect

  // Create a grid of shapes moving based on noise
  for (let x = 0; x <= width; x += 30) {
    for (let y = 0; y <= height; y += 30) {
      // Use perlin noise to get an organic movement
      const xAngle = map(cos(t), -1, 1, 0, 4 * PI);
      const yAngle = map(sin(t), -1, 1, 0, 4 * PI);
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // Modify size and shape dynamically
      const mySize = map(sin(t + angle), -1, 1, 0, 20);

      // Create a gradient effect with colors
      fill(255 * cos(angle), 104 * sin(t / 2), 204 * cos(t), 150);

      // Draw an ellipse with dynamic size and color
      ellipse(x + cos(angle) * 20, y + sin(angle) * 20, mySize, mySize);
    }
  }

  t += 0.01; // Update time
}

// Function to implement mouse interaction
function mousePressed() {
  // Reset time to make the animation jump
  t = 0;
}
