function setup() {
  createCanvas(600, 400);
  background(255);
  noFill();
}

function draw() {
  background(255, 10); // Semi-transparent background for a fading effect

  let y = 0;
  while (y <= height) {
    strokeWeight(1);
    stroke(100, 200);

    // Use a for loop to draw lines horizontally
    for (let x = 0; x <= width; x += 20) {
      let endX = x + random(-10, 10); // End point of the line segment for x
      let endY = y + random(-10, 10); // End point of the line segment for y

      // Gradually change the stroke color based on the position
      let strokeColor = map(x, 0, width, 0, 255);
      stroke(strokeColor, 155, 210);

      line(x, y, endX, endY);
    }

    y += 20; // Increment y position for the while loop
  }

  // Slow down the drawing speed
  frameRate(9);
}

// Optional: Add interaction to reset the artwork
function mousePressed() {
  background(255);
}
