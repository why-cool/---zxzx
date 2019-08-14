/**
 * Created by Administrator on 2019/7/29 0029.
 */

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
            $(".headnav").stop(true, true).animate({ backgroundColor: "rgba(255,255,255,0)" }, 300);
            $(".topnav>ul>li>a").css({ color: "white" })
            $(".tel").css({ backgroundImage: "url(img/index/call.png)" })
        }
        else {
            $(".headnav").stop(false, false).animate({ backgroundColor: "rgb(255,255,255)" }, 300);
            $(".topnav>ul>li>a").css({ color: "black" })
            $(".tel").css({ backgroundImage: "url(img/index/call-black.png)" })
        }
    })
    $(window).scroll(function () {
        var scrollTop1 = $(window).scrollTop();
        if (scrollTop1 == 0) {
            $(".fontbox h2").css({ opacity: "1" });
            $(".fontbox h2").stop(true,true).animate({marginTop: "40px" },300);
        }
        else if (scrollTop1 > 10 & scrollTop1 < 200) {
            $(".fontbox h2").css({ opacity: "0.7" });
            $(".fontbox h2").stop(false,false).animate({marginTop: "-60px" },300);
        }
        else if (scrollTop1 >= 200 & scrollTop1 < 400) {
            $(".fontbox h2").css({ opacity: "0.3" });
            $(".fontbox h2").stop(false,false).animate({ marginTop: "-120px" }, 300);
        }
        else if (scrollTop1 > 400) {
            $(".fontbox h2").css({ opacity: "0" });
            $(".fontbox h2").stop(false,false).animate({marginTop: "-180px" },300);
        }
    })
    $(".shaitu div").hover(
        function () {
            $(this).children("span").animate({marginTop:"-60px"},500);
            $(this).children("img").animate({ marginTop: "-40px" }, 500);

        },
        function () {
            $(".shaitu div span").slideDown(500);
            $(this).children("img").animate({ marginTop: "0px" }, 500);
            $(this).children("span").animate({ marginTop: "0px" }, 500);
        }
    )
    $(".dingzhiimg2").hover(
        function () {
            $(this).nextAll(".call").stop(true,true).show(200);

        },
        function () {
            $(this).nextAll(".call").stop(true,true).hide(200);
        }
    )
    $(".dingzhiimg3").hover(
        function () {
            $(this).nextAll(".wx").stop(true,true).show(200);

        },
        function () {
            $(this).nextAll(".wx").stop(true,true).hide(200);
        }
    )
    $(".lunbobox div").not(":first").hide();
    $(".carousel-indicators li").click(function () {
        $(this).addClass("active");
        $("li").not(this).removeClass("active");
        var i = $(this).index();
        $(".lunbobox div").eq(i).slideDown(500);
        $(".lunbobox div").eq(i).siblings().slideUp(500);
    })
    $(".totop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $(this).css({ border: none });
    })
})
