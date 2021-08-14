// 使用ES6语法导入jQuery
import $ from 'jquery';

// 导入样式
import './css/index.css'
import './css/index.less'
// 导入图片
import logo from './img/logo.jpg'
// 定义jQuery函数
$(function () {
  //  jQuery 代码...
  $('li:odd').css('background-color', 'red')
  $('li:even').css('background-color', 'skyblue')
  $(".box").attr('src', logo)
  $(".box").css('width','300px')
});
