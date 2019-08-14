/**
 * Created by mac on 2019/8/4.
 */
//帕劳
$(function() {
//            icon
    $('.i-hide').hide();
    $('.ico').hover(function () {
        $(this).css({
            backgroundColor: '#fbd319'
        });
        $('.i-hide').hide();
        $(this).find('.i-hide').show(10, function () {
            $(this).animate({
                width: '100%'
            }, 10)
        }).siblings('.i-show').hide()
    }, function () {
        $(this).find('.i-show').show().siblings('.i-hide').hide()
        $(this).css({
            backgroundColor: ''
        });
    })

    //公告栏
    var bbsum = $('.bbs').children('.block').length;
    var index = 0;
    //2.4秒一次
    $(".block").hide().eq(index).show();
    setInterval(function () {
        index += 1;
        if (index == bbsum) {
            index = 0;
        }
        $(".block").hide().eq(index).show();
    }, 2400);

//            导航栏
    $(function () {
        $(".nav1").mouseenter(
            function () {
                $(this).children(".nav2box").show(0);
            })
        $(".nav1").mouseleave(
            function () {
                $(this).children(".nav2box").hide(0);
            })
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop == 0) {
                $(".headnav").stop(true, true).animate({backgroundColor: "rgba(255,255,255,0)"}, 300);
                $(".topnav>ul>li>a").css({color: "white"})
                $(".tel").css({backgroundImage: "url(img/zjmimg/call.png)"})
            }
            else {
                $(".headnav").stop(false, false).animate({backgroundColor: "rgb(255,255,255)"}, 300);
                $(".topnav>ul>li>a").css({color: "black"})
                $(".tel").css({backgroundImage: "url(img/zjmimg/call-black.png)"})
            }
        });
    });

    //图片墙
    $('.w-item>p').hide();
    $('.w-item img').mouseover(function() {
        $('.w-item>p').hide();
        $(this).siblings('p').show(200);
        $(this).animate({
            height: '+=20',
            width: '+=20'
        }, 1, function() {
            $(this).animate({
                height: '-=20',
                width: '-=20'
            }, 1000)
        })
    })
})


//马尔代夫
$(function () {
//                导航栏

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $(".clearfix").stop(true, true).animate({backgroundColor: "rgba(255,255,255,0)"}, 300);
            $("#nav>.nav-left>.nav-content>ul>li>a").css({color: "white"})
        }
        else {
            $("#nav").stop(true, true).animate({backgroundColor: "rgba(255,255,255,1)"}, 300);
            $("#nav>.nav-left>.nav-content>ul>li>a").css({color: "black"})
            $("#nav .nav-right .nav-number i").css({color: "black"})
        }
    });
//              下拉列表
    $(".mdleftbox").mouseenter(
        function () {
            $(this).children(".screen-box").show(0);
        })
    $(".mdleftbox").mouseleave(
        function () {
            $(this).children(".screen-box").hide(0);
        });
//                轮播1
    $(".brandol li").click(function () {
        $(this).addClass("active");
        $("li").not(this).removeClass("active");
        var i = $(this).index();
        $(".brandinner .item").removeClass("active");
        $(".brandinner .item").eq(i).addClass("active");
    })
})