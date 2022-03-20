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
  	let whatRelation
    try {
      whatRelation = appModule.__get__("whatRelation");
    } catch (e) {
    	expect(true, 'Did you accidentally delete `whatRelation()`?').to.equal(false);
    }

    expect(whatRelation, "`whatRelation()` should still be a function expression.").to.be.an.instanceOf(Function);    

    expect(whatRelation(34), "Did you change the code to function properly?").to.equal('You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.')

    expect(whatRelation(3), "Try looking carefully at the third condition").to.equal('You are likely 2nd cousins.'
)

    expect(whatRelation(18), "Did you change the third condition from: (percentageSharedDNA < 13) to: (percentageSharedDNA > 13)").to.equal('You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.')

    expect(whatRelation(100), "Did you change the third condition from: (percentageSharedDNA < 13) to: (percentageSharedDNA > 13)").to.equal('You are likely identical twins.')
  });
});