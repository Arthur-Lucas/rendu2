const myModule = require('../src/index');

describe('getRandNumber', () => {
    it('should return a random number between 0 and 99', () => {
      const randomNumber = myModule.getRandomNumber();
      expect(typeof randomNumber).toBe('number');
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(100);
    });
});

describe('getAllfestivals', () => {
    it('should return an object ', () => {
        const getAllfestival = myModule.getAllfestivals();  
        console.log(getAllfestival);
    });
});