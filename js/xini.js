/**
 * Created by Administrator on 2019/7/29 0029.
 */
$(function() {
    $(".rights").click(function () {
        var v1 = $(".boxs"); //显示
        var v2; //隐藏
        if (v1.next().length == 0) {
            v2 = $(".box:first");
        } else {
            v2 = v1.next();
        }
        v1.animate({
            display:"none"
        },5,  function() {
            v1.removeClass("boxs")
        });
        v2.animate({
            display:"block"
        },5, function() {
            v2.addClass("boxs")
        })
    })

    $(".lefts").click(function () {
        var v1 = $(".boxs"); //显示
        var v2; //隐藏
        if (v1.prev().length == 0) {
            v2 = $(".box:last");
        } else {
            v2 = v1.prev();
        }
        v1.animate({
            display:"none"
        },5,  function() {
            v1.removeClass("boxs")
        });
        v2.animate({
            display:"block"
        },5, function() {
            v2.addClass("boxs")
        })
    })
})

$(function () {
    $(".d1").click(function () {
        var i=$(this).index();
        $(".box").css({display:"none"})
        $(".box").eq(i).css({display:"block"})
    })
})


//xini
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
})
$(function(){
    $(".nav li").hover(function(){
        $(this).find(".nav-a").css({color:"#fbd319",borderBottom:"5px solid #fbd319"})
    },function(){
        $(this).find(".nav-a").css({color:"",borderBottom:""})
    });
    $(".show").hover(function(){
        $(this).find(".se-menu").show();
    },function(){
        $(this).find(".se-menu").hide();
    });
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

$(function() {
    setInterval("fun()", 3000);
})

function fun() {
    var v1 = $(".slide .img1"); //显示
    var v2; //隐藏
    if (v1.next().length == 0) {
        v2 = $(".slide img:first");
    } else {
        v2 = v1.next();
    }
    v1.animate({
        opacity: 0
    }, 1500, function() {
        v1.removeClass("img1")
    });
    v2.animate({
        opacity: 1
    }, 1500, function() {
        v2.addClass("img1")
    })
}

$(function () {
    $(".layou .layoubottom").click(function () {
        $(".main .layou .blank").css({marginTop:"-700px"})
        $(this).css({display:"none"})
        $(".main .layou .layoutop img").css({display:"block"})
    })
    $(".layou .layoutop").click(function () {
        $(".main .layou .blank").css({marginTop:""})
        $(this).css({display:"none"})
        $(".main .layou .layoubottom").css({display:"block"})
    })
    $(".layou1 .layoubottom").click(function () {
        $(".main .layou1 .blank").css({marginTop:"-700px"})
        $(this).css({display:"none"})
        $(".main .layou1 .layoutop img").css({display:"block"})
    })
    $(".layou1 .layoutop").click(function () {
        $(".main .layou1 .blank").css({marginTop:""})
        $(this).css({display:"none"})
        $(".main .layou1 .layoubottom").css({display:"block"})
    })
})


$(function () {
    $(".main .layou .pa li").click(function () {
        var i=$(this).index()
        $(".main .layou").css({display:"none"});
        $(".main .layou").eq(i).css({display:"block"});
    })
    $(".main .layou1 .pa li").click(function () {
        var i=$(this).index()
        $(".main .layou1").css({display:"none"});
        $(".main .layou1").eq(i).css({display:"block"});
    })
    $(".main .layou2 .pa li").click(function () {
        var i=$(this).index()
        $(".main .layou2").css({display:"none"});
        $(".main .layou2").eq(i).css({display:"block"});
    })
    $(".main .layou3 .pa li").click(function () {
        var i=$(this).index()
        $(".main .layou3").css({display:"none"});
        $(".main .layou3").eq(i).css({display:"block"});
    })
})

$(function() {

    var totalPanels			= $(".scrollContainer").children().size();

    var regWidth			= $(".panel").css("width");
    var regImgWidth			= $(".panel img").css("width");
    var regTitleSize		= $(".panel h2").css("font-size");
    var regParSize			= $(".panel p").css("font-size");

    var movingDistance	    = 300;

    var curWidth			= 350;
    var curImgWidth			= 326;
    var curTitleSize		= "20px";
    var curParSize			= "15px";

    var $panels				= $('#slider .scrollContainer > div');
    var $container			= $('#slider .scrollContainer');

    $panels.css({'float' : 'left','position' : 'relative'});

    $("#slider").data("currentlyMoving", false);

    $container
        .css('width', ($panels[0].offsetWidth * $panels.length) + 100 )
        .css('left', "-350px");

    var scroll = $('#slider .scroll').css('overflow', 'hidden');

    function returnToNormal(element) {
        $(element)
            .animate({ width: regWidth })
            .find("img")
            .animate({ width: regImgWidth })
            .end()
            .find("h2")
            .animate({ fontSize: regTitleSize })
            .end()
            .find("p")
            .animate({ fontSize: regParSize });
    };

    function growBigger(element) {
        $(element)
            .animate({ width: curWidth })
            .find("img")
            .animate({ width: curImgWidth })
            .end()
            .find("h2")
            .animate({ fontSize: curTitleSize })
            .end()
            .find("p")
            .animate({ fontSize: curParSize });
    }

    function change(direction) {

        if((direction && !(curPanel < totalPanels)) || (!direction && (curPanel <= 1))) { return false; }

        if (($("#slider").data("currentlyMoving") == false)) {

            $("#slider").data("currentlyMoving", true);

            var next         = direction ? curPanel + 1 : curPanel - 1;
            var leftValue    = $(".scrollContainer").css("left");
            var movement	 = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;

            $(".scrollContainer")
                .stop()
                .animate({
                    "left": movement
                }, function() {
                    $("#slider").data("currentlyMoving", false);
                });

            returnToNormal("#panel_"+curPanel);
            growBigger("#panel_"+next);

            curPanel = next;

            $("#panel_"+(curPanel+1)).unbind();

            $("#panel_"+(curPanel+1)).click(function(){ change(true); });

            $("#panel_"+(curPanel-1)).unbind();

            $("#panel_"+(curPanel-1)).click(function(){ change(false); });

            $("#panel_"+curPanel).unbind();
        }
    }

    growBigger("#panel_3");
    var curPanel = 3;

    $("#panel_"+(curPanel+1)).click(function(){ change(true); });
    $("#panel_"+(curPanel-1)).click(function(){ change(false); });

    $(".right").click(function(){ change(true); });
    $(".left").click(function(){ change(false); });

    $(window).keydown(function(event){
        switch (event.keyCode) {
            case 13:
                $(".right").click();
                break;
            case 32:
                $(".right").click();
                break;
            case 37:
                $(".left").click();
                break;
            case 39:
                $(".right").click();
                break;
        }
    });

});






