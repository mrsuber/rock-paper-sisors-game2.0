let userScore=0;
let compScore=0;
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p=document.querySelector(".result>p")
const rock_div =document.getElementById("r")
const paper_div =document.getElementById("p")
const scissors_div =document.getElementById("s")
//functions
function convertToWord(letter){
  if (letter==="r")return "Rock"
  if (letter==="p")return "Paper"
  if (letter==="s")return "Scissors"
}
function win(user, computer){
  userScore++;
  // console.log("user wins=>",userScore)
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  result_p.innerHTML=convertToWord(user)+smallUserWord +" beats " + convertToWord(computer)+smallCompWord +". You win!"
  document.getElementById(user).classList.add("green-glow")
  setTimeout(function(){document.getElementById(user).classList.remove("green-glow")},500);
}
function lose(user, computer){
  compScore++;
  // console.log("user wins=>",userScore)
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  result_p.innerHTML=convertToWord(user)+smallUserWord +" loose to " + convertToWord(computer)+smallCompWord +". You Loose!"
  document.getElementById(user).classList.add("red-glow")
  setTimeout(function(){document.getElementById(user).classList.remove("red-glow")},500);

}
function draw(user, computer){

  // console.log("user wins=>",userScore)
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  result_p.innerHTML=convertToWord(user)+smallUserWord +" draw " + convertToWord(computer)+smallCompWord +"."
  document.getElementById(user).classList.add("gray-glow")
  setTimeout(function(){document.getElementById(user).classList.remove("gray-glow")},500);

}
function game(userChioce){
  const compChioce = getComputerChioce()
  // console.log("user=>",userChioce,"computer=>",compChioce)
  switch(userChioce+compChioce){
    case "rs":
    case "pr":
    case "sp":
      win(userChioce,compChioce)
      break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChioce,compChioce)
    break;
    case "pp":
    case "ss":
    case "rr":
    draw(userChioce,compChioce)
    break;

  }
}
function getComputerChioce(){
const choices =['r','p','s']
const randomNumber=Math.floor(Math.random()*3)
return choices[randomNumber]
}

function rock(){
  // console.log("this is rock")
  game("r")
}
function paper(){
  // console.log("this is paper")
  game("p")
}
function scissors(){
  // console.log("this is scissors")
  game("s")
}

//adding event listerners
rock_div.addEventListener('click',rock)
paper_div.addEventListener('click',paper)
scissors_div.addEventListener('click',scissors)
