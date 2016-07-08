require('../css/index.css');
var $ = require('jquery');
console.log($('body'));
$(function(){
	$('.name').text("通过jq录入的数据");
});

document.write(require("../js/content.js")); 