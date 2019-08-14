/**
 * Created by Administrator on 2019/7/29 0029.
 */

$(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $(".headnav").stop(true, true).animate({
                backgroundColor: "rgba(255,255,255,0)"
            }, 300);
            $(".title_1_chiose>ul>li>a").css({
                color: "#000"
            })
            $(".tel").css({
                backgroundImage: "url(img/index/call.png)"
            })
        } else {
            $(".headnav").stop(false, false).animate({
                backgroundColor: "rgb(255,255,255)"
            }, 300);
            $(".title_1_chiose>ul>li>a").css({
                color: "black"
            })
            $(".tel").css({
                backgroundImage: "url(img/index/call-black.png)"
            })
        }
    })
    //·µ»Ø¶¥²¿
    $('.backTop').click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 'slow');
    });

    //tab Ò³ÊýÇÐ»»
    $('.c-two-index').addClass('hide');
    $('.c-next').click(function() {
        $(".c-main-index").addClass('hide').next().removeClass('hide');
    })
    $('.c-prev').click(function() {
        $(".c-main-index").removeClass('hide').next().addClass('hide');
    })
    $('.c-tactive').click(function() {
        $(".c-main-index").show().sibling('.c-indexBtn').show();
    })
    var days = $('.play-day');
    days.find('li').click(function() {
        $(this).find('a').addClass('c-tactive').
            parent().siblings().find('a').removeClass('c-tactive')
    }) //color
    $('.c-intro').hover(function() {
        $(this).css({
            backgroundColor: '#fef7d1',
            cursor: 'pointer'
        }).siblings().css({
            backgroundColor: ''
        })
    }, function() {
        $(this).css({
            backgroundColor: ''
        })
    })
})
