// 监控的keyUp时间， 添加一个标签

const tagEl = document.getElementById("tags");

const textarea = document.getElementById("textarea");

textarea.focus(); // 默认是获取焦点的

textarea.addEventListener("keyup", (e) => {
  // 1. 创建一个标签
  creatTags(e.target.value);

  if (e.key === "Enter") {
    // setTimeout(() => {
    //     e.target.value = ''
    // }, 10);
    //   还得清空 textArea
    // console.log(e.key);
    // setTimeout(() => {
    //     e.target.value = ''
    // }, 10)
    e.target.value = "";
    randomSelect();
  }
});

function creatTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  // 去除空串和末尾的空格
  tagEl.innerHTML = ""; //先清空
  tags.forEach((element) => {
    // 创建一个span标签
    const el = document.createElement("span");
    el.classList.add("tag");
    el.innerText = element; // 文字内容
    tagEl.appendChild(el);
  });
}

// 随机选择一个标签

function pickTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}

function randomSelect() {
  // 随机选择一个
  //定时器 每 10ms 选择一个标签 并把它的样式改变
  const times = 30;
  const interval = setInterval(() => {
    let randomTag = pickTag();
    if (randomTag !== undefined) {
      highlightTag(randomTag);
      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  // 清除 interval
  setTimeout(() => {
    clearInterval(interval);
    // 之后选择一个高亮
    setTimeout(() => {
      let randomTag = pickTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}
