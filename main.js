const lists = document.getElementsByClassName("list");
const leftBox = document.getElementById("leftBox");
const rightBox = document.getElementById("rightBox");

for (const list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selectedElement = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function () {
      rightBox.appendChild(selectedElement);
      selectedElement.style.backgroundColor = "green";
      selectedElement = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", function () {
      leftBox.appendChild(selectedElement);
      selectedElement.style.backgroundColor = "crimson";
      selectedElement = null;
    });
  });
}
