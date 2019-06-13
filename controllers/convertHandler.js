/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getNum = function(input) {
    const myRegEx = /^\d+(\.\d+)?(\/\d+(\.\d+)?)?(?=\s?(gal|L|lbs|kg|mi|km))/;
    
    return myRegEx.test(input) ? input.match(myRegEx)[0] : null;
  };
  
  this.getUnit = function(input) {
    const myRegEx = /(gal|L|lbs|kg|mi|km)$/;
    
    return myRegEx.test(input) ? input.match(myRegEx)[0] : null;
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case "gal":
        return "L"
      case "L":
        return"gal"
      case "lbs":
        return "kg"
      case "kg":
        return "lbs"
      case "mi":
        return "km"
      case "km":
        return "mi"
    }
  };
  
  this.convert = function(initNum, returnUnit) {
    let integersArr = initNum.split("/");
    
    if (integersArr.length === 1) {
      initNum = parseInt(initNum, 10)
    } else {
      initNum = parseInt(integersArr[0], 10) / parseInt(integersArr[1], 10)
    }
    
    function preciseRound(num) {
      let decimal = 5;
      var numSign = num >= 0 ? 1 : -1;

      return Math.round((num * Math.pow(10, decimal)) + (numSign * 0.0001)) / Math.pow(10, decimal).toFixed(decimal);
    }
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (returnUnit) {
      case "gal":
        return preciseRound(initNum / galToL)
      case "L":
        return preciseRound(initNum * galToL)
      case "lbs":
        return preciseRound(initNum / lbsToKg)
      case "kg":
        return preciseRound(initNum * lbsToKg)
      case "mi":
        return preciseRound(initNum / miToKm)
      case "km":
        return preciseRound(initNum * miToKm)
    }
  };
  
  this.spellOutUnit = function(unit) {
    const unitLowerCase = unit.toLowerCase();
    const units = {
      gal: 'gallons',
      l: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms'
    }

    return units[unitLowerCase];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
