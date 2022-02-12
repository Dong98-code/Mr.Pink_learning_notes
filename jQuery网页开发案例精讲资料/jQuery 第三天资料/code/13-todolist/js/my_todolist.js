$(function () {
    // localStorage.clear();
    // 绑定 title 一个 keydown事件
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
        //    console.log(11);
            if ($(this).val() === "") {
                console.log("输入操作");
            } else {
                // 读取数据
                let local = getData();
                console.log(local);
                // 修改数据
                local.push({ title: $(this).val(), done: false });
                // console.log(local);
                
                // 保存数据
                saveData(local);

                load();
                $(this).val("");

            }
       } 
    });

    // 删除元素， 点击 a 链接 删除本地 存储对应的数据
    $("ol, ul").on("click", "a", function () {
        let data = getData();
        
        // 根据id找到对应的索引
        let index = $(this).attr("id");
        // console.log(index);
        // 使用 splice删除
        data.splice(index, 1);
        // 保存数据
        saveData(data);
        // 加载数据
        load();
    });

    // 状态修改
    $("il, ol").on("click", "input", function () {
        // 获取本地存储的数据
        let data = getData();
        let index = $(this).siblings("a").attr("id");
        
        // 修改对应的数据
        data[index].done = $(this).prop("checked");
        
        // 存储数据
        saveData(data);
        // 重载数据

        load();
    });
    function saveData(data) {
        //存储的数据为字符类型
        localStorage.setItem("todolist", JSON.stringify(data));
    };

    function getData() {
        let data = localStorage.getItem("todolist");
        console.log(data);
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    };

    function load() {
        // 读取本地数据
        let data = getData();
        // 遍历数据 将生成的数据 生成几个小li 添加到ol中去
        // 先清空 ol中的数据
        $("ol, ul").empty();
        let todoCount = 0; // 正在进行的个数
        let doneCount = 0; // 已经完成的个数

        // 遍历数据
        $.each(data, function (i, ele) {
            // done为真 表示做完了
            if (ele.done) {
                // 再ul中添加li
                $("ul").prepend(
                    "<li><input type='checkbox'></input checked='checked'><p>" + ele.title + "</p> <a href='javascript:;' id=" + i + "></a></li>"
                );
                doneCount++;
            } else {
                $("ol").prepend(
                    "<li><input type='checkbox'></input><p>" + ele.title + "</p> <a href='javascript:;' id=" + i + "></a></li>"
                );
                todoCount++;
            }
        });

        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }
});

