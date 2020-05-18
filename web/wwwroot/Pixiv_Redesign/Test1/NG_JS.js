var isrun = 0;
var photono = 1;
var ty = 768;
var titles = new Array("UNSUNG HERO", "SYRIAN REFUGEE GRIL");
var introductions = new Array("A Farmer burning the rice residues after harvest, to quickly prepare the land for wheat planting. It was really hard to stand out there and get the job done in that heat.","A syrian refugee girl from Istanbul. Their living conditions are too bad...");
var labels = new Array("Label1.png","Label2.png");
var avatars = new Array("author1.png", "author2.png");
var authornames = new Array("PRASANTH R", "MURAT DOGAN");
var hasliked = new Array(0, 0);
var hasshared = new Array(0, 0);
var likenum = new Array(41, 37);
var sharenum = new Array(22, 16);

function Like(){
	if(hasliked[photono] == 1) return;

	x=document.getElementById("likes"); 	//通过id查找元素
	likenum[photono]++;
	x.innerHTML = likenum[photono];
	
	y = document.getElementById("likept"); 
	y.src = "hasliked.png";
	
	hasliked[photono] = 1;
}

function Share(){
	alert('Share success!');
	x=document.getElementById("shares"); 	//通过id查找元素
	if(hasshared[photono] == 0) sharenum[photono]++;
	x.innerHTML = sharenum[photono];
	hasshared[photono] = 1;
}

function run(){
	x=document.getElementById("body");
	wheel(x, movedown, moveup);

}

function changedata(){
q = document.getElementById("photoname");
q.innerHTML = titles[photono];
w = document.getElementById("Label");
w.src = labels[photono];
e = document.getElementById("Introduction");
e.innerHTML = introductions[photono];
r = document.getElementById("avatar");
r.src = avatars[photono];
t = document.getElementById("authorname");
t.innerHTML = authornames[photono];
y = document.getElementById("likes");
y.innerHTML = likenum[photono];
u = document.getElementById("shares");
u.innerHTML = sharenum[photono];
v = document.getElementById("likept");
if(hasliked[photono] == 0) v.src = "like.png";
else v.sce = "hasliked.png";
}

function movedown(){
console.log(isrun);
console.log(photono);
	if(isrun == 1) return;
	if(photono == 1) return;
	isrun = 1;
	photono = 1;
	
	pt=document.getElementById("photos");
		dynamics.animate(pt,{
			translateY:0
		},{
			type: dynamics.bezier,
			duration: 800,
			points:	[{"x":0,"y":0,"cp":[{"x":0,"y":0}]},
					{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
		});
	changedata();
	setTimeout(resetisrun,1000);
}

function moveup(){
console.log(isrun);
console.log(photono);
	if(isrun == 1) return;
	if(photono == 0) return;
	isrun = 1;
	photono = 0;
	
	var aaaaa = -768;
	
	pt=document.getElementById("photos");
		dynamics.animate(pt,{
			translateY: aaaaa
		},{
			type: dynamics.bezier,
			duration: 800,
			points:	[{"x":0,"y":0,"cp":[{"x":0,"y":0}]},
					{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
		});
	changedata();
	setTimeout(resetisrun,1000);
}
 
function resetisrun(){
	isrun = 0;
}
 
//以下函数来自网络
function wheel(obj,upFn,downFn) {
    obj.onmousewheel = fn;  
    obj.addEventListener && obj.addEventListener('DOMMouseScroll',fn,false);
    function fn(ev){
        var ev =  window.event;
        var bool = true;
        if(ev.wheelDelta){
            bool = ev.wheelDelta > 0 ? true : false;
        }else if(ev.detail){
            bool = ev.detail < 0 ? true : false;
        }
        bool && upFn();
        (!bool) && downFn();
    }
}