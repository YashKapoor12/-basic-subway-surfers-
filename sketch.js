var score=0;
var highScore=[];
var highestScore=0;
function moveLeft(){
    let left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left-=100;
    if(left>=0){ 
        character.style.left=left+"px";
    }
   
}
function moveRight(){
    let left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left+=100;
    if(left<=200){
        character.style.left=left+"px";
    }
}
document.addEventListener("keydown",event=>{
    if (event.key==="ArrowRight"){moveRight()};
    if (event.key==="ArrowLeft"){moveLeft()};
    if(event.key=="a"){block.style.animation="slide 0.75s infinite linear";score=0}}
)
var block=document.getElementById("block");
block.addEventListener('animationiteration',()=>{
    var rand=Math.floor(Math.random()*3)
    var left=rand*100;
    block.style.left=left+"px";
    score++;
})
setInterval(function(){
    var characterLeft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft===blockLeft && blockTop>300 &&blockTop<500){
        highScore.push(score);
        for (var i=0;i<=highScore.length;i++){
            if(highestScore<highScore[i]){
                highestScore=highScore[i];
            }
        }
        alert("Game Over.Your current score is : "+score+" Your all time best is :"+highestScore);
        block.style.animation="none"
    }
})
if(score>10){
character.style.backgroundColor="green";
}