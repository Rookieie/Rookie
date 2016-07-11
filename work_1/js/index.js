var eventHandler={
　　        addHandler:function(element,type,func){
　　            if(element.addEventListener){
　　                element.addEventListener(type,func,false);
　　            }else if(element.detachEvent){
 　　               element.attachEvent('on'+type,func);
 　　           }else{
  　　              element['on'+type]=func;
  　　          }
　　        },
　　        removerHandler:function(element,type,func){
　　            if(element.removeEventListener){
　　                element.removeEventListener(type,func,false);
　　            }else if(element.detachEvent){
 　　               element.detachEvent('on'+type,func);
 　　           }else{
　　                element['on'+type]=null;
  　　          }
   　　     }
　　    }//兼容
var screen=document.getElementById("screen");//绑定显示框
var flag=-1;//判断有没有运算符 
var flag_=-1;
var number1="";//存储第一个操作数
var number2="";//存储第二个操作数
var times=0;//判断有没有进行过计算
function Read(value){
	screen.value+=value;
}//读取输入的内容
function count(value){
		switch(true){
			case(screen.value).indexOf("+")!=-1:
				flag=(screen.value).indexOf("+");
				number1=(screen.value).slice(0,flag);
				number2=(screen.value).slice((flag-0)+1);
				screen.value=(number1-0)+(number2-0);
				times=1;
				break;//加法运算
			case(screen.value).indexOf("-")!=-1:
				flag=(screen.value).indexOf("-");
				number1=(screen.value).slice(0,flag);
				number2=(screen.value).slice((flag-0)+1);
				screen.value=number1-number2;
				times=1;
				break;//减法运算
			case(screen.value).indexOf("*")!=-1:
				flag=(screen.value).indexOf("*");
				number1=(screen.value).slice(0,flag);
				number2=(screen.value).slice((flag-0)+1);
				if(number2==""){
					number2="1";
				}
				screen.value=parseFloat((number1*number2).toFixed(8));
				times=1;
				
				break;//乘法运算
			case(screen.value).indexOf("/")!=-1:
				flag=(screen.value).indexOf("/");
				number1=(screen.value).slice(0,flag);
				number2=(screen.value).slice((flag-0)+1);
				if(number2=="0"){
					screen.value="除数不能为0";
				}else{
					if(number2==""){
						number2="1";
					}
					screen.value=parseFloat((number1/number2).toFixed(8));
					times=1;	
				}
				break;//除法运算\
			case(screen.value).indexOf("cos")!=-1:
				number1=(screen.value).slice(3);
				screen.value=(Math.cos(number1*Math.PI/180)).toFixed(8);
				break;
			case(screen.value).indexOf("sin")!=-1:
				number1=(screen.value).slice(3);
				screen.value=(Math.sin(number1*Math.PI/180)).toFixed(8);
				break;
			}
	}
//根据运算符进行相应的运算
function counter(){
	var value=this.value;
	if(value!="="&&times==0){
		Read(value);
	}//读取输入的内容
	if(value=="="||(((screen.value).indexOf("+")!=-1||(screen.value).indexOf("-")!=-1||(screen.value).indexOf("*")!=-1||(screen.value).indexOf("/")!=-1)&&(value=="+"||value=="-"||value=="*"||value=="/"))){
				count(value);
		}
	if(times==1&&value!="="){
		Read(value);
	}
	if(value=="C"){
		screen.value="";
	}//重置
}
var table=document.getElementById("table");
var inputArry=table.getElementsByTagName("input");
for(var i=0;i<inputArry.length;i++){
	eventHandler.addHandler(inputArry[i],"click",counter);
}
var table=document.getElementById("table");
var inputArry=table.getElementsByTagName("input");
for(var i=0;i<inputArry.length;i++){
	eventHandler.addHandler(inputArry[i],"click",counter);
}//循环获得inputArry
