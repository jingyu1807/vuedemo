<template>
  <div id="app">
      <el-header>
        <p id="title">课程资源一：资源名称-编程工具</p>
      </el-header>
<!--      <el-container>-->
        <div id="tab">
            <el-button id="open_file" v-on:click="openFile" >文件</el-button>
            <el-button type="primary" class="operation_button" :class="tabFocus === 1?'focus':''" @click.native="operation_button_click(1);blockToL()">流程图编辑</el-button>
            <el-button type="primary" class="operation_button" :class="tabFocus === 2?'focus':''" @click.native="operation_button_click(2);LToBlock(-2)" >积木块编辑</el-button>
            <el-button type="primary" class="operation_button" :class="tabFocus === 3?'focus':''" @click.native="operation_button_click(3);" >代码编程</el-button>
            <div id="tab_blank"></div>
            <div id="show_code_buttom" class="operation" v-on:click="showCode=!showCode" >
              <img :src="'/static/images/see.svg'" />
              <div class="operation_name">查看代码</div>
            </div>
        </div>

        <div id="content">
          <div class="black_left">
            <div id="demo_run" :class="enlarge_demo_run?'enlarge':''" >

              <!--仿真webgl展示内容-->
              <div id="demo_run_demonstration" style="width:100%;height:80%;">
                <iframe v-show="stage_show" id="iframeId" src="/static/demo/index.html" style="width:calc(100% - 4px);height:calc(100% - 4px);" scrolling="no" > </iframe>
                <iframe v-show="!stage_show" id="iframeId3" src="/static/playground/dist/index.html" style="width:calc(100% - 4px);height:calc(100% - 4px);" scrolling="yes" > </iframe>
              </div>
              <!--仿真webgl控制按钮-->
              <div id="demo_run_operation">
                <button type="primary" class="demo_run_operation_button" v-on:click="action" >{{btnName}}</button>
                <button type="primary" class="demo_run_operation_button">停止</button>
                <button type="primary" class="demo_run_operation_button">控制台</button>
                <button type="primary" class="demo_run_operation_button">设置</button>
                <div v-if="!enlarge_demo_run" id="demo_run_enlarge" @click="enlarge_demo_run=!enlarge_demo_run" >
                  <img :src="'/static/images/enlarge.svg'" />
                </div>
                <div v-if="enlarge_demo_run" id="demo_run_narrow" @click="enlarge_demo_run=!enlarge_demo_run" >
                  <img :src="'/static/images/enlarge.svg'" />
                </div>
              </div>

            </div>
<!--            场景 模型加载-->
            <div id="load_components">
              <div id="load_components_tab">
                <el-button type="primary" class="operation_button load_button" :class="loadTabFocus === 1?'focus':''" v-on:click="load_operation_button_click(1)">加载模型</el-button>
                <el-button type="primary" class="operation_button load_button" :class="loadTabFocus === 2?'focus':''" v-on:click="load_operation_button_click(2)">加载场景</el-button>
              </div>
              <div id="load_components_demonstration">
                <div class="edit_block" v-if="loadTabFocus == 1">
                  <div v-for="(loadComponent,index) in loadComponents" :key="index" class="load_component"  :class="loadComponent.is_selected?'focus':''" v-on:click="select_component(index)">
                    <div>
                      <img :src="loadComponent.img" />
                    </div>
                  </div>
                  <div id="show_load_components" class="load_component" v-on:click="show_load_components()">
                    <div >
                      <img :src="'/static/images/add.svg'" />
                    </div>
                  </div>
                </div>
                <div class="edit_block" v-if="loadTabFocus == 2">
<!--                  加载场景内容-->
                  <div v-for="(scenes,index) in scene"  :key="index" class="load_component"  :class="scenes.is_selected?'focus':''" v-on:click="select_scene(index)">
                    <div>
                      <img :src="scenes.img"  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="black_right">
<!--            流程图webgl-->
            <div class="edit_block" v-show="tabFocus == 1">
              <iframe v-on:load="frame_load" id="iframeId2" src="/static/demo2/index.html" style="width:100%;height:100%;" frameborder="0" scrolling="no" >
              </iframe>
            </div>

            <div class="edit_block" v-show="tabFocus == 2">
<!--              积木块编辑内容-->
              <div  id="blocklyDiv1" style="width:100%;height:100%"  >
              </div>
              <div id="xmldiv"  >
                <xml id="toolbox"     v-show="false">
                  <category name="测试" colour="%{BKY_TEXTS_HUE}" custom="BLOCK_PALETTE">

                  </category>
                </xml>
              </div>
            </div>
            <div class="edit_block" v-show="tabFocus == 3">
              代码编辑板块
            </div>
          </div>
          <div id="show_code" v-show="showCode">
            #代码内容
          </div>


          <div id="loadComponents_black" :class="showLoadComponents?'enlarge':''" v-show="showLoadComponents">
              <div id="loadComponents_black_tab">
                <el-button type="primary" class="operation_button loadComponents_button" :class="loadComponentsTabFocus === 1?'focus':''" v-on:click="load_components_operation_button_click(1)">设备库</el-button>
                <el-button type="primary" class="operation_button loadComponents_button" :class="loadComponentsTabFocus === 2?'focus':''" v-on:click="load_components_operation_button_click(2)">角色库</el-button>
              </div>
              <div id="loadComponents_black_demonstration">
                <div class="edit_block" v-if="loadComponentsTabFocus == 1">
<!--                  设备库内容-->
                  <div v-for="(loadComponent,index) in loadDeviceLibrary"  :key="index" class="load_component"  :class="loadComponent.is_selected?'focus':''" v-on:click="select_DeviceLibrary(index)">
                    <div>
                      <img :src="loadComponent.img" />
                    </div>
                  </div>
                </div>
                <div class="edit_block" v-if="loadComponentsTabFocus == 2">
<!--                  角色库内容-->
                  <div v-for="(loadComponent,index) in loadRoleLibrary" :key="index" class="load_component"  :class="loadComponent.is_selected?'focus':''" v-on:click="select_RoleLibrary(index)">
                    <div>
                      <img :src="loadComponent.img" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="loadComponents_black_footer">
                <el-button  class="loadComponents_peration_button" @click="show_load_components()">取消</el-button>
                <el-button type="primary" class="loadComponents_peration_button" @click="show_load_components()">确定</el-button>
              </div>
          </div>
        </div>
<!--      </el-container>-->
    <br>
  </div>
</template>

<script>



export default {
  components: {
  },
  name: "App",
  data: function(){

    return {
      blockJsonCache: {},
      btnName:"运行",
      stage_show:true,
      blockNum:10,
      ObjID:0,
      unityShow2: true,
      unityShow: false,
      testJson: "",
      workspace:null,
      xml: "<xml>",
      tabFocus: 2,
      loadTabFocus: 1,
      loadComponentsTabFocus:1,
      showCode:false,
      showLoadComponents:false,
      enlarge_demo_run:false,
      blockList:null,
      loadComponents:[

      ],
      loadDeviceLibrary:[
        {
          modelPath:'Model/Car',
          blockStart:2,
          block: [
            {
              name:"Process",
              blocks: ["Wait"]
            },
            {
              name:"Actuator",
              blocks: ["MotorStart"]
            },
            {
              name:"Sensor",
              blocks: []
            },
            {
              name:"Variate",
              blocks: []
            },
            {
              name:"Function",
              blocks: []
            }
          ],
          id:1,
          modelType:"3D",
          ModelID:1,
          is_selected:false,
          img:"/static/images/u126.svg"
        }
      ],
      loadRoleLibrary:[
        {
          modelType:"3D",
          modelPath:'Model/SM_Bean_Cowboy_01',
          blockStart:5,
          block:[
            {
              name:"Process",
              blocks: []
            },
            {
              name:"Actuator",
              blocks: ["MoveForward","TurnLeft","TurnRight"]
            },
            {
              name:"Sensor",
              blocks: []
            },
            {
              name:"Variate",
              blocks: []
            },
            {
              name:"Function",
              blocks: []
            }
          ],
          id:2,
          ModelID:3,
          is_selected:false,
          img:"/static/images/农民.png"
        },
        {
          modelType:"3D",
          modelPath:'Model/SM_Bean_Town_Female_01',
          blockStart:5,
          block:[
            {
              name:"Process",
              blocks: []
            },
            {
              name:"Actuator",
              blocks: ["MoveForward","TurnLeft","TurnRight"]
            },
            {
              name:"Sensor",
              blocks: []
            },
            {
              name:"Variate",
              blocks: []
            },
            {
              name:"Function",
              blocks: []
            }
          ],
          id:2,
          ModelID:3,
          is_selected:false,
          img:"/static/images/女孩.png"
        },
        {
          modelType:"3D",
          modelPath:'Model/SM_Bean_Female_01',
          blockStart:5,
          block:[
            {
              name:"Process",
              blocks: []
            },
            {
              name:"Actuator",
              blocks: ["MoveForward","TurnLeft","TurnRight"]
            },
            {
              name:"Sensor",
              blocks: []
            },
            {
              name:"Variate",
              blocks: []
            },
            {
              name:"Function",
              blocks: []
            }
          ],
          id:2,
          ModelID:3,
          is_selected:false,
          img:"/static/images/老师.png"
        },
        {
          modelType:"3D",
          modelPath:'Model/SM_Bean_Cop_01',
          blockStart:5,
          block:[
            {
              name:"Process",
              blocks: []
            },
            {
              name:"Actuator",
              blocks: ["MoveForward","TurnLeft","TurnRight"]
            },
            {
              name:"Sensor",
              blocks: []
            },
            {
              name:"Variate",
              blocks: []
            },
            {
              name:"Function",
              blocks: []
            }
          ],
          id:2,
          ModelID:3,
          is_selected:false,
          img:"/static/images/警察.png"
        },
        {
          modelType:"3D",
          modelPath:'Model/Player',
          blockStart:5,
          block:[
            {
              name:"Process",
              blocks: []
            },
            {
              name:"Actuator",
              blocks: ["MoveForward","TurnLeft","TurnRight"]
            },
            {
              name:"Sensor",
              blocks: []
            },
            {
              name:"Variate",
              blocks: []
            },
            {
              name:"Function",
              blocks: []
            }
          ],
          id:2,
          ModelID:3,
          is_selected:false,
          img:"/static/images/u125.svg"
        },
        {
          modelType:"2D",
          modelPath:'',
          blockStart:8,
          block:[
            {
              name:"Process",
              blocks: []
            },
            {
              name:"Actuator",
              blocks: ["WalkForward","WalkBack","Speak"]
            },
            {
              name:"Sensor",
              blocks: []
            },
            {
              name:"Variate",
              blocks: []
            },
            {
              name:"Function",
              blocks: []
            }
          ],
          id:2,
          ModelID:5,
          is_selected:false,
          img:"/static/images/cat.jpg"
        },
        {
          modelType:"3D",
          modelPath:'Model/KartPlayer',
          blockStart:10,
          block:"KartPlayer",
          id:2,
          ModelID:7,
          is_selected:false,
          img:"/static/images/people.jpg"
        }
      ],
      scene:[
        {
          scenePath:"tensorflow",
          sceneType: "2D",
          car:1,
          ModelID:2,
          is_selected:false,
          img:"/static/images/tensorflow.png"
        },
        {
          scenePath:"Scene/Sandbox1",
          sceneType: "3D",
          car:1,
          ModelID:2,
          is_selected:false,
          img:"/static/images/u132.png"
        },
        {
          scenePath:"Scene/Sandbox2",
          sceneType: "3D",
          role:1,
          ModelID:4,
          is_selected:false,
          img:"/static/images/u134.png"
        },
        {
          scenePath:"Scene/DrawingRoom",
          sceneType: "2D",
          role:1,
          ModelID:6,
          is_selected:false,
          img:"/static/images/客厅.png"
        },
        {
          scenePath:"Scene/TrackMap",
          sceneType: "3D",
          role:1,
          ModelID:8,
          is_selected:false,
          img:"/static/images/赛道.png"
        }

      ]

    }

  },
  created() {
    // 获取流程图变成json
    //注意，有个坑：event那里必须写成箭头函数，负责下面的this指向不对
    window.addEventListener('message',(event)=>{
      if(JSON.parse(event.data).ModelName==""||JSON.parse(event.data).ModelName==null){
        return
      }
      this.blockJsonCache[JSON.parse(event.data).ModelName]=JSON.parse(event.data).SimJson
      this.blockToWorkspace(JSON.parse(event.data).SimJson)
    })

    // unity点击时调用(unity场景)
    // window['message'] = (aaa) => {
    // };


  },
  mounted() {
    // 加载block
    this.loadBlock()
    //block工作台监听函数
    this.workspace.addChangeListener(this.onFirstComment);

  },
  methods: {
    //流程图转积木块回显在工作台
    blockToWorkspace: function(event){
      if(event==null){
        return
      }
      this.xml = "<xml>"
      //console.log(event.data)
      this.testJson=event;
      //alert(event)
      var b="<xml>"
      var item = 0
      if( JSON.parse(event).BlockInfoList.length==0){
        return
      }
      JSON.parse(event).BlockInfoList.map((x,index)=>{
        item = this.digui2(x,item)
      })
      this.xml +="</block>"
      for(var i=0; i<item;i++){
        this.xml += "</next></block>"
      }
      this.xml +="</xml>"
      this.workspace.clear()
      const xml = Blockly.Xml.textToDom(this.xml)      // 回显数据
      Blockly.Xml.domToWorkspace(xml, this.workspace);

    },
    //block监听事件回调函数
    onFirstComment:function(event){
      console.log(event)
      this.blockToLiu()
      let message= {}
      if (event.type == Blockly.Events.BLOCK_CHANGE &&
        (this.workspace.getBlockById(event.blockId).type=="HIDDEN_LAYERS"
          ||this.workspace.getBlockById(event.blockId).type=="NEURONS")) {
        if(this.workspace.getBlockById(event.blockId).type=="HIDDEN_LAYERS"&& event.oldValue != event.newValue){
          message={
                  code:0,
                  num:event.newValue
          }
        }else if(this.workspace.getBlockById(event.blockId).type=="NEURONS"&& event.oldValue != event.newValue){
          //console.log()
          message={
            index:this.workspace.getBlockById(event.blockId).getFieldValue("arg0"),
            code:1,
            num:this.workspace.getBlockById(event.blockId).getFieldValue("arg1")
          }
        }

        var frame = document.getElementById('iframeId3');
        frame.contentWindow.postMessage( message,'*');
      }

    },
    //动态加载块儿函数回调函数
    coloursFlyoutCallback : function() {
      var x=8;
      if(this.blockNum==5){
        x=2
      }else if(this.blockNum==8){
        x=5
      }else if(this.blockNum==2){
        x=0
      }
      var xmlList = [];
      var colourList= ["MotorStart","Wait","MoveForward","TurnRight","TurnLeft","WalkForward","WalkBack","Speak","HIDDEN_LAYERS","NEURONS"]
      //var colourList= this.blockList
      // colourList.map(x=>{
      //   var blockText = '<block type="'+x+'">' +
      //     '</block>';
      //   var block = Blockly.Xml.textToDom(blockText);
      //   xmlList.push(block);
      // })
      for (var i = x; i < this.blockNum; i++) {
          var blockText = '<block type="'+colourList[i]+'">' +
            '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      return xmlList;
    },
    frame_load:function(){
      var ifm= document.getElementById("iframeId2");
      ifm.height= document.documentElement.clientHeight;
      ifm.width= document.documentElement.clientWidth;
    },
    getUrlBase64:function(url, ext, callback) {
      var canvas = document.createElement("canvas"); //创建canvas DOM元素
      var ctx = canvas.getContext("2d");
      var img = new Image;
      img.crossOrigin = 'Anonymous';
      img.src = url;
      img.onload = function () {
        canvas.height = 60; //指定画板的高度,自定义
        canvas.width = 85; //指定画板的宽度，自定义
        ctx.drawImage(img, 0, 0, 60, 85); //参数可自定义
        var dataURL = canvas.toDataURL("image/" + ext);
        callback.call(this, dataURL); //回掉函数获取Base64编码
        canvas = null;
     }
     },
    show_load_components: function(){
      let message= {}

      this.loadRoleLibrary.forEach((x)=>{
        if( x.is_selected){
          if(x.modelPath!=""){
            this.ObjID ++
            message=
              {
                modelType:x.modelType,
                modelName:this.ObjID,
                modelPath:x.modelPath,
                image:"",
                size:"",
              }

          }else {
            this.getUrlBase64(x.img, "png", function (base64) {

              this.ObjID ++
              message=
                {
                  modelType:x.modelType,
                  modelName:this.ObjID,
                  modelPath:x.modelPath,
                  image:base64,
                  size:"218,237", //宽，高
                }

              var jsonStr = JSON.stringify(message);
              var frame = document.getElementById('iframeId');
              frame.contentWindow.postMessage( {code:1,message:jsonStr},'*');

            });
          }
          this.loadComponents.push({
            blockStart: x.blockStart,
            block: x.block,
            ObjID:this.ObjID,
            is_selected:!x.is_selected,
            img:x.img
          })
          x.is_selected=!x.is_selected
        }
      })
      this.loadDeviceLibrary.forEach((x)=>{
        if( x.is_selected){
          if(x.modelPath!=""){
            this.ObjID ++
            message=
              {
                modelType:x.modelType,
                modelName:this.ObjID,
                modelPath:x.modelPath,
                image:"",
                size:"",

              }

          }else {
            this.getUrlBase64(x.img, "png", function (base64) {
              this.ObjID ++
              message=
                {
                  modelType:x.modelType,
                  modelName:this.ObjID,
                  modelPath:x.modelPath,
                  image:base64,
                  size:"218,237", //宽，高
                }
              console.log(base64)
            });
          }
          this.loadComponents.push({
            blockStart: x.blockStart,
            block: x.block,
            ObjID:this.ObjID,
            is_selected:!x.is_selected,
            img:x.img
          })
          x.is_selected=!x.is_selected
        }
      })
      this.showLoadComponents = !this.showLoadComponents
      var jsonStr = JSON.stringify(message);
      var frame = document.getElementById('iframeId');
      frame.contentWindow.postMessage( {code:1,message:jsonStr},'*');


    },
    loadBlock: function(){
      let blocklyDiv = document.getElementById('blocklyDiv1');

      this.workspace = Blockly.inject(blocklyDiv, {
        media: '../static/blockly/media/',
        toolbox: document.getElementById('toolbox'),
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.5,
          scaleSpeed: 1.05
        },
        trashcan: true,
        scrollBar: true
      });
      this.workspace.registerToolboxCategoryCallback(
        'BLOCK_PALETTE', this.coloursFlyoutCallback)
      //document.getElementById('toolbox').getToolboxItems()
      // 调整工作区域大小
      // const onresize = function (e) {
      //   Blockly.svgResize(this.workspace);
      // };
      // // 注册resize处理函数
      // window.addEventListener('resize', onresize);
      // Blockly.svgResize(this.workspace);
    },
    select_component: function(index){
      var objecID=""
      this.loadComponents[index].is_selected = !this.loadComponents[index].is_selected
      this.loadComponents.forEach((x,index1)=>{
        if(index1 != index&&x.is_selected){
          objecID=x.ObjID
          x.is_selected=false
          return
        }
      })
      this.workspace.clear()
      if (this.tabFocus == 2) {
        this.blockToWorkspace(this.blockJsonCache[this.loadComponents[index].ObjID])
      }else if(this.tabFocus == 1){

        this.LToBlock(objecID)
        const frame = document.getElementById('iframeId2');
        frame.contentWindow.postMessage({code:2,message:JSON.stringify(this.loadComponents[index].block)},'*');
        frame.contentWindow.postMessage({code:1,message:this.blockJsonCache[this.loadComponents[index].ObjID]},'*');
      }
      this.blockNum=this.loadComponents[index].blockStart
      this.workspace.registerToolboxCategoryCallback(
        'BLOCK_PALETTE', this.coloursFlyoutCallback)


    },
    select_RoleLibrary: function (index){
      this.loadRoleLibrary[index].is_selected = !this.loadRoleLibrary[index].is_selected
    },
    select_DeviceLibrary: function (index){
      this.loadDeviceLibrary[index].is_selected = !this.loadDeviceLibrary[index].is_selected
    },
    select_scene:function (index){
      this.scene.forEach((x,index1)=>{
        if(index1 != index){
          x.is_selected=false
        }
      })
      if(this.scene[index].scenePath=="tensorflow"){
        this.stage_show=false;
      }else{
        this.stage_show=true;
      }
      this.loadComponents=[]
      this.ObjID ++
      const message= {
        clearScene:true,
        sceneType:this.scene[index].sceneType,
        sceneName:this.ObjID,
        scenePath:this.scene[index].scenePath,
        modelList:[]
      }
      //todo 场景默认自带模型
      // if(this.scene[index].ModelID==2){
      //   this.ObjID ++
      //   this.loadComponents.push({
      //     ModelID:1,
      //     ObjID:this.ObjID,
      //     is_selected:false,
      //     img: "/static/images/u126.svg"
      //   })
      //   message.modelList.push(
      //     {
      //       // modelType:x.modelType,
      //       // modelName:this.ObjID,
      //       // modelPath:x.modelPath,
      //       // image:"",
      //       // size:"",
      //       // ModelID:1,
      //       // ObjID: this.ObjID
      //     }
      //   )
      // }
      const jsonStr = JSON.stringify(message);
      const frame = document.getElementById('iframeId');
      frame.contentWindow.postMessage( {code:3,message:jsonStr},'*');

      this.scene[index].is_selected = !this.scene[index].is_selected
    },
    openFile: function() {
      console.log("openFile")
    },
    runCode: function() {
      console.log("仿真")
    },
    load_components_operation_button_click: function (curr_index) {
        this.loadComponentsTabFocus=curr_index
    },
    load_operation_button_click: function (curr_index) {
        this.loadTabFocus=curr_index
    },
    operation_button_click: function (curr_index) {
        this.tabFocus=curr_index
    },
    block_Json_Cache:function(json){
      this.loadComponents.forEach((x,index1)=>{
        if(x.is_selected){
          this.blockJsonCache[x.ObjID]=json
        }
      })
    },
    LToBlock: function (objecID){
      if(objecID==-2){
        this.loadComponents.forEach((x,index1)=>{
          if(x.is_selected){
            objecID=x.ObjID
          }
        })
      }
      const frame = document.getElementById('iframeId2');
      frame.contentWindow.postMessage({code:0,message:objecID+"",},'*');
    },
    blockToL:function(){
      const json = this.blockToLiu();

      //let iframeWin =this.$refs.iframe.contentWindow;
      //iframeWin.
      const frame = document.getElementById('iframeId2');
      frame.contentWindow.postMessage({code:1,message:json},'*');
    },
    digui2: function (a,item){

      //console.log(a.BlockKeyword)
      this.xml += "<block type=\""+a.BlockKeyword+"\">"
      if(a.ParameterList.length>0&&a.ParameterList!=null){
        a.ParameterList.map((x,index)=>{
          this.xml+="<field name=\"arg"+index+"\">"+x["_"+x.ParameterKeyword]+"</field>"
        })
      }

      for (let children in  a.BlockChildren) {
        if(a.BlockChildren[children]!=null&&a.BlockChildren[children]!=""){
           switch (children){
             case "DownChild":
               this.xml+="<next>";
               item++
               return this.digui2(a.BlockChildren[children],item)
             case "WhileChild":
             case "ElseChild":
           }
         }
        //console.log(obj[key]) // foo, bar
      }
      //console.log(item)
      return  item

    },
    digui: function ( arr, b,c){
      if(c<arr.length){
             c++
             b.BlockChildren = {DownChild:this.digui(arr,arr[c],c)}
      }
      return b;
    },
    // `this` 在方法里指向当前 Vue 实例
    // `event` 是原生 DOM 事件
    blockToLiu: function (){
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      Blockly.JavaScript.workspaceToCode()
      var code = Blockly.JavaScript.workspaceToCode(this.workspace);
      if (code == "") {
        return
      }
      var arr = code.split('\n');//\n区分多组不同积木块
      var str = arr[0].slice(0, arr[0].length - 1)
      var c = 1;
      var arr1 = JSON.parse("[" + str + "]");
      // switch (arr1[0].BlockChildren) {
      //   case "DownChild":
          arr1[0].BlockChildren = {DownChild: this.digui(arr1, arr1[c], c)}
      //   case "WhileChild":
      //   case "ElseChild":
      // }
      this.testJson = "{\"BlockInfoList\":[" + JSON.stringify(arr1[0]) + "]}"
      this.block_Json_Cache(this.testJson)
      return this.testJson;

    },
    action: function (event,a) {
      switch (this.btnName){
        case "运行":this.btnName="暂停" ;
        break
        case "暂停": this.btnName="继续";
        break
        case "继续": this.btnName="暂停";
          break
      }
      if (this.tabFocus == 2) {
        this.blockToLiu()
        const frame = document.getElementById('iframeId');
        frame.contentWindow.postMessage({code: 2, message: this.blockJsonCache}, '*');
      }else if(this.tabFocus == 1){
        this.LToBlock(-2)
        setTimeout(()=>{
           const frame = document.getElementById('iframeId');
           frame.contentWindow.postMessage({code: 2, message: this.blockJsonCache}, '*');
         },100)
        //alert(this.testJson)
      }

      //this.$refs.unityvue.message('Manager', 'ReceiveJson', jsontest)

    },
    greet: function (event) {
      this.unityShow="0"

      const frame = document.getElementById('iframeId');
      frame.contentWindow.postMessage({code:2,message:this.testJson},'*');
      // 播放监控（和 unity 交互）

      //this.$refs.unityvue.message('Manager', 'ReceiveJson', )

    },
    display: function (event) {
      this.unityShow2=!this.unityShow2
    }
  },
};
</script>

<style>
html{
  background-color: #f1f6f2;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 796px);
  width: calc(100% - 1.6px);
  min-width: 1580px;
  min-height: 682px;
  /* margin-top: 60px; */
}
.el-header {
  display:flex;
  height: 8% !important;
  font-size: 24px;
  text-align: left;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  background-color: #FFF;
  color: #333;
}
#title{
    width: 100%;
    margin: auto;
}
.el-container {
    display: block;
    height: 92%;
}
#tab{
    display:flex;
    width: 100%;
    height: 10%;
    background-color: rgba(32, 38, 50, 1);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(121, 121, 121, 1);
    font-size: 13px;
    line-height: 67px;
}
#open_file{
    margin: auto 22% auto 17px;
    float: left;
    width: 92px;
    height: 33px;
    border-color: rgba(121, 121, 121, 1);
    border-radius: 0px;
    -ms-flex-item-align: center;
    padding: 2px 2px 2px 2px;
}
.operation_button{
  padding:unset;
  width: 105px;
  height: 40px;
  color: #080808;
  background-color: rgb(241, 246, 242);
  border-color: rgba(121, 121, 121, 1);
  float: left;
  margin: auto 17px;
}
.operation_button:hover{color: rgb(241, 246, 242);background-color: #70ecb8;border-color: #3da87c;}
.operation_button:focus{background-color: #3da87c;border-color: #3da87c;}
.operation_button.focus{background-color: #3da87c;border-color: #3da87c;color:rgba(241, 246, 242, 1);}
#tab_blank{
  width: calc(73% - 576px);
}
.operation {
  cursor:pointer;
  float: right;
  height: 53px;
  line-height: normal;
  margin: auto 15px;
}
.operation>img{
  height: 33px;
}
.operation>.operation_name{
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    color: #EEEEEE;
    font-size: 14px;
}
#content{
  /* display: -webkit-box; */
  position: relative;
  background-color: rgba(241, 246, 242, 1);
  width: 100%;
  height: 100%;
}
#show_code{
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  position: absolute;
  background: #FFF;
  right: 0px;
  width: 27%;
  height: calc(100% - 2px);
  text-align: left;
}
#show_code1{
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  position: absolute;
  background: #FFF;
  right: 0px;
  width: 27%;
  height: calc(100% - 2px);
  text-align: left;
}
.black_left{
  padding: 5px;
  width: 30%;
  height: 100%;
  float: left;
}
#demo_run{
  padding: 5px;
  border-radius: 4px;
  height: 45%;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  background-color: rgba(255, 255, 255, 1);
}
#demo_run_demonstration {
  height: 80%;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
}
#demo_run_operation {
    width: 100%;
    height: 20%;
}
.demo_run_operation_button{
    margin: 3% 1%;
    font-size: 12px;
    width: 15%;
    height: 46%;
}
#demo_run_enlarge {
    cursor: pointer;
    float: right;
    margin: 3% 1%;
}
#demo_run_narrow{
    cursor: pointer;
    float: right;
    margin: 3% 3%;
}
#load_components{
  display: block;
  border-radius: 4px;
  height: calc(55% - 40px);
  margin-top: 10px;
  padding: 5px;
  background-color: rgba(198, 198, 198, 1);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);

}
#load_components_tab {
    width: 100%;
    height: 50px;
}
.load_button {
  position: relative;
  bottom: 0px;
  margin: 10px 10px 0px 10px;
}
.el-aside{
    width: 100% !important;
    height: 100% !important;
}
#load_components_demonstration {
  display: inline-table;
  width: calc(100% - 12px);
  height: calc(100% - 50px);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  background: #FFF;
  border-radius: 4px;
  padding: 5px;
}
.black_right{
  float: right;
  width: calc(70% - 10px);
  height: 100%;
}
.edit_block{
  width: 100%;
  height: 100%;
  overflow:auto;
}
.el-main{
  padding: unset;
  width: 100% !important;
}
.load_component{
  cursor:pointer;
  float: left;
  margin: 10px;
  width: calc(25% - 22px);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  position: relative;
}
.load_component>div{
    margin: 15px;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
}

.load_component::before{
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
}
.load_component>div>img{
    width: 100%;
    height: 100%;
}
.load_component.focus {
    background-color: rgb(61 168 124);;
}
#loadComponents_black{

    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    width: 60% !important;
    height: 80% !important;
    left: 20%;
    top: 10%;
    margin: auto;
    background: #FFF;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(121, 121, 121, 1);
}


#loadComponents_black_tab {
    width: 100%;
    height: 50px;
}
.loadComponents_button {
  position: relative;
  bottom: 0px;
  margin: 10px 10px 0px 10px;
}
#loadComponents_black_demonstration {
  width: calc(100% - 2px);
  height: calc(100% - 100px);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
}
#loadComponents_black_footer {
    width: 100%;
    height: 50px;
}
.loadComponents_peration_button {
  margin: 9px 1%;
  width: 140px;
  height: 40px;
}
.enlarge{
    width: calc(100% - 10px) !important;
    height: calc(100% - 2px) !important;
    position: absolute;
    z-index: 72;
    top: 0px;
    left: 0px;
}
</style>
