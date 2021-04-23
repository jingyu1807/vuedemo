
'use strict';
goog.require('Blockly.JavaScript');


Blockly.JavaScript['MotorStart']=function(block){
  var  code = new Object();
  code.BlockKeyword="MotorStart";
  code.ParameterList=[
    {ParameterKeyword: "Int",_Int:Number(block.getFieldValue("arg0"))},
    {ParameterKeyword: "Int",_Int:Number(block.getFieldValue("arg1"))},
    {ParameterKeyword: "Float",_Float:block.getFieldValue("arg2")}
    ];
  code.BlockChildren="DownChild";
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。

  return json+",";
};
Blockly.JavaScript['Wait']=function(block){
  var  code = new Object();
  code.BlockKeyword="Wait";
  code.ParameterList= [{ParameterKeyword: "String",_String:block.getFieldValue("arg0")},
    {ParameterKeyword: "Float",_Float:block.getFieldValue("arg1")}];
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  return json+",";
};

Blockly.JavaScript['MoveForward']=function(block){
  var  code = new Object();
  code.BlockKeyword="MoveForward";
  code.ParameterList= [{ParameterKeyword: "Int",_Int:block.getFieldValue("arg0")}];
  code.BlockChildren="DownChild";
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  return json+",";
};
Blockly.JavaScript['TurnRight']=function(block){
  var  code = new Object();
  code.BlockKeyword="TurnRight";
  code.ParameterList= [{ParameterKeyword: "Float",_Float:block.getFieldValue("arg0")}];
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  return json+",";
};
Blockly.JavaScript['TurnLeft']=function(block){
  var  code = new Object();
  code.BlockKeyword="TurnLeft";
  code.ParameterList= [{ParameterKeyword: "Float",_Float:block.getFieldValue("arg0")}];
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  return json+",";
};
Blockly.JavaScript['WalkForward']=function(block){
  var  code = new Object();
  code.BlockKeyword="WalkForward";
  code.ParameterList= [{ParameterKeyword: "Int",_Int:block.getFieldValue("arg0")}];
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  return json+",";
};
Blockly.JavaScript['WalkBack']=function(block){
  var  code = new Object();
  code.BlockKeyword="WalkBack";
  code.ParameterList= [{ParameterKeyword: "Int",_Int:block.getFieldValue("arg0")}];
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  return json+",";
};
Blockly.JavaScript['Speak']=function(block){
  var  code = new Object();
  code.BlockKeyword="Speak";
  code.ParameterList= [{ParameterKeyword: "String",_String:block.getFieldValue("arg0")}];
  var json = JSON.stringify(code);//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  return json+",";
};

