/**
 * Created by Administrator on 2019/7/29 0029.
 */
$(function() {
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
    //photo
    $('.h-item p').hide();
    $('.h-item img').mouseover(function() {
        $('.h-item p').hide();
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
