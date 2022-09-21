// 获取dom

const smallCups = document.querySelectorAll(".cup-small");

const remained = document.getElementById("remained");

const percentage = document.getElementById("percentage");

const liters = document.getElementById("liters");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
  else if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  // 小于等于他的 都添加 类名full
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  // 计算现在的被子的长度
  let length = document.querySelectorAll(".cup-small.full").length;
  let total = smallCups.length;
  if (length === 0) {
    // 空
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(length / total) * 330}px`;
    percentage.innerText = `${(length / total) * 100}%`;
  }

  if (length === total) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * length) / 1000}L`;
  }
}
