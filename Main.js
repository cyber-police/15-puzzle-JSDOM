// import winDialogue from "/winDialogue.js";

var stains = [];

var isTransition = false;

// var positions = [
//     [9, 1, 11, 15],
//     [4, 8, 7, 2],
//     [5, 6, 13, 10],
//     [12, 14, 3, 0]];

var positions = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 0, 15],
];

var a = 0;
var xCord = 200;
var yCord = 50;

function initElements() {
  for (var i = 0; i <= 15; i++) {
    var j = Math.trunc(i / 4);

    var numberOfelement = positions[j][a];

    a++;

    var img = document.createElement("img");
    img.id = numberOfelement;
    if (numberOfelement != 0) {
      img.src = `images/stain-${numberOfelement}.jpg`;
    }
    img.style.marginTop = yCord + "px";
    img.style.marginLeft = xCord + "px";
    img.style.position = "absolute";
    var field = document.getElementById("gameField");
    field.appendChild(img);
    stains.push(img);

    img.addEventListener("transitionend", onWinConditions);

    console.log("xCoord " + xCord);
    console.log("yCoord " + yCord);

    img.addEventListener("click", onClickTile);

    xCord += 170;

    if (a > 3) {
      a = 0;
      xCord = 200;
      yCord += 160;
    }
  }
}

function onClickTile(event) {
  if (isTransition) return;

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (event.target.id == positions[i][j]) {
        var activeElement = [i, j];
        isTransition = true;
        break;
      }
    }
  }

  if (
    positions[activeElement[0] - 1] != null &&
    positions[activeElement[0] - 1][activeElement[1]] == 0
  ) {
    positions[activeElement[0] - 1][activeElement[1]] =
      positions[activeElement[0]][activeElement[1]];
    positions[activeElement[0]][activeElement[1]] = 0;
    event.target.style.marginTop =
      parseInt(event.target.style.marginTop) - 160 + "px";
  } else if (
    positions[activeElement[0] + 1] != null &&
    positions[activeElement[0] + 1][activeElement[1]] == 0
  ) {
    positions[activeElement[0] + 1][activeElement[1]] =
      positions[activeElement[0]][activeElement[1]];
    positions[activeElement[0]][activeElement[1]] = 0;
    event.target.style.marginTop =
      parseInt(event.target.style.marginTop) + 160 + "px";
  } else if (positions[activeElement[0]][activeElement[1] + 1] == 0) {
    positions[activeElement[0]][activeElement[1] + 1] =
      positions[activeElement[0]][activeElement[1]];
    positions[activeElement[0]][activeElement[1]] = 0;
    event.target.style.marginLeft =
      parseInt(event.target.style.marginLeft) + 170 + "px";
  } else if (positions[activeElement[0]][activeElement[1] - 1] == 0) {
    positions[activeElement[0]][activeElement[1] - 1] =
      positions[activeElement[0]][activeElement[1]];
    positions[activeElement[0]][activeElement[1]] = 0;
    event.target.style.marginLeft =
      parseInt(event.target.style.marginLeft) - 170 + "px";
  } else {
    isTransition = false;
  }
}

function onWinConditions() {
  var countPos = positions.length - 1;
  var stainCounter = 1;
  isTransition = false;

  for (var i = 0; i <= countPos; i++) {
    for (var j = 0; j <= countPos; j++) {
      if (i == countPos && j == countPos) {
        showWinDialogue();
      }
      if (positions[i][j] != stainCounter) {
        return;
      }
      stainCounter++;
    }
  }
}

function showWinDialogue() {
  new winDialogue();
  destroy();
}

function destroy() {
  for (var i = 0; i < stains.length; i++) {
    stains[i].removeEventListener("click", onClickTile);
    stains[i].removeEventListener("transitionend", onWinConditions);
  }
  stains = [];
}
