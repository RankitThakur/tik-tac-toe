let clear = document.querySelector('#clear');
let winStatus = document.querySelector('#winStatus');
const x = '❌';
const o = '⭕';
let continueGame = true;
let currentPlayer = x;
let players = 'Player1';
init();


function init()  {
  debugger
  let allBoxs  = document.getElementsByClassName('box')
  boxCheck(allBoxs)
  clear.addEventListener('click', restartGame);
}

function changePlayer() {
  players = players == 'Player1' ? 'Player2' : 'Player1';
  currentPlayer = currentPlayer == x ? o : x;
}

function boxCheck(allBoxs) {
  Array.from(allBoxs).forEach(box => {
    console.log(box)
    let text = box.querySelector('.text')
    box.addEventListener('click', ()=>{
      if(!continueGame){
        return;
      }
      if(text.innerText === ''){
        text.innerText = currentPlayer;
        changePlayer();
        winner();
      }       
    });
  });  
}

function winner() { 
  let text = document.getElementsByClassName('text')
  let checkDraw = Array.from(text).map(getInnerText = (t) => {
    return t.innerText
  });
  console.log(checkDraw)
  const winningProbability = [
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 1, 2],
  ];
  winningProbability.forEach(test =>{
    if((text[test[0]].innerText === text[test[1]].innerText) && (text[test[2]].innerText === text[test[1]].innerText) && (text[test[0]].innerText !== "")){
      changePlayer();
      winStatus.textContent = `Won ==> ${players}`;
      continueGame = false;
    }
  })
  if(!checkDraw.includes('')){
    winStatus.textContent = `Game Draw`;
    continueGame = false;
  }
}

function restartGame()  {
  currentPlayer = x
  winStatus.textContent = `Start Now`;
  players = 'Player1'
  continueGame = true;
  let text = document.querySelectorAll('.text');
  Array.from(text).forEach(e => {
      e.innerText = ""
  });
}



  