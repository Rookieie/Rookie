/*
* @Author: milkpure
* @Date:   2016-07-06 14:45:36
* @Last Modified by:   milkpure
* @Last Modified time: 2016-07-07 21:05:12
*/

'use strict';
// var a;

function sum(){
	console.log("宝宝不开心");
};
sum.prototype.all=function (){
	console.log("很不开心！");
};
var sun=new sum;
sun.all();
console.log(sun.hasOwnProperty("all"));
console.log(typeof("string"));
(function(a){
	console.log(this);
	console.log(a[0]);
}).apply(0,[3,4]);