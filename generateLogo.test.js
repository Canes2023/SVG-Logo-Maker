const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const generateLogo = require('./generateLogo');

beforeAll(() => {
  const dom = new JSDOM('<html><body></body></html>');
  global.document = dom.window.document;
});

afterAll(() => {
  // Clean up after the tests
  global.document = undefined;
});

test('generates logo with valid inputs', () => {
  const mockWriteFileSync = jest.spyOn(require('fs'), 'writeFileSync');
 
  expect(mockWriteFileSync).toHaveBeenCalledWith(
    'logo.svg',
    expect.stringContaining('<circle cx="150" cy="100" r="50" fill="blue"/>')
  );
});