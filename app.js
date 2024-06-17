let gameSeq=[]
let userSeq=[]
let score=[]
let btns=['red','yellow','green','purple']

let started=false
let level=0

let h2=document.querySelector('h2')
let h3=document.querySelector('h3')

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("Game has been Started")
        started=true
    }
    levelUp()
})

//---------------------------

function gameflash(btn){
btn.classList.add('gameflash')

setTimeout(() => {
    btn.classList.remove('gameflash')
}, 500);
}

// ----------------------------------------

function userflash(btn){
    btn.classList.add('userflash')
    
    setTimeout(() => {
        btn.classList.remove('userflash')
    }, 500);
    }

//---------------------------


function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`level ${level}`

    let randomIndex=Math.floor(Math.random()*4)
    // console.log(randomIndex)
    let randomColor=btns[randomIndex]
    // console.log(randomColor)
    var randomFlashbtn=document.querySelector(`.${randomColor}`)
    //console.log(randomFlashbtn)

    gameSeq.push(randomColor)
    console.log(gameSeq)

    gameflash(randomFlashbtn)
}

// ----------------------------------------

function checkResult(idx){
 
   if(userSeq[idx]===gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000)
     }
   }
   else{
    h2.innerHTML=`Game Over! Your Score is <b>${level}</b> <br> Press any key to restart the game`;

    score.push(level)
    let max = Math.max(...score);
    h3.innerText=`Your Highest score : ${max}`
    // console.log(score)

    document.querySelector('body').style.backgroundColor='red';
    setTimeout( function ()  {
        document.querySelector('body').style.backgroundColor='white'
    },1000);

    reset();
    
   }
}

// ----------------------------------------

function btnPress () {
let userpressBtn=this;
//console.log(userpressBtn)
userflash(userpressBtn)

let userColor=userpressBtn.getAttribute('id')
userSeq.push(userColor)
console.log(userSeq)

checkResult(userSeq.length-1)
// console.log(userColor)
}

let allBtns=document.querySelectorAll('.btn')
for(let bttn of allBtns){
bttn.addEventListener('click',btnPress)
}

// ----------------------------------------

function reset() {
started=false
userSeq=[]
gameSeq=[]
level=0

}