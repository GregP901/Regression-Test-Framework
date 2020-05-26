const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const axios = require('axios');

defineSupportCode(function({ Given, Then, When }) {
  let answer = 0;
  let result ;

  Given('I start with {int}', async function (input) {
    answer = input;
    
  });
  When('I add {int}', async function (input) {
    result = await axios.post('http://localhost:3000/add', {
      number1: answer,
      number2: input
    });
  });

  Then('I end up with {int}', function (input) {

    assert.equal(result.data,'result '+ input);
  });
});