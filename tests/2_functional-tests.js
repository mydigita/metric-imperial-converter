/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('Routing Tests', function() {
    
    suite('GET /api/convert => conversion object', function() {
      
      test('Convert 10L (valid input)', function(done) {
       chai.request(server)
        .get('/api/convert')
        .query({input: '10l'})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'l');
          assert.equal(res.body.returnNum, 2.64172);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
      });
      
      test('Convert 32g (invalid input unit)', function(done) {
        
         chai.request(server)
        .get('/api/convert')
        .query({input: '32g'})
        .end(function(err, res){           
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, null);
          assert.equal(res.body.initUnit, null);
          assert.equal(res.body.returnNum, null);
          assert.equal(res.body.returnUnit, null);
          done();
        });
      });
      
      test('Convert "" (invalid number)', function(done) {
        
        
         chai.request(server)
        .get('/api/convert')
        .query({input: ''})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, null);
          assert.equal(res.body.initUnit, null);
          assert.equal(res.body.returnNum, null);
          assert.equal(res.body.returnUnit, null);
          done();
        });
      });  
      
      test('Convert ko (invalid number and unit)', function(done) {
        
        
         chai.request(server)
        .get('/api/convert')
        .query({input: 'ko'})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initUnit, null);           
          assert.equal(res.body.initUnit, null);
          assert.equal(res.body.returnNum, null);
          assert.equal(res.body.returnUnit, null);
          done();
        });
      });
      
      test('Convert kg (no number)', function(done) {
        
        
         chai.request(server)
        .get('/api/convert')
        .query({input: 'kg'})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, 'kg');
          assert.equal(res.body.returnNum, 2.20462);
          assert.equal(res.body.returnUnit, 'lbs');
          done();
        });
      });
      
    });

  });

});
