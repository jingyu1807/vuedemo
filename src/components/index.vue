<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'block',
  data () {
    return {
      workspace:null
    }
  },
  mounted() {

    let blocklyDiv = document.getElementById('blocklyDiv1');
    alert(blocklyDiv)
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

    // // 需要将保存的 xmlText 转为 xml dom 对象
    //const xml = Blockly.Xml.textToDom("<xml ><block type=\"MotorStart\" id=\"=c=-SBMM)DA=osI};r,#\" x=\"79\" y=\"16\"><field name=\"端口\">1</field><field name=\"转向\">0</field><field name=\"DO\">0</field><next><block type=\"Wait\" id=\"pVrnOaxH[ez(6F;[(iLR\"><field name=\"DO\">0</field><field name=\"单位\">s</field></block></next></block></xml>");
    // // 回显数据
    //Blockly.Xml.domToWorkspace(xml, this.workspace);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
