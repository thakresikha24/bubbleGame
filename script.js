var bottom = document.querySelector('#bottom');
var s = document.querySelector('#s');
var p = document.querySelector('#p');
var m = document.querySelector('#m');

var score = 0;

var guessNumber;

var timer = 60;

setInterval(function(){
    if(timer > 0){
        --timer;
        s.textContent = timer;
    }
}, 1000);

function Hit(){
     guessNumber = Math.floor(Math.random()*10);
    p.textContent = guessNumber;
}
Hit();

function makebubbles(){
    
    for(var  i=0; i<50; i++){
    var randomNumber = Math.floor(Math.random()*10);
        
        var template = `<div class="bubble">${randomNumber}</div>`;
    
        bottom.innerHTML += template; 
    
    }   

}

bottom.addEventListener('click', function(details){
    var clickedBubbleval = details.target.textContent;
    if(clickedBubbleval == guessNumber){
score = score + 10;
m.textContent = score;
Hit();
bottom.innerHTML = '';
makebubbles();
    }
    else{
        console.log('shi nhi h hit');
    }
})
makebubbles();
    
