  console.log = function() {};
  const {expect} = require('chai')
  const rewire = require('rewire');
  
  describe('', function () {
    it('', function() {
       try {
        var appModule = rewire("../main.js");
      } catch (e) {
          expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
      }
        let tipCalculator
      try {
        tipCalculator = appModule.__get__("tipCalculator");
      } catch (e) {
          expect(true, 'Did you create tipCalculator?').to.equal(false);
      }
      function checkNum(ans,  real){
        return (Math.abs((real-ans)/real)<.000001)
      }

      const mytipCalculator = (quality, total) => {
        switch (quality) {
            case 'bad':
                return total * .05;
            case 'ok':
                return total * .15;
            case 'good':
                return total * .20;
            case 'excellent':
                return total * .30;
            default:
                return total * .18;
    
        }
    }
  
      expect(tipCalculator, "Did you create tipCalculator as either a function expression or a function declaration?").to.be.an.instanceOf(Function);    
      
      expect(checkNum( mytipCalculator("bad", 100), tipCalculator("bad", 100)), "If 'bad' is entered, the function should return 5% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("ok", 100), tipCalculator("ok", 100)), "If 'ok' is entered, the function should return 15% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("good", 100), tipCalculator("good", 100)),  "If 'good' is entered, the function should return 20% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("excellent", 100), tipCalculator("excellent", 100)),  "If 'excellent' is entered, the function should return 30% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("random string", 100), tipCalculator("random string", 100)), "For any quality input other than bad, ok, good, or excellent, the function should return 18% of the total passed in").to.be.true
  
  
      expect(checkNum( mytipCalculator("bad", 67), tipCalculator("bad", 67)), "If 'bad' is entered, the function should return 5% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("ok", 71), tipCalculator("ok", 71)), "If 'ok' is entered, the function should return 15% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("good", 67), tipCalculator("good", 67)),  "If 'good' is entered, the function should return 20% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("excellent", 42), tipCalculator("excellent", 42)), "If 'excellent' is entered, the function should return 30% of the total passed in").to.be.true
  
      expect(checkNum( mytipCalculator("random string", 81), tipCalculator("random string", 81)), "For any quality input other than bad, ok, good, or excellent, the function should return 18% of the total passed in").to.be.true
    });
  });