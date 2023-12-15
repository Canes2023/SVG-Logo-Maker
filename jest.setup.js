if (typeof TextEncoder === 'undefined') {
    global.TextEncoder = require('util').TextEncoder;
  }
  
  if (typeof TextDecoder === 'undefined') {
    global.TextDecoder = require('util').TextDecoder;
  }
  
  jest.mock('svg.js', () => {
    const mockSvg = {
      size: jest.fn(() => mockSvg),
      text: jest.fn(() => mockSvg),
      circle: jest.fn(() => mockSvg),
      polygon: jest.fn(() => mockSvg),
      rect: jest.fn(() => mockSvg),
      svg: jest.fn(() => '<svg></svg>'), // Mock the svg method to return a string
    };
  
    return mockSvg;
  });