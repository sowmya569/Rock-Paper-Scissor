const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
const clear = document.getElementById("clear");
const text = document.getElementById("text");
const game=document.getElementById("win");
let myscore = 0;
let botscore=0
let bot=0;
clear.onclick = () => {
  score = 0;
  text.innerText = 0;
  game.innerText="You and bot"
};
let rps = ["rock", "paper", "scissor"];
let ran = (array) => {
  const r = Math.floor(Math.random()*array.length);
  return array[r];
};
// console.log(rock.innerText);
let user="You"
console.log(user)
rock.onclick=()=>{
  bot=ran(rps)
  user=rock.innerText
  game.innerText=`YOU:${user.toUpperCase()} and BOT:${bot.toUpperCase()}`
  fun(user,bot)  
}
scissor.onclick=()=>{
  bot=ran(rps)
user=scissor.innerText
   console.log(user)
  console.log(bot)
  game.innerText=`YOU:${user.toUpperCase()} and BOT:${bot.toUpperCase()}`
  fun(user,bot)  
}
paper.onclick=()=>{
  bot=ran(rps)
user=paper.innerText;
   console.log(user)
  console.log(bot)
  game.innerText=`YOU:${user.toUpperCase()} and BOT:${bot.toUpperCase()}`
  fun(user,bot)  
}
const fun=(user,bot)=>{
if(user==bot){
  myscore+=0
  botscore+=0
  text.innerText=`Yourscore ${myscore} and BotScore ${botscore}`;
}
 else if ((user=="rock" && bot=="scissor") ||(user=="paper" && bot=="rock") ||(user=="scissor" && bot=="paper")){
          myscore+=1
   botscore-=1
          text.innerText=`Yourscore ${myscore} and BotScore ${botscore}`;
          }
 else if((user=="rock" && bot=="paper")||(user=="scissor" && bot=="rock")||(user="paper" && bot=="scissor")){
      myscore-=1;
   botscore+=1
      text.innerText=`Yourscore ${myscore} and BotScore ${botscore}`
 }
}
// console.log(score)s
