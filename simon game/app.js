let gameseq =[];
let userSeq =[];

let started = false;
let level = 0;
let h2= document.querySelector('h2');
let hightScor = [];
let h3 = document.querySelector('h3')
let color = ['red', 'green', 'blue', 'gray']

document.addEventListener('keypress', function(){
    h2.innerHTML=``;
    if (started==false){
        console.log('Game is started');
        started = true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    
    if (level==1){
        h3.innerHTML= `Level ${level} <br> Press blinked box`;
    }else{
        h3.innerHTML=`Level ${level} <br> Follow the previous sequence`
    }
    
    let randIdx = Math.floor(Math.random()*4);
    let randColor = color[randIdx]
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)
    gameseq.push(randColor)
    btnFlash(randBtn);
}
function checkAns(idx){
   
    if (userSeq[idx]==gameseq[idx]){
        if (userSeq.length == gameseq.length){
            setTimeout(levelUp,1000)
        } else{

        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor='red';
       setTimeout(function(){document.querySelector('body').style.backgroundColor='white'},150)
       hightScor.push(level)
       h2.innerHTML=`your highest score is ${Math.max(...hightScor)}`
        reset();
    }
}

function btnPress(){
    let btn = this
    btnFlash(btn)
    userColor = btn.getAttribute('id')
    
    userSeq.push(userColor)
    console.log(userSeq)
    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll('.box');
for (btn of allBtns){
    btn.addEventListener('click', btnPress );
}

function reset(){
    gameseq=[];
    userSeq=[];
    level=0;
    started=false;
}


