//Js在HTML内写在</script>中
//写在外部.Js中, 无需</script>, HTML文档用</script src = "xxx.js">引用


/*Javascript事件
onclick
*/


//Js对象（变量）定义
var a = xxx;
c = xxxx;								//全局变量(无var)，即使在函数内声明
//js类定义(记住末尾为，)
var person={
firstname : "Bill",
lastname  : "Gates",
id        :  5566
};
//Js对象定义
person=new Object();					//重点
person.firstname="Bill";
person.lastname="Gates";
person.age=56;
person.fuck()
//变量也是对象，创建对象会自带一些方法。
//比如字符串：
var s = "FUCKJP";
var b = s.length();						//b = 6


//函数定义：function functionname(var1，var2)
//Javascript函数
alert("...")
document.write("...")	html输出(不要在网页渲染完成后使用)

//一些常用操作
x=document.getElementById("idname") 	//通过id查找元素
x.innerHTML="Hello JavaScript";   		//改变文档内容
x.valuexxx = "..."				  		//改变属性内容

isNaN(x)								//判断x是不是非数字

x.toUpperCase()							//变为大写


//数组定义（用 new）
var cars=new Array("xxx","xxxx","xxxxx", ...);


//for(a : b)
for (x in person)
