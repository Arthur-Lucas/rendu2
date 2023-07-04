const getRandNumber = require('../src/index');

describe('getRandNumber', () => {
    it('should return a random number between 0 and 99', () => {
      const randomNumber = getRandNumber();
      expect(typeof randomNumber).toBe('number');
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(100);
    });
  });