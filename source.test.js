const caesarCipher = require('./source');

it('Simple Shift', () => {
  expect(caesarCipher('hello',3)).toBe('khoor');
});

it('Punctuation', () => {
    expect(caesarCipher('hello!',3)).toBe('khoor!');
  });

it('Wrap-around', () => {
  expect(caesarCipher('xyz',3)).toBe('abc');
});

it('Large Shift', () => {
    expect(caesarCipher('y',265)).toBe('d');
  });

it('Punctuation and Spaces', () => {
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});