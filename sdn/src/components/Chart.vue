<template>
  <div>
    <header id="headline">
      <h2 id="main">实时监控流量</h2>
    </header>
    <div id="left"></div>
    <div id="right"></div>
    <div id="btn">
      <button id="btn1">左图按钮</button>
      <button id="btn2">右图按钮</button>
    </div>
    <!-- <h2 style="text-align:center">流量速度监测</h2> -->
  </div>
</template>
 
<script>
import * as echarts from 'echarts'
export default {
  mounted() {
    let chartDom = document.getElementById('left') //选择dom容器
    let chartDom2 = document.getElementById('right') //选择dom容器
    let myChart = echarts.init(chartDom, 'white') //初始化echarts实例，选择背景颜色
    let myChart2 = echarts.init(chartDom2, 'white') //初始化echarts实例，选择背景颜色
    let option
    option = {
      title: {
        text: '堆叠区域图',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            show: true,
            position: 'top',
          },
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    }

    option && myChart.setOption(option)

    let option2
    option2 = {
      series: [
        {
          type: 'gauge',
          progress: {
            show: true,
            width: 18,
          },
          axisLine: {
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10,
            },
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%'],
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    }
    option2 && myChart2.setOption(option2)
  },
}
</script>
 
<style>
#headline {
  padding: 30px 0;
}
#main {
  text-align: center;
}
#left {
  height: 500px;
  width: 50%;
  float: left;
}
#btn{
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;/* 等分 */
  clear: left;/*清除浮动*/
}

#right {
  height: 500px;
  width: 50%;
  float: left;
}
</style>