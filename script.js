console.log("welcome to tic tac toe");
let music=new Audio("tune.mp3");
let audiotune=new Audio("gametune.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let game=false;
// function to change the turn
const changeturn=()=>{
    if(turn==="X"){
        return 0;
    }
    else{
        return "X";
    }
}
// function to check  for a win
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText=== boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=="")){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+"won";
            game=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="200px";
        }
    })
}
// game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
          turn=  changeturn();
            audiotune.play();
            checkwin();
            if(!game){
                document.getElementsByClassName("info")[0].innerText="turn for"+turn;
            }            
        }
    })
})
// add onclick to reset
reset.addEventListener('click',()=>{
    let box=document.querySelectorAll('.boxtext');
    Array.from(box).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    game=false;
    document.getElementsByClassName("info")[0].innerText="turn for"+turn;    
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px";
})
