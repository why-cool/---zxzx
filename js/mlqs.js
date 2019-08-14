/**
 * Created by Administrator on 2019/7/29 0029.
 */
$(function(){
    $(".six a").hover(function(){
            $(this).find(".bottom1").stop(true,true).animate({left:200},1000);
            $(this).find(".bottom2").stop(true,true).animate({left:0,backgroundColor:"#fbd319"},1000);
            $(this).css({transfrom:"translate(0,0)",backgroundColor:"#fbd319"})//实现背景过渡变色
    },
    function(){
        $(".bottom1").stop(true,true).animate({left:""},1000);
        $(".bottom2").stop(true,true).animate({left:-200},1000);
        $(this).css({transfrom:"translate(0,0)",backgroundColor:""})
    });
})


$(function () {
    var bbsum = $('.bbs').children('.block').length;
    var index = 0;
    $(".block").hide().eq(index).show();
    setInterval(function() {
        index += 1;
        if (index == bbsum) {
            index = 0;
        }
        $(".block").hide().eq(index).show();
    }, 2400);

})
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
            $(".headnav").stop(true, true).animate({ backgroundColor: "rgba(255,255,255,0)"},300);
            $(".topnav>ul>li>a").css({ color: "white" })
            $(".tel").css({backgroundImage:"url(img/index/call.png)"})
        } else {
            $(".headnav").stop(false,false).animate({backgroundColor:"rgb(255,255,255)"},300);
            $(".topnav>ul>li>a").css({ color: "black" })
            $(".tel").css({backgroundImage:"url(img/index/call-black.png)"})
        }
    })
    $(".middle_8 img").mouseover(function(){
        $(this).css({text:"图片介绍"});
    })
    $(".middle_8 img").mouseout(function(){
        $(this).css({text:""});
    })
})
//跟团报价
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $(".headnav").stop(true, true).animate({ backgroundColor: "rgba(255,255,255,0)"},300);
            $(".title_1_chiose>ul>li>a").css({ color: "brown" })
            $(".tel").css({backgroundImage:"url(img/index/call.png)"})
        } else {
            $(".headnav").stop(false,false).animate({backgroundColor:"rgb(255,255,255)"},300);
            $(".title_1_chiose>ul>li>a").css({ color: "black" })
            $(".tel").css({backgroundImage:"url(img/index/call-black.png)"})
        }
    })
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
    $(".middle_1_all").mouseover(function(){
        $(this).css({"background-color":"rgba(255, 188, 0, 0.32)"});
    })
    $(".middle_1_all").mouseout(function(){
        $(this).css({"background-color":""});
    })
})



