/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
    
     const fullName = {
      gal:"Gallon",
      l:"Liter",
      lbs: "Pound",
      kg: "Kilogram",
      mi: "Mile",
      km : "Kilometer"       
    };
    
    const author = {
      name: "Mamun Abdullah",
      tag: "thetradecoder",
      country: "Bangladesh"
    }
    
    
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      const isReturnNum = convertHandler.convert(initNum, initUnit);
      const returnNum = isReturnNum>0?isReturnNum.toFixed(5):isReturnNum;
    
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, fullName[initUnit], returnNum, fullName[returnUnit]);

    
    
    if(input===""){
      
      res.json({
        error: "input is empty"
      });
    }else if(initNum===null && initUnit==="invalid unit"){
      res.json({error: "invalid number and unit"})
    }else if(initNum != null && initUnit === "invalid unit"){
      res.json({error: "invalid unit"})
    }else{
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString,
      });
    }
    
    });
    
};
