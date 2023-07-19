$startBtn = document.getElementById("startBtn");
$allDivs = document.querySelectorAll(".allDivs");
$allUserPick = document.querySelectorAll(".colorPicker");
$colorControler = document.getElementsByClassName("controler");
$startOver = document.getElementById("startover");

let boardOrder = [];

let userPick = [];

function pushToarray(arrayName, num, color) {
  for (x = 0; x < num; x++) {
    arrayName[x].style.backgroundColor = color;
  }
}

let counter = 1;
for (let k of $allUserPick) {
  k.addEventListener("click", function () {
    if (counter <= boardOrder.length) {
      k.innerHTML = counter;
      userPick.push(k.style.backgroundColor);
      $allDivs[counter - 1].style.backgroundColor = k.style.backgroundColor;

      k.style.opacity = "70%";
      counter++;
      if (counter === boardOrder.length + 1) {
        test();
      }
    }
  });
}

$startBtn.addEventListener("click", function () {
  for (x of $allDivs) {
    x.style.backgroundColor = "white";
  }
  $colorControler[0].style.display = "flex";
  $startOver.style.display = "block";
  $startBtn.style.display = "none";
});
$startOver.addEventListener("click", function () {
  userPick = [];
  for (x in $allUserPick) {
    console.log(x);
    $allUserPick[x].innerHTML = "";
    $allUserPick[x].style.opacity = "100%";
    $allDivs[x].style.backgroundColor = "white";
    counter = 1;
  }
});

let colorArray = [
  "rgb(255, 0, 195)",
  "rgb(242, 255, 0)",
  "rgb(255, 89, 0)",
  "rgb(106, 106, 106)",
  "rgb(0, 134, 38)",
  "rgb(0, 200, 255)",
  "blue",
  "red",
];

function colorChanger(max) {
  let number = Math.floor(Math.random() * max);
  return number;
}

function setBoard() {
  for (let x = colorArray.length; x > 0; x--) {
    let picked = colorChanger(colorArray.length);
    boardOrder.push(colorArray[picked]);
    colorArray.splice(picked, 1); 
  }
  for (x in boardOrder) {
    $allDivs[x].style.backgroundColor = `${boardOrder[x]}`;
  }
}

setBoard();

let keepCheck = true;
function test() {
  for (i in boardOrder) {
    if (boardOrder[i] === userPick[i]) {
      console.log("ÿessss" + i);
    } else {
      alert("wrong");
      keepCheck = false;
      return;
    }
  }
  if (!keepCheck) {
    return;
  }
  alert("you win");
}
