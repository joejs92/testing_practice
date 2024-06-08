const analyzeArray = require('./source');

it('Find Min', () => {
  expect(analyzeArray([3,2,5,4,1]).average).toBe(3);
});

it('Punctuation', () => {
    expect(analyzeArray([3,2,5,4,1]).min).toBe(1);
  });

it('Wrap-around', () => {
  expect(analyzeArray([3,2,5,4,1]).max).toBe(5);
});

it('Large Shift', () => {
    expect(analyzeArray([3,2,5,4,1]).length).toBe(5);
  });