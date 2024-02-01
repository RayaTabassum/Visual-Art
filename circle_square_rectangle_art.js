function setup() {
  createCanvas(800, 600);
  noLoop(); // Only draw once
}

function draw() {
  background(0); // Start with a black background
  let tileSize = 10;
  
  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      let shapesCount = floor(random(1, 5)); // Determine how many shapes to draw in each tile
      let i = 0; // Initialize while loop counter
      
      while (i < shapesCount) {
        // Generate a random color for each shape
        fill(random(255), random(255), random(255), 200);
        
        // Randomly choose a shape to draw
        let shapeType = floor(random(3)); // 0, 1, or 2
        switch (shapeType) {
          case 0: // Draw a circle
            ellipse(x + tileSize / 2, y + tileSize / 2, tileSize * 0.5, tileSize * 0.5);
            break;
          case 1: // Draw a square
            rect(x + 10, y + 10, tileSize - 20, tileSize - 20);
            break;
          case 2: // Draw a triangle
            triangle(x + tileSize / 2, y + 10, x + 10, y + tileSize - 10, x + tileSize - 10, y + tileSize - 10);
            break;
        }
        
        i++; // Increment while loop counter
      }
    }
  }
}

// Allow for regenerating the artwork on mouse press
function mousePressed() {
  redraw(); // Redraw everything
}
