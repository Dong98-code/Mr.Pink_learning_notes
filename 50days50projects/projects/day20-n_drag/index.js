const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  this.className += " hold";
  console.log("dragstart", this);
  console.log(e);
  setTimeout(() => {
    this.className = "invisible";
    console.log("start结束");
  }, 0);
}

function dragEnd() {
  this.className = "fill";
  console.log("dragend");
}

function dragOver(e) {
  e.preventDefault();
  console.log("dragover", this);
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  console.log("dragenter");
}

function dragLeave() {
  this.className = "empty";
  console.log("dragleave");
}

function dragDrop() {
  console.log(this);
  console.log("drop");
  this.className = "empty";
  this.append(fill);
}
