
let us = 0;
let cs = 0;

const choices  = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const userpara = document.querySelector("#user-score");
const compara = document.querySelector("#comp-score");


const drawgame= () =>{
       // console.log("Game is drawn");
         msg.innerText = "Game was drawn. Play Again";
         msg.style.backgroundColor = "darkslateblue";
}

const showwinner = (userwin,uchoice,compcho) =>{

    if(userwin){
        us++;
        userpara.innerText = us;
      //  console.log("You won")
        msg.innerText = `You won! Your choice ${uchoice} beats ${compcho}`
        msg.style.backgroundColor = "green"
    }
    else{
                cs++;
                compara.innerText = cs;
            //console.log("You lose")
             msg.innerText = `You lose.${compcho} beats your ${uchoice}`
             msg.style.backgroundColor = "red"
    }
}

const playGame = (uchoice) =>{

    console.log("user choice ",uchoice)
    //GENERATE COMP CHOICE
    const compcho =  gencompchoice();
    console.log("comp choice ",compcho)
    
    if(uchoice === compcho){
        drawgame();
    }
    else{
        let userwin = true;
        if(uchoice === "rock"){
            if(compcho === "paper"){
                userwin = false;
            }
            else{
                userwin = true;
            }
            
        }
        
        else if (uchoice==="paper"){
            if(compcho==="scissors"){
                userwin = false;
            }else{
            userwin = true;}
        }
        else{
            if(compcho === "rock"){
                userwin = false
            }else{
            userwin = true;}
        }
        showwinner(userwin,uchoice,compcho);
    }


}



const gencompchoice = () =>{
    const options = ["rock","paper","scissors"]
    const num = Math.floor(Math.random()* 3);  // by doing this the number will be in range of 0 -2
    return options[num];

}

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const uchoice= choice.getAttribute("id");
        playGame(uchoice);
    });
});