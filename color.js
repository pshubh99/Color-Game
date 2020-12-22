/*global document*/
/*global console*/
/*global alert*/
/* eslint no-console: "off" */
console.log("Start"); 

var easyMode= document.querySelector("#levelEasy");
var hardMode= document.querySelector("#levelHard");
var numOfSq=6;

easyMode.addEventListener("click",function(){
    numOfSq=3;
    this.classList.add("selected");
    hardMode.classList.remove("selected");
    colors=colorGenerator(3);
    ansColor=randomColor();
    colorDisplay.textContent=ansColor;
    msg.textContent="";
    header.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    for(var i=0;i<sq.length;i++){
        if(colors[i])
            sq[i].style.backgroundColor=colors[i];
        else
            sq[i].style.display="none";
    }
});

hardMode.addEventListener("click",function(){
    numOfSq=6;
    this.classList.add("selected");
    easyMode.classList.remove("selected");
    colors=colorGenerator(6);
    ansColor=randomColor();
    colorDisplay.textContent=ansColor;
    msg.textContent="";
    header.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    for(var i=0;i<sq.length;i++){
        sq[i].style.display="block";
        sq[i].style.backgroundColor=colors[i];
    }
});

var colors=colorGenerator(6);

var ansColor=randomColor();

var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=ansColor;

var msg=document.querySelector("#message");
var sq=document.querySelectorAll(".square");
var header= document.querySelector("header");
var reset=document.querySelector("#reset");

reset.addEventListener("click",function(){
    colors=colorGenerator(numOfSq);
    ansColor=randomColor();
    colorDisplay.textContent=ansColor;
    msg.textContent="";
    header.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    for(var i=0;i<sq.length;i++)
        sq[i].style.backgroundColor=colors[i];
});

for(var i=0;i<sq.length;i++){
    sq[i].style.backgroundColor=colors[i];
    sq[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor==ansColor){
            msg.textContent="Correct!";
            reset.textContent="Play Again";
            changeColor(ansColor);
            var header= document.querySelector("header");
            header.style.backgroundColor=ansColor;
        }
        else{
            this.style.backgroundColor="#232323";
            msg.textContent="Try Again";
        }
    });
}

function changeColor(color){
    for(var i=0;i<sq.length;i++)
        sq[i].style.backgroundColor=color;
}

function randomColor(){
    var i = Math.floor(Math.random() * colors.length);
    return colors[i];
}

function colorGenerator(num){
    var arr=[];
    for(var i=0;i<num;i++)
    {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var c ="rgb("+x+", "+y+", "+z+")";
        arr.push(c);
    }
    return arr;
}

console.log("END")