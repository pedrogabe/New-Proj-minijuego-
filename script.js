//GitHub check
//GitHub branch check
var paused=false, iteration=0, instance=1, direction=1, goingLeft=false, goingRight=false, jumping=false, speedUpwards=0, playerY=0, playerX=1;
const tRex = document.querySelector('.t-rex');
var interval = window.setInterval(function(){
    if(!paused){
        iteration++;
        if(jumping){
            instance=1;
            if(speedUpwards==0 && playerY==0){
                speedUpwards=15
            }else if(speedUpwards<0 && playerY==0){
                jumping=false
                speedUpwards=0;
            }else{
                speedUpwards-=1;
                playerY+=speedUpwards;
                console.log(playerY)
            }
            tRex.style.bottom=playerY+'px';
        }else
        if(goingLeft==false && goingRight==false || goingLeft==true && goingRight==true){
            instance=0;
        }
        else {
            if(iteration/4 % 2 === 0){
                instance=1;
            }else if (iteration/4 % 1 === 0){
                instance=2;
            }
        }
        tRex.src="https://pedrogabe.github.io/New-Proj-minijuego/trex-"+instance+".png";

        if(direction==1){
            tRex.style.transform='rotateY(0deg)'
        }else{
            tRex.style.transform='rotateY(180deg)';
        }
        
        if(goingLeft==true && goingRight==false && playerX>0){
            playerX-=5;
            tRex.style.left=playerX+"px";
        }
        if(goingLeft==false && goingRight==true && playerX<(document.body.clientWidth-tRex.width)){
            playerX+=5;
            tRex.style.left=playerX+"px";
        }
    }
},25);

window.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 37: direction=0; goingLeft=true; break;
        case 39: direction=1; goingRight=true; break;
        case 38: jumping=true;break;
    }
})

window.addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 37: goingLeft=false;break;
        case 39: goingRight=false;break;
    }
})
