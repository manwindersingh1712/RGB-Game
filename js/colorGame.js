var numSquares=6;
var color=arrayOfColors(numSquares);
var sql=document.querySelectorAll(".square");
var pickedColor= picked();
var displayColor=document.getElementById("colorDisplay");
var result=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var disco=document.querySelector("#disco");
var stop=0;

displayColor.textContent=pickedColor;

reset.addEventListener("click",function(){

if(stop!=0){
	clearInterval(stop);
	stop=0;
}

color=arrayOfColors(numSquares); 
pickedColor=picked();
displayColor.textContent=pickedColor;
for(var i=0;i<sql.length;i++){
	sql[i].style.background=color[i];
}
h1.style.background="steelblue";
result.textContent="";
this.textContent="New Color";
})


for(var i=0;i<sql.length;i++){
	//adding color to square
	sql[i].style.background= color[i];

	//Add click listener to the squares
	sql[i].addEventListener("click",function(){
		
		//grabbing clicked color
		var clickedColor=this.style.background;
		
		if(pickedColor===clickedColor)
			
			{ result.textContent="CORRECT!";
				
				colorChange(clickedColor);
				h1.style.background= clickedColor;
				reset.textContent="Play again?"

			}else{
				result.textContent="Try Again";
				this.style.background="#232323";
			}
			});
		
}

function colorChange(color){

	for(var i=0;i<sql.length;i++){
		 sql[i].style.background=color; 
		}
}


function picked(){
	var random=Math.floor(Math.random() * color.length);
	return color[random];

}

function arrayOfColors(num){
var string=[]

for(var i=0;i<num;i++){
string.push(randomColor())
}
return string;
}


function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";

}

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares=3;
	color=arrayOfColors(numSquares);
	pickedColor=picked();
	if(stop==0){
	displayColor.textContent=pickedColor;
	}

	for(var i=0;i<3;i++){
		sql[i].style.background=color[i];
	}
    for(var i=3;i<6;i++){
		sql[i].style.display="none";
	}
	h1.style.background= "steelblue";
})


hardBtn.addEventListener("click",function(){
	
	easyBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares=6;
	color=arrayOfColors(numSquares);
	pickedColor=picked();
	if(stop==0){
	displayColor.textContent=pickedColor;
	}
	for(var i=0;i<6;i++){
		sql[i].style.background=color[i];
		sql[i].style.display="block";
	}
	h1.style.background= "steelblue";
    
})


disco.addEventListener("click",function(){

	displayColor.textContent="RGB";
	stop=setInterval(discof,500);
	
	
	function discof(){
		color=arrayOfColors(numSquares);
		for(var i=0;i<numSquares;i++){
			sql[i].style.background=color[i];
		} 
	}
	reset.textContent="Play Game";
})



