require('../css/index');
// var $ = require('jquery'); 
// $(function(){
// 	$('body').append("通过jq录入的数据");
// });
require.ensure("jquery", function(require) {
    var $ = require('jquery'); 
    $(function(){
    	$('body').append("通过jq录入的数据");
    });
}, "a");
document.write(require("./content"));
