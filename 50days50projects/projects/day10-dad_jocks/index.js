const btn = document.getElementById("jockBtn");
const jock = document.getElementById("jock")

// 绑定事件

btn.addEventListener('click', generateJoke);

generateJoke(); // 默认加载的时候执行一次

async function generateJoke() {
    // 异步的该函数，发送网络请求
    // 请求的头部
    const config = {
        headers: {
            Accept:'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    let data = await res.json();
    jock.innerHTML = data.joke
}