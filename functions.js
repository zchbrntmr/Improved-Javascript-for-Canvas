var c=document.getElementById("canvas");
var canvas={
	setBorder:function(b){
		c.style.border=b;
	},
	setWidth:function(w){
		c.width=w;
	},
	setHeight:function(h){
		c.height=h;
	},
	setSize:function(w,h){
		c.width=w;
		c.height=h;
	}
};
var ctx=c.getContext("2d");
function fill(r,g,b){
	if(arguments.length==1){
		ctx.fillStyle="rgb("+r+","+r+","+r+")";
	}else{
		ctx.fillStyle="rgb("+r+","+g+","+b+")";
	}
}
function stroke(r,g,b){
	if(arguments.length==1){
		ctx.strokeStyle="rgb("+r+","+r+","+r+")";
	}else{
		ctx.strokeStyle="rgb("+r+","+g+","+b+")";
	}
}
function rect(x,y,w,h){
	ctx.shadowBlur=20;
	ctx.shadowColor="black";
	ctx.fillRect(x,y,w,h);
}
function line(x1,y1,x2,y2){
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fill();
}
function textStyle(s,t){
	if(arguments.length==1){
		ctx.font=s+"px Arial";
	}else if(arguments.length==2){
		ctx.font=s+"px "+t;
	}
}
function text(t,x,y){
	ctx.fillText(t,x,y);
}
function shadow(s){
	ctx.shadowBlur=s;
	ctx.shadowColor="black";
}
function noShadow(){
	ctx.shadowBlur=0;
}
