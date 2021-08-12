$('.content').hide();
$(".title").slideDown(1000).show();
$(".header-content").slideDown(1000).show();
$(window).scroll(function() {
        var t = $(window).scrollTop() //获取滑动条的数字
        $('.content').show();
        if (t >= 600) { //根据滑动条的位置来判断动画加载的时机
            $('.content-one .content-title').slideDown(500).show();
            $(".pic11").css("right", "-100px").animate({ right: '0px' }, 1000).show();
            $(".pic12").css("right", "485px").animate({ right: '385px' }, 1000).show();
        }
        if (t >= 1200) {
            $('.content-two .content-title').slideDown(500).show();
            $(".pic21").fadeIn(2000).show();
            $(".pic22").fadeIn(3000).show();
        }
        if (t >= 2000) {
            $('.content-three .content-title').slideDown(500).show();
            $(".pic31").fadeIn(2000).show();
            $(".pic32").css("top", "200px").animate({ top: '180px' }, 1000).show();
            $(".pic33").css("top", "200px").animate({ top: '225px' }, 1000).show();
        }
        if (t >= 2800) {
            $('.content-four .content-title').slideDown(500).show();
            $(".pic41").css("top", "-60px").animate({ top: "60px" }, 1000).show();
        }
        if (t >= 3600) {
            $('.content-five .content-title').slideDown(500).show();
            $(".pic51").fadeIn(500).show();
            $(".pic52").fadeIn(1000).show();
            $(".pic53").fadeIn(3000).show();
            $(".pic54").fadeIn(5000).show();
        }
    })
    /*点击按钮滑动到指定的位置 eq索取其中的一个元素 scrollTop滑动条的位置*/
$('.nav-btn').eq(0).click(function() {
    $("html,body").animate({ scrollTop: "900" }, 1000);
})
$('.nav-btn').eq(1).click(function() {
    $("html,body").animate({ scrollTop: "1500" }, 1000);
})
$('.nav-btn').eq(2).click(function() {
    $("html,body").animate({ scrollTop: "2200" }, 1000);
})
$('.nav-btn').eq(3).click(function() {
    $("html,body").animate({ scrollTop: "2900" }, 1000);
})
$('.nav-btn').eq(4).click(function() {
    $("html,body").animate({ scrollTop: "3600" }, 1000);
})