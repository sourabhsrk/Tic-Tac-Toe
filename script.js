
let turn = 'X';
let isgameover = false;
const changeTurn = () => {
  return turn === 'X' ? '0' : 'X';
}

const checkWin = () => {
  let boxtext = document.getElementsByClassName('box-text');
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  wins.forEach(e => {
    if ((boxtext[e[0]].innerText !== "") && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText)) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
      isgameover = true;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
      boxtext[e[0]].parentElement.style.backgroundColor = 'grey';
      boxtext[e[1]].parentElement.style.backgroundColor = 'grey';
      boxtext[e[2]].parentElement.style.backgroundColor = 'grey';
    }
  })
}

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.box-text');
  element.addEventListener("click", () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  })
})

document.getElementById("reset").addEventListener("click", () => {
  let boxtexts = document.querySelectorAll('.box-text');
  Array.from(boxtexts).forEach(element => {
    element.innerText = ""
    element.parentElement.style.backgroundColor = ""
  })
  isgameover = false;
  turn = 'X'
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})