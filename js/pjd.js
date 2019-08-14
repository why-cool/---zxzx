/**
 * Created by Administrator on 2019/7/29 0029.
 */

$(function() {
    //header
    $(".nav1").mouseenter(
        function() {
            $(this).children(".nav2box").show(0);
        })
    $(".nav1").mouseleave(
        function() {
            $(this).children(".nav2box").hide(0);
        })
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $(".headnav").stop(true, true).animate({
                backgroundColor: "rgba(255,255,255,0)"
            }, 300);
            $(".topnav>ul>li>a").css({
                color: "white"
            })
            $(".tel").css({
                backgroundImage: "url(img/index/call.png)"
            })
        } else {
            $(".headnav").stop(false, false).animate({
                backgroundColor: "rgb(255,255,255)"
            }, 300);
            $(".topnav>ul>li>a").css({
                color: "black"
            })
            $(".tel").css({
                backgroundImage: "url(img/index/call-black.png)"
            })
        }
    })
    //icon
    $('.i-hide').hide();
    $('.ico').hover(function() {
        $(this).css({
            backgroundColor: '#fbd319'
        });
        $('.i-hide').hide();
        $(this).find('.i-hide').show(10, function() {
            $(this).animate({
                width: '100%'
            }, 10)
        }).siblings('.i-show').hide()
    }, function() {
        $(this).find('.i-show').show().siblings('.i-hide').hide()
        $(this).css({
            backgroundColor: ''
        });
    })

    //lunbo
    var len = $('.gl-wrap').children('.gl-item').length;
    var i = 0;
    $(".gl-item").hide().eq(i).show();
    $('.w-rgt').click(function() {
        i += 1;
        if (i == len) {
            i = 0;
        }
        $(".gl-item").hide().eq(i).show();
    })
    $('.w-lft').click(function() {
        i -= 1;
        if (i < 0) {
            i = len - 1;
        }
        $(".gl-item").hide().eq(i).show();
    })


    //公告栏
    var bbsum = $('.bbs').children('.block').length;
    var index = 0;
    //2.4秒一次
    $(".block").hide().eq(index).show();
    setInterval(function() {
        index += 1;
        if (index == bbsum) {
            index = 0;
        }
        $(".block").hide().eq(index).show();
    }, 2400);
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