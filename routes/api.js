/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
    
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      if (!initNum && !initUnit) res.send("invalid unit and number");
      else if (!initNum) res.send("invalid number");
      else if (!initUnit) res.send("invalid unit");
    
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var returnNum = convertHandler.convert(initNum, returnUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({initNum, initUnit, returnNum, returnUnit, string: toString})
    });  
};
