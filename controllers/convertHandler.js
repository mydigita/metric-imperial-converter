/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const regex = /gal|lbs|kg|mi|km|gallon|pound|kilogram|mile|kilometer|liter|l/i;
  const noUnit = /[A-Za-z]/i;
  
  
  this.getNum = function(input) {
    var result;
    let num= parseFloat(input);
    let unit = input.match(regex);
    let noUnitMatch = input.match(noUnit);
    if(input===""){result = "empty input"
    }else if(num && !unit){
     result = num;
   } else if(unit && num){
      result = eval(input.split(unit)[0])
    }else if(unit){
      result =1;
    }else if(!unit && num && noUnitMatch){
      result = eval(input.split(noUnitMatch)[0]);
    }else {
      result = null
    }    
     
    return result;
  };
  
  
  
  
  
  this.getUnit = function(input) {
    var result;
    let unitMatch = input.match(regex);    
    
    if(!unitMatch){
      result = "invalid unit"
    } else {
      let r = unitMatch[0].toLowerCase();
    
    switch(r){
      case "gal":
        return result = "gal";
      case "gallon":
        return result = "gal";
      case "lbs": 
        return result = "lbs";
      case "pound": 
        return result = "lbs";
      case "kg":
        return result = "kg";
      case "kilogram": 
        return result = "kg";
      case "mi":
        return result = "mi";
      case "mile":
        return result = "mi";
      case "km": 
        return result = "km";
      case "kilometer": 
        return result = "km";
      case "liter": 
        return result = "l";
      case "l":
        return result = "l";
      default: 
        return result = "invalid unit";
       }
    
    } 
    
    
    return result;
  };
  
  
  
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case "gal":
        return  "l";
      case "l": 
        return  "gal";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";      
        
      default: return "invalid unit"
    }
    
    return result;
  };
  
  
  
  
/*
  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  */
  
  
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const lToGal = 1/galToL;
    const kgToLbs = 1/lbsToKg;
    const kmToMi = 1/miToKm;
    var result;
    
    switch(initUnit){
      case "gal":
        return result = initNum * galToL;
      case "l":
        return result = initNum * lToGal;
      case "lbs":
        return result = initNum * lbsToKg;
      case "kg":
        return result = initNum * kgToLbs;
      case "mi": 
        return result = initNum * miToKm;
      case "km":
        return result = initNum * kmToMi;
        
      default: return "invalid number"
    }
    
    
    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
