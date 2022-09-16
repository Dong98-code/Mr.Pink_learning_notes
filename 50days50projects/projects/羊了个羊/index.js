$(function () {
  const imgSrc = [
    "https://img01.yzcdn.cn/upload_files/2022/07/20/Fk1rj4gSaia1i8yD-FSO8CWLWlSu.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/03/16/Fo3SKNvQG5cIj3IspG_SOs_T216M.png!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/07/19/FsT754_weL6KZgUC2TuRWxr5zLnG.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/05/30/FguIz4XVMqAS3ft_7thNqlJrT0_F.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/05/09/FvG5_KInsbyhVq9W6xbygpo9jb9i.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/05/30/Fpht4CzextqfHA048FGU8m_t4NP5.jpeg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/03/15/FlTBO9tItc9TXslq6wYd87udb-6t.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/03/15/Fi77MVQB0xREZRQdzaKHyHNuG-yg.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/03/16/FtBQGLwuPQJBuIHs0LjxbaSJVloV.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/03/16/FrZxLRso63OS_oKTD6xXk6Ao4Z2C.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/05/09/FvpbuQ35dFtL_oOcjJCfgPuPseIY.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/05/16/FlvZNZzU96K_d0DzxgFv3mh5IDA3.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/03/15/Fi-VLtnXgalfGpC0w3Try3Tks5qv.jpg!280x280.jpg",
    "https://img01.yzcdn.cn/upload_files/2022/03/15/Fn1QBOetrZhCcKMoVFU-9lJN1gnP.jpg!280x280.jpg",
  ];
  function randomArr(array) {
    const arr = [].concat(array);
    for (let i = arr.length - 1; i >= 0; i--) {
      const inx = Math.floor(Math.random() * i + 1);
      const next = arr[inx];
      arr[inx] = arr[i];
      arr[i] = next;
    }
    return arr;
  }
  $(".restart").click(start);
  function start() {
    $("#box").empty();
    $("#temp").empty();
    $("#source").empty();
    $("#source1").empty();
    $(".result").fadeOut();
    let zIndex = 0;
    let source = [];
    let temp = {};
    for (let i = 0; i < 12; i++) {
      imgSrc.map((v, m) => {
        // console.log(m);
        source.push({ src: v, inx: m });
      });
    }
    source = randomArr(source);
    for (let k = 5; k > 0; k--) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < k; j++) {
          let div = $("<div>");
          div.addClass("item");
          div.addClass(`${i}-${j}-${k}`);
          div.attr("x", i);
          div.attr("y", j);
          div.attr("z", k);
          div.css("position", "absolute");
          let img = source.splice(0, 1);
          div.css("left", 120 * j - Math.random() * 10 * k + "px");
          div.css("top", 120 * i - Math.random() * 10 * k + "px");
          div.attr("inx", img[0].inx);
          div.css("backgroundImage", `url(${img[0].src})`);
          div.click(function () {
            if (!$(this).hasClass("shadow")) {
              if (temp[$(this).attr("inx")]) {
                temp[$(this).attr("inx")] += 1;
              } else {
                temp[$(this).attr("inx")] = 1;
              }
              let e = $(this).detach();
              e.css("position", "unset");
              $("#temp").append(e);
              $(".item").each((i, v) => {
                $(v).removeClass("shadow");
                let x = $(v).attr("x");
                let y = $(v).attr("y");
                let z = $(v).attr("z");
                let ele = $(`.${x}-${y}-${z - 1}`);
                let ele1 = $(`.${x + 1}-${y + 1}-${z - 1}`);
                if (ele.length || ele1.length) {
                  $(v).addClass("shadow");
                }
              });
              if (temp[$(this).attr("inx")] === 3) {
                $(`#temp div[inx=${$(this).attr("inx")}]`).remove();
                temp[$(this).attr("inx")] = 0;
              }
              let num = 0;
              for (let i in temp) {
                num += temp[i];
              }
              if (num >= 7) {
                $(".item").off("click");
                $(".result").fadeIn();
              }
            }
          });
          $("#box").append(div);
        }
      }
    }
    let len = Math.ceil(source.length / 2);
    source.forEach((v, i) => {
      let div = $("<div>");
      div.addClass("item");
      div.attr("inx", v.inx);
      div.css("backgroundImage", `url(${v.src})`);
      div.css("position", "absolute");
      div.css("top", 0);
      if (i > len) {
        div.css("right", `${5 * (i - len)}px`);
        $("#source1").append(div);
      } else {
        div.css("left", `${5 * i}px`);
        $("#source").append(div);
      }
      div.click(function () {
        if (temp[$(this).attr("inx")]) {
          temp[$(this).attr("inx")] += 1;
        } else {
          temp[$(this).attr("inx")] = 1;
        }

        let e = $(this).detach();
        e.css("position", "unset");
        $("#temp").append(e);
        if (temp[$(this).attr("inx")] === 3) {
          $(`#temp div[inx=${$(this).attr("inx")}]`).remove();
          temp[$(this).attr("inx")] = 0;
        }
        let num = 0;
        for (let i in temp) {
          num += temp[i];
        }
        if (num >= 7) {
          $(".item").off("click");
          $(".result").fadeIn();
        }
      });
    });
    $(".item").each((i, v) => {
      let x = $(v).attr("x");
      let y = $(v).attr("y");
      let z = $(v).attr("z");
      let ele = $(`.${x}-${y}-${z - 1}`);
      let ele1 = $(`.${x + 1}-${y + 1}-${z - 1}`);
      if (ele.length || ele1.length) {
        $(v).addClass("shadow");
      }
    });
  }
  start();
});
