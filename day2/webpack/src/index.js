console.log(1);
// 第三方模块
let $ = require('jquery'); 
console.log($)
// 自定义模块
let utils = require('../libs/utils.js');
console.log(utils.plus(6,7))
// css资源
require('../styles/index.css');
// 
// 图片资源
let img = require('../imgs/laolan.jpg');
$("body").html(`<img src="${img}" />`)