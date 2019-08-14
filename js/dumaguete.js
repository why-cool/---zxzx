$(function(){
    $(".six a").hover(function(){
            $(this).find(".bottom1").stop(true,true).animate({left:200},800);
            $(this).find(".bottom2").stop(true,true).animate({left:0},800);
            $(this).css({transfrom:"translate(0,0)",backgroundColor:"#fbd319"})//实现背景过渡变色
        },
        function(){
            $(".bottom1").stop(true,true).animate({left:""},1000);
            $(".bottom2").stop(true,true).animate({left:-200},1000);
            $(this).css({transfrom:"translate(0,0)",backgroundColor:""})
        });
})
$(function(){
    setInterval("fun()",4000)
})
function fun() {
    var v1 = $(".message .p1");//要隐藏的
    var v2;//要显示的
    if (v1.next().length == 0) {
        v2 = $(".message p:first");
    }
    else {
        v2 = v1.next();
    }
    v1.animate({opacity: 0}, 800, function () {
        v1.removeClass("p1")
    })
    v2.animate({opacity: 1}, 800, function () {
        v2.addClass("p1")
    })
}
$(function(){
    $(".dong").hover(function(){
        $(this).find("img").css({transform:"scale(0.9)"});
        $(this).find(".hid").animate({opacity:1},500)
    },function(){
        $(this).find("img").css({transform:"scale(1)"});
        $(this).find(".hid").animate({opacity:0},500)
    });
    $(".playout .lef").click(function(){
        $(".play").animate({marginLeft:"-400px"},1000);
    });
    $(".playout .rig").click(function(){
        $(".play").animate({marginLeft:"0px"},1000);
    });
    $(".lebot").click(function(){
        $(".lebot").toggle("drop",{direction:"left"},500,function(){
            $(".boyi").animate({marginLeft:"0px"},800)
        })
    });
    $(".hiddd").click(function(){
        $(".boyi").animate({marginLeft:"-2000px"},500,function(){
            $(".lebot").show(500)
        })
    });
    $(".hid .lianxi").click(function(){
        $(".another").show();
    })
    $(".another .a1").click(function(){
        $(".another").hide();
    });
    $(".another .a1").hover(function(){
            $(this).css({background:"url('img/Dumaguete/chaticon.png') no-repeat -5px -20px"});
        },
        function(){
            $(this).css({background:"url('img/Dumaguete/chaticon.png') no-repeat -5px 0px"});
        });
    $(".another .a3").click(function(){
        $(".another").hide();
    });
    $(".another .a3").hover(function(){
            $(this).css({background:"url('img/Dumaguete/chaticon.png') no-repeat -64px -20px"});
        },
        function(){
            $(this).css({background:"url('img/Dumaguete/chaticon.png') no-repeat -64px 0px"});
        });
    $(".another .a2").click(function(){
        $(".another").css({height:"600px"});
        $(this).css({background:"url('img/Dumaguete/chaticon.png') no-repeat -24px 0px"},function(){})
    });
    $(".another .a2").hover(function(){
            $(this).css({background:"url('img/Dumaguete/chaticon.png') no-repeat -44px -20px"});
        },
        function(){
            $(this).css({background:"url('../img/Dumaguete/chaticon.png') no-repeat -44px 0px"});
        });
    $(".another").draggable({cursorAt:{left:250,top:15},cursor:"crosshair",containment:"body",revert:"false"});
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $(".header").stop(true, true).animate({ backgroundColor: "rgba(255,255,255,0)"},300);
            $(".nav>ul>li>a").css({color:"#fff"})
            $(".tel").css({backgroundImage:"url(img/index/call.png)"})
        }
        else {
            $(".nav").stop(false,false).animate({backgroundColor:"rgb(255,255,255)"},300);
            $(".nav>ul>li>a").css({color:"#000"})
            $(".tel").css({backgroundImage:"url(img/index/call-black.png)"})
        }
    });
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
            $(".tel").css({backgroundImage:"url('img/index/call.png')"})
        } else {
            $(".headnav").stop(false,false).animate({backgroundColor:"rgb(255,255,255)"},300);
            $(".topnav>ul>li>a").css({ color: "black" })
            $(".tel").css({backgroundImage:"url('img/index/call-black.png')"})
        }
    });
    $(".lun-left").click(function(){
        var v=$(".lunbo .more").eq(0).width();
        var l=$(".item").scrollLeft();
        $(".item").scrollLeft(l-v);
    })
    $(".lun-right").click(function(){
        var v=$(".lunbo .more").eq(0).width();
        var l=$(".item").scrollLeft();
        $(".item").scrollLeft(v+l);
    });

});
$(function () {
    $(".dumaguete-last-nav ul li").mouseover(function () {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        var i=$(this).index();
        $(".dumaguete-content>div").css({display:"none"});
        $(".dumaguete-content>div").eq(i).css({display:"block"})
    })
})






