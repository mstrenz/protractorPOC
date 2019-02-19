// Example page object insertion
var calculator = require('../pages/calculatorPage');

describe('Protractor Demo App', function() {

    beforeEach(async function() {
      // Example usage of page object
      await calculator.get();
    });
  
    it('should have a history', async function() {
      await calculator.add(1, 2);
      await calculator.add(3, 4);
  
      expect(await calculator.getHistoryCount()).toEqual(2);
  
      await calculator.add(5, 6);
  
      expect(await calculator.getHistoryLast().getText()).toContain('1 + 2');
      expect(await calculator.getHistoryFirst().getText()).toContain('5 + 6');
    });
  });