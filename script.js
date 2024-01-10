function moveButton() {
    var noButton = document.getElementById("noButton");
    var yesButton = document.getElementById("yesButton");

    noButton.style.position = "absolute";

    var mainContainer = document.querySelector(".main-container");

    var maxX = mainContainer.clientWidth - noButton.offsetWidth;
    var maxY = mainContainer.clientHeight - noButton.offsetHeight;

    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
}
