class winDialogue {
  constructor() {
    var dialogBack1 = document.createElement("img");
    dialogBack1.src = `images/dialogBackground1.jpg`;
    dialogBack1.style.marginTop = "260px";
    dialogBack1.style.marginLeft = "600px";
    dialogBack1.style.position = "absolute";
    document.getElementById("gameField").appendChild(dialogBack1);

    var dialogBack2 = document.createElement("img");
    dialogBack2.src = `images/dialogBackground2.jpg`;
    dialogBack2.style.marginTop = "270px";
    dialogBack2.style.marginLeft = "610px";
    dialogBack2.style.position = "absolute";
    var text = document.createTextNode("YOU WON!");
    dialogBack2.appendChild(text);
    document.getElementById("gameField").appendChild(dialogBack2);

    var restartButton = document.createElement("button");
    restartButton.style.marginTop = "300px";
    restartButton.style.marginLeft = "830px";
    restartButton.style.width = "200px";
    restartButton.style.height = "50px";
    restartButton.style.position = "absolute";
    var restartText = document.createTextNode("RESTART");
    restartButton.appendChild(restartText);
    restartButton.onclick = function () {
      document.location.reload();
    };
    document.getElementById("gameField").appendChild(restartButton);

    var exitButton = document.createElement("button");
    exitButton.style.marginTop = "360px";
    exitButton.style.marginLeft = "830px";
    exitButton.style.width = "200px";
    exitButton.style.height = "50px";
    exitButton.style.position = "absolute";
    var exitText = document.createTextNode("EXIT");
    exitButton.appendChild(exitText);
    exitButton.onclick = function () {
      window.open("https://www.google.com", "_self");
    };
    document.getElementById("gameField").appendChild(exitButton);
  }
}
