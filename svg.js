// Import svg.js library
const SVG = require('svg.js');

// Create an SVG canvas
const canvas = SVG('logo-container').size(500, 500);

// Define logo elements
const logoCircle = canvas.circle(250).fill('#FF0000');
const logoText = canvas.text('Logo').font({ size: 48, family: 'Arial' }).move(125, 225).fill('#FFFFFF');

// Export the SVG code
const svgCode = canvas.svg();
console.log(svgCode);
