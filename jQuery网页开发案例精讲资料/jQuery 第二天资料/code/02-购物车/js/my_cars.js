$(function () {
    // 子盒子的值和全选按钮的值一样
    $(".checkall").change(function () {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));

        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    })

    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);

        } else {
            $(".checkall").prop("checked", false);

        }
        // 增加背景颜色
        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })

    // 购物车增减案例
    $(".increment").click(function () {
        let num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);

        // 设置小计 
        // 单价
        let p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1); // 去除 ￥
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * num).toFixed(2));
        // 计算总价
        getSum();

    })

    $(".decrement").click(function () {
        let num = $(this).siblings(".itxt").val();
        if (num == 1) {
            return false;
        }
        num--;
        $(this).siblings(".itxt").val(num);

        let p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1); // 去除 ￥
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * num).toFixed(2));
        // 计算总价

        getSum();
        

    })

    getSum();

    function getSum() {
        let cnt = 0;
        let money = 0;
        $(".itxt").each(function (i, ele) {
            cnt += parseInt($(ele).val());
        });
        // 设置cnt
        $(".amount-sum em").text(cnt);
        // 获得总价钱

        $(".p-sum").each(function (i, ele) {
            money += parseInt($(ele).text().substr(1));

        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }


    // 删除商品

    $(".p-action a").click(function() {
        // 删除的是当前的商品 
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // (2) 删除选中的商品
    $(".remove-batch").click(function() {
        // 删除的是小的复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // (3) 清空购物车 删除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})