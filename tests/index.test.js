const myModule = require('../src/index');

describe('getAllfestivals', () => {
    it('should return an object ', () => {
        const getAllfestival = myModule.getAllfestivals();  
        console.log(getAllfestival);
    });
});