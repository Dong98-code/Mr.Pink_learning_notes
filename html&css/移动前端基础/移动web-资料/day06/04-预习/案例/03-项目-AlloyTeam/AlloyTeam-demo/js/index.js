
(function () {

  $(function () {
    // 延时执行焦点图动画
    $("#alloyCarousel .item").addClass('done');

    // 设置头部交互动效
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      scrollTop > 0 
        ? $('body > .header').addClass('scrolled')
        : $('body > .header').removeClass('scrolled');
    })
  })

})()