<template>


 <div id="app" width="1000" height="600">

   <br>


<!--    <script type="text/javascript" src="static/webgl/Build/UnityLoader.js"></script>-->

  </div>
</template>

<script>
import Unity3 from "vue-unity-webgl";


export default {
  components: { Unity3
  },
  name: "App2",
  data: function(){

    return {
      testJson: "",
      workspace:null,
      xml:"<xml>"
    }

  },
  mounted() {
    let blocklyDiv = document.getElementById('blocklyDiv1');
    //alert(blocklyDiv)
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
    //调整工作区域大小
    var onresize = function (e) {
      Blockly.svgResize(this.workspace);
    };
    //注册resize处理函数
    window.addEventListener('resize', onresize);
    Blockly.svgResize(this.workspace);
    alert(this.workspace)
    // // 需要将保存的 xmlText 转为 xml dom 对象
    // const xml = Blockly.Xml.textToDom("<xml ><block type=\"MotorStart\" id=\"=c=-SBMM)DA=osI};r,#\" x=\"79\" y=\"16\"><field name=\"端口\">1</field><field name=\"转向\">0</field><field name=\"DO\">0</field><next><block type=\"Wait\" id=\"pVrnOaxH[ez(6F;[(iLR\"><field name=\"DO\">0</field><field name=\"单位\">s</field></block></next></block></xml>");
    // // // 回显数据
    // Blockly.Xml.domToWorkspace(xml, this.workspace);
  },
  methods: {
    hhee: function (){
      // // 需要将保存的 xmlText 转为 xml dom 对象
      const xml = Blockly.Xml.textToDom("<xml ><block type=\"MotorStart\" id=\"=c=-SBMM)DA=osI};r,#\" x=\"79\" y=\"16\"><field name=\"端口\">1</field><field name=\"转向\">0</field><field name=\"DO\">0</field><next><block type=\"Wait\" id=\"pVrnOaxH[ez(6F;[(iLR\"><field name=\"DO\">0</field><field name=\"单位\">s</field></block></next></block></xml>");
      // // 回显数据
      Blockly.Xml.domToWorkspace(xml, this.workspace);
      // workspacealert(this.workspace)
      return this.workspace
    },

  }

};
</script>

<style>
#unityDiv{
  float:left
}
#blocklyDiv{
  float:left

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
