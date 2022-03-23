const { expect } = require('chai')
let logs = [];
console.log = () => { }
const rewire = require('rewire');
var sinon = require('sinon')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        appModule.__set__('console', {
            log: (...args) => { logs.push(...args) }
        })
        let acceptEverything
        try {
            acceptEverything = appModule.__get__("acceptEverything");
        } catch (e) {
            expect(true, 'Did you create `acceptEverything`?').to.equal(false);
        }

        expect(acceptEverything, "`acceptEverything` should still be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        let veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

        acceptEverything(veggies)

        expect(logs.includes("Ok, I guess I will eat some broccoli."), `Does your function log to the console in the following format for each element: 'Ok, I guess I will eat some [element].'? Make sure your spelling and punctuation match exactly.`).to.equal(true)
    })
})