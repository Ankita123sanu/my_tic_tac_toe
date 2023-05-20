console.log("Welcome to Tic Toc Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let igameover = false;

//function to change the turn
const changeTurn=()=>{
    return turn === "X"? "0": "X"
}
music.play();
//function to check for a win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
     let wins = [
         [0,1,2,2,4,0],
         [3,4,5,2,12,0],
         [6,7,8,2,20,0],
         [0,3,6,-6,12,90],
         [1,4,7,2,13,90],
         [2,5,8,10,13,90],
         [0,4,8,2,12,45],
         [2,4,6,2,12,135],
     ]
     wins.forEach(e =>{
         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            igameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
         }
     })
}
 
//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!igameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
           }
        }
    })
})

//add onclick listner to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn = "X"
    igameover = false
    document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})