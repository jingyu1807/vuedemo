
'use strict';
goog.provide('Blockly.Blocks.LED');
goog.require('Blockly.Blocks');

Blockly.Constants.Colour.HUE = 20;

Blockly.defineBlocksWithJsonArray([
  {
    "type": "MotorStart",
    "message0": '电机启动 端口号%1   转向 %2  功率%3 ',
    "args0": [
      {
        "type": "field_dropdown",
        "name": "arg0",
        "options": [
          ["端口1", "1"],
          ["端口2", "2"],
          ["端口3", "3"],
          ["端口4", "4"],
          ["端口5", "5"],
          ["端口6", "6"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "arg1",
        "options": [
          ["顺时针", "0"],
          ["逆时针", "1"]
        ]
      },{
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg2"  // 参数名
      }
      ],
    "previousStatement": null,
    "nextStatement": null,
    "inputs": "bottom connection",
    "colour": 160,
    "tooltip": "Returns number of letters in the provided text.",
    "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
  },
  {
    "type": "Wait",     // 块名字
    "message0": " 单位%1  延迟等待%2 ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_dropdown",
        "name": "arg0",
        "options": [
          ["秒",   "s"],
          ["毫秒", "ms"]
        ]
      },
        {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg1"  // 参数名
        }

        ],
       "previousStatement": null,
       "nextStatement": null,
        "colour": "#04B2FF",  //颜色
        "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
         "tooltip": "",// tool提示
        "helpUrl": "" ,   //帮助提示
        //....其他
        //"output": "String",// 输出类型

    },
  {
    "type": "MoveForward",     // 块名字
    "message0": " 移动%1步 ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },
  {
    "type": "TurnRight",     // 块名字
    "message0": " 右转%1度 ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },
  {
    "type": "TurnLeft",     // 块名字
    "message0": " 左转%1度 ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },
  {
    "type": "WalkForward",     // 块名字
    "message0": " 向前%1步 ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },
  {
    "type": "WalkBack",     // 块名字
    "message0": " 向后%1步 ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },
  {
    "type": "Speak",     // 块名字
    "message0": " 讲话内容%1 ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_input",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },

  {
    "type": "HIDDEN_LAYERS",     // 块名字
    "message0": " %1 HIDDEN LAYERS ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },
  {
    "type": "NEURONS",     // 块名字
    "message0": " %1 index   %2 neurons ",      // 块上的文字 及其 参数   如果有多个则为 %1 %2 %3
    "args0": [// 参数 数组 可多个
      {
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg0"  // 参数名
      },{
        "type": "field_number",   // 参数类型   有很多 常用： field_input field_number field_dropdown  input_value
        "name": "arg1"  // 参数名
      }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04B2FF",  //颜色
    "inputsInline": true,  //是否是输入行内联 （就是通常右边直接接一个输入块）
    "tooltip": "",// tool提示
    "helpUrl": "" ,   //帮助提示
    //....其他
    //"output": "String",// 输出类型

  },

  {
    "type": "controls_whileUntil222",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]
        ]
      },
      {
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "helpUrl": "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    "extensions": ["controls_whileUntil_tooltip"]
  }



])


