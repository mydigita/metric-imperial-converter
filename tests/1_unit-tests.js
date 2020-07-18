/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
     var input = '32.2L';
      assert.equal(convertHandler.getNum(input),32.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      
    var input = '32/2L';
      assert.equal(convertHandler.getNum(input),16);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      
      var input = '2.5/2.5L';
      assert.equal(convertHandler.getNum(input),1);
      done();
    });
    
    test('invalid input', function(done) {
      
    var input = "";
      assert.equal(convertHandler.getNum(input),"empty input");
      done();
    });
    
    test('No Numerical Input', function(done) {
      
     var input = 'gal';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
      assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      
     var input = 'nothing';
      assert.equal(convertHandler.getNum(input), null);
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','mi','km','lbs','kg', 'l'];
      var expect = ['l', 'km','mi','kg','lbs', 'gal'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  /*
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });
    
  });
  
  */
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      var input = [10, 'l'];
      var expected = 2.64172;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      
    var input = [10, 'km'];
      var expected =  6.21373;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      
     var input = [10, 'lbs'];
      var expected =  4.53592;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      
  var input = [10, 'kg'];
      var expected = 22.04624;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});