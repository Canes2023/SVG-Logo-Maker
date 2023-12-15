const readline = require("readline");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function generateLogo() {
  const canvas = createCanvas(300, 200);
  const ctx = canvas.getContext("2d");

  console.log("Welcome to the Logo Generator!");

  const text = await prompt("Enter up to three characters for the text: ", /^[a-zA-Z0-9]{1,3}$/);
  const textColor = await prompt("Enter the text color (keyword or hexadecimal): ", /^(#(?:[0-9a-fA-F]{3}){1,2}|[a-zA-Z]+)$/i);
  const shape = await chooseShape();
  const shapeColor = await prompt("Enter the shape color (keyword or hexadecimal): ", /^#(?:[0-9a-fA-F]{3}){1,2}$/i);

  // Draw the shape
  ctx.fillStyle = shapeColor;
  drawShape(ctx, shape);

  // Draw the text
  ctx.fillStyle = textColor;
  ctx.font = "30px Arial";
  ctx.fillText(text, 120, 120);

  // Save the SVG file
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <text x="50%" y="50%" fill="${textColor}" font-size="30" text-anchor="middle">${text}</text>
  </svg>`;

  const filePath = 'logo.svg';
  fs.writeFileSync(filePath, svgContent);

  console.log(`Generated ${filePath}`);
}

function drawShape(ctx, shape) {
  // Draw shape implementation
}

function prompt(question, pattern) {
  return new Promise((resolve) => {
    function ask() {
      rl.question(question, (answer) => {
        if (pattern.test(answer)) {
          resolve(answer);
        } else {
          console.log("Invalid input. Please try again.");
          ask();
        }
      });
    }
    ask();
  });
}

function chooseShape() {
  return new Promise((resolve) => {
    rl.question("Choose a shape (circle, triangle, square): ", (answer) => {
      const validShapes = ["circle", "triangle", "square"];
      if (validShapes.includes(answer)) {
        resolve(answer);
      } else {
        console.log("Invalid shape. Please choose from circle, triangle, or square.");
        chooseShape().then(resolve);
      }
    });
  });
}

generateLogo().then(() => {
  rl.close();
});