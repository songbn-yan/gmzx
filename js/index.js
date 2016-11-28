//导航轮播(最顶部)
//
$(document).ready(function(){
    $('.ht-left .beijing').hover(function(){
        $('.beijing .big-box').css("display","block")
        $('.ht-left .beijing').css("background","#fff")
    },function(){
        $('.beijing .big-box').css("display","none")
        $('.ht-left .beijing').css("background","#F1F1F1")
    })
})
$(document).ready(function(){
    $('.ht-right-three').hover(function(){
        $('.right-wdjd').css("display","block")
        $('.ht-right-three').css("background","#fff")
    },function(){
        $('.right-wdjd').css("display","none")
        $('.ht-right-three').css("background","#F1F1F1")
    })
})
$(document).ready(function(){
    $('.ht-right-nine').hover(function(){
        $('.wzhdh-nr').css("display","block")
        $('.ht-right-nine').css("background","#fff")
    },function(){
        $('.wzhdh-nr').css("display","none")
        $('.ht-right-nine').css("background","#F1F1F1")
    })
})
$(document).ready(function(){
    $('.ht-right-eight').hover(function(){
        $('.khfw-nr').css("display","block")
        $('.ht-right-eight').css("background","#fff")
    },function(){
        $('.khfw-nr').css("display","none")
        $('.ht-right-eight').css("background","#F1F1F1")
    })
})
$(document).ready(function(){
    $('.ht-right-six').hover(function(){
        $('.sjjd-nr').css("display","block")
        $('.ht-right-six').css("background","#fff")
    },function(){
        $('.sjjd-nr').css("display","none")
        $('.ht-right-six').css("background","#F1F1F1")
    })
})
//
// $(document).ready(function(){
//     var gmic=$(".gmic");
//     var wid=gmic.width();
//     console.log(wid)
//     var ui_prev=$(".ui-prev")[0];
//     var ui_next=$(".ui-next")[0];
//     var ick=$(".gmic .ick");

//     var now=0;
//     var next=0;
//     ui_next.onclick=function(){
//         next=now+1;
//         if(next>=ick.length){
//             next=0;
//         }

//         ick.eq(next).css("left",wid+"px").end().eq(now).animate({left:-wid}).end().eq(next).animate({left:0});
//         now=next;
//     }
//     ui_prev.onclick=function(){
//         next=now-1;
//         if(next<0){
//             next=ick.length-1;
//         }

//         ick.eq(next).css("left",-wid+"px").end().eq(now).animate({left:wid}).end().eq(next).animate({left:0});
//         now=next;
//     }
// })

// 关闭close
$(document).ready(function(){
    var close=$("#nav .close")[0];
    close.onclick=function() {
      $("#nav").remove()
    }
})

// 搜索轮播
$(document).ready(function(){
    var Rollhd=$(".Rollhd")[0];
    var hdtj=$(".hdscroll .hdtj");   
    // console.log(hdtj)
    var height=$(".Rollhd").height();
    // console.log(height)
    var up=$(".Rollbtn .up")[0];
    var down=$(".Rollbtn .down")[0];

    var t=setInterval(run,2000);
    var now=0;
    var next=0;

    function run(){
        next=now+1;
        if(next>=hdtj.length){
                next=0;
        }
        
        hdtj.eq(next).css("top",height+"px").end().eq(now).animate({top:-height}).end().eq(next).animate({top:0});
        now=next;
    }
    down.onclick=function(){
        next=now-1;
        if(next<0){
            next=hdtj.length-1;
        }

        hdtj.eq(next).css("top",-height+"px").end().eq(now).animate({top:height}).end().eq(next).animate({top:0});
        now=next;
    }
    up.onclick=function(){
        run();
    }

})

//猜你喜欢
$(document).ready(function(){
    var width=$('.four-bottom').width();
    var n=0;
    var next=0;
    $('.replace').click(function(){
        next=n+1;
        if(next>=$('.four-bottom').length){
            next=0;
        }
        $('.four-bottom').eq(next).css("left",width)
        $('.four-bottom').eq(n).animate({left:-width},600)
        $('.four-bottom').eq(next).animate({left:0},600)
        n=next;
    })
})
// $(document).ready(function(){
//     var guess=$(".guess")[0];
//     var change=$(".change")[0];
//     var guess_main=$(".guess_main");
//     var kuan=$(".guess").width();

//     var now=0;
//     var next=0;
//     var t=setInterval(run1,5000);

//     function run1(){
//         next=now+1;
//         if(next>=guess_main.length){
//             next=0;
//         }
//         guess_main.eq(next).css("left",kuan+"px").end().eq(now).animate({left:-kuan}).end().eq(next).animate({left:0});
//         now=next;
//     }

//     change.onclick=function(){
//         run1();
//     }

// })


// ban
$(document).ready(function(){
    $('.nav-item').hover(function(){
        var index=$(this).index();
        $('.menu').eq(index).css("display","block")
    },function(){
        var index=$(this).index();
        $('.menu').eq(index).css("display","none")
    })
})

//banner轮播
$(document).ready(function(){
        var flag=true;
        var n=0;
        var next=0;
        var width=$('.slide-tu').width();
        function tu(){
            if(!flag){
                return false;
            }
            flag=false;
            next=n+1;
            if(next>=$('.slide-tu .tp').length){
                next=0;
            };
            $('.slide-tab .lis').removeClass("lis-first").eq(next).addClass("lis-first")
            $('.slide-tu .tp').eq(next).css("left",width).end().eq(n).animate({left:-width},2000).end().eq(next).animate({left:0},2000,function(){
                flag=true;
            });
            n=next;
        }
        var t=setInterval(tu,2000);
        $('.slide-tu').mouseover(function(){
            clearInterval(t);
        }).mouseout(function(){
            t=setInterval(tu,2000);
        });
        $('.slide-tu .bannerRight').click(function(){
            next=n-1;
            if(!flag){
                return false;
            }
            flag=false;
            if(next>=$('.slide-tu .tp').length){
                next=0;
            };
            $('.slide-tab .lis').removeClass("lis-first").eq(next).addClass("lis-first")
            $('.slide-tu .tp').eq(next).css("left",-width).end().eq(n).animate({left:width},2000).end().eq(next).animate({left:0},2000,function(){
                flag=true;
            });
            n=next;
        })
        $('.slide-tu .bannerLeft').click(function(){
            tu();
        })
       var index=$(".slide-tab .lis").index();
         $(".slide-tab .lis").hover(function(){
             var index=$(this).index();
             if(index>n){
                if(!flag){
                return;
             }
             flag=false;
             $(".slide-tu .tp").eq(index).css("left",width)
             $(".slide-tu .tp").eq(n).animate({left:-width},1000);
             $(".slide-tu .tp").eq(index).animate({left:0},1000,function(){
                flag=true;
             })
             }else if(index<n){
                if(!flag){
                return;
             };
             flag=false;
                $(".slide-tu .tp").eq(index).css("left",-width)
             $(".slide-tu .tp").eq(n).animate({left:width},1000);
             $(".slide-tu .tp").eq(index).animate({left:0},1000,function(){
                flag=true;
             })
             };
            $(".slide-tab .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
        },function(){
            var index=$(this).index();
             if(index>n){
                if(!flag){
                return;
             }
             flag=false;
             $(".slide-tu .tp").eq(index).css("left",width)
             $(".slide-tu .tp").eq(n).animate({left:-width},1000);
             $(".slide-tu .tp").eq(index).animate({left:0},1000,function(){
                flag=true;
             })
             }else if(index<n){
                if(!flag){
                return;
             };
             flag=false;
                $(".slide-tu .tp").eq(index).css("left",-width)
             $(".slide-tu .tp").eq(n).animate({left:width},1000);
             $(".slide-tu .tp").eq(index).animate({left:0},1000,function(){
                flag=true;
             })
             };
            $(".slide-tab .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
        })
})
jQuery.extend({
        lunbo:function(obj,img){
            obj.hover(function(){
                var index=$(this).index();
                obj.removeClass("index").eq(index).addClass("index");
                img.css("display","none").eq(index).css("display","block");
            },function(){
                var index=$(this).index();
                obj.removeClass("index").eq(index).addClass("index");
                img.css("display","none").eq(index).css("display","block");
            })
        }
})
$(document).ready(function(){
    $.lunbo($(".lis:nth-child(1) .nth i"),$(".slide-tu .tp:nth-child(1) li"))
    $.lunbo($(".lis:nth-child(2) .nth i"),$(".slide-tu .tp:nth-child(2) li"))
    $.lunbo($(".lis:nth-child(3) .nth i"),$(".slide-tu .tp:nth-child(3) li"))
    $.lunbo($(".lis:nth-child(4) .nth i"),$(".slide-tu .tp:nth-child(4) li"))
    $.lunbo($(".lis:nth-child(5) .nth i"),$(".slide-tu .tp:nth-child(5) li"))
    $.lunbo($(".lis:nth-child(6) .nth i"),$(".slide-tu .tp:nth-child(6) li"))
    $.lunbo($(".lis:nth-child(7) .nth i"),$(".slide-tu .tp:nth-child(7) li"))
    $.lunbo($(".lis:nth-child(8) .nth i"),$(".slide-tu .tp:nth-child(8) li"))
    $.lunbo($(".lis:nth-child(9) .nth i"),$(".slide-tu .tp:nth-child(9) li"))
    $.lunbo($(".lis:nth-child(10) .nth i"),$(".slide-tu .tp:nth-child(10) li"))
})



//楼层跳转
$(document).ready(function(){
    var cheight=document.documentElement.clientHeight;
    var cwidth=document.documentElement.clientWidth;
    var floor=$('.floor');
    var floor_lis=$('.etitle');
    var floor_nav=$('.floor-nav')[0];
    var nheight;
    var zsj=$(".zsj");
    var now;
    var flag=true;
    var flag2=true;
    for(var i=0;i<floor.length;i++){
        floor[i].h=floor[i].offsetTop;
    }
    window.onscroll=function(){
        var obj=document.body.scrollTop?document.body:document.documentElement;
        var top=obj.scrollTop;
        if(top>=floor[0].h-300){
            floor_nav.style.display='block';
            nheight=floor_nav.offsetHeight;
            floor_nav.style.top=(cheight-nheight)/2+'px';
            if(flag==true){
                flag=false;
            }flag=true;
        }
        if(top<floor[0].h-300){
            floor_nav.style.display='none';
            if(flag2==true){
                flag2=false;
            }flag2=true;
        }
        // 出现对应的颜色
        for(var i=0;i<floor.length;i++){
            if(top>=floor[i].h-200){
                for(var j=0;j<floor_lis.length;j++){
                    // floor_lis[j].style.color='#625351';
                    floor_lis.eq(j).css("color","#625351")
                    zsj.eq(j).css("display","none")
                }
                // floor_lis[i].style.color='#C81576'
                floor_lis.eq(i).css("color","#C81623")
                zsj.eq(i).css("display","block")
                now=i;
            }
        }

        // 点击返回对应的楼层
        for(var i=0;i<floor_lis.length;i++){
            floor_lis[i].index=i;

            floor_lis[i].onclick=function(){

                // animate(document.body,{scrollTop:floor[this.index].h});
                $('html,body').animate({scrollTop:floor[this.index].h});
                now=this.index;
            }
            floor_lis[i].onmouseover=function(){
                if(this.index==now){
                    return;
                }
                this.style.color='#c81623'
            }
            floor_lis[i].onmouseout=function(){
                if(this.index==now){
                    return;
                }

                this.style.color='#625351'
                
            }
        }
    }
})



$(document).ready(function(){
//楼层轮播
   var fashion=$(".shang");
    for(var i=0;i<fashion.length;i++){
        lunBo(fashion.eq(i));
    }  
    function lunBo(fashion){
       var pics=fashion.find(".lunbotu");
        var cirs=fashion.find(".lis1");
        var fashion_left=fashion.find(".ban_left");
        var fashion_right=fashion.find(".ban_right");
        var n1=0;
        var next1=0;
        var fashion_width=fashion.width();
        var t1=setInterval(move1,2000);
            function move1(){
            next1=n1+1;
            if(next1>=pics.length){
                next1=0;
            }
            pics.eq(next1).css({left:fashion_width});
            pics.eq(n1).animate({left:-fashion_width},1);
            pics.eq(next1).animate({left:0},1);
            for(var i=0;i<cirs.length;i++){
                cirs.eq(i).css({background:"#3E3E3E"});
            }
            cirs.eq(next1).css({background:"#B61B1F"});
            n1=next1;
        }
        
        fashion.mouseover(function(){
            fashion_left.css("display","block");
            fashion_right.css("display","block");
            clearInterval(t1);
        });
        fashion.mouseout(function(){
            fashion_left.css("display","none");
            fashion_right.css("display","none");
            t1=setInterval(move1,2000);
        });
        fashion_left.click(function(){
            next1=n1-1;
            if(next1<0){
                next1=pics.length-1;
            }
            pics.eq(next1).css({left:-fashion_width});
            pics.eq(n1).animate({left:fashion_width},1);
            pics.eq(next1).animate({left:0},1);
            for(var i=0;i<cirs.length;i++){
                cirs.eq(i).css({background:"#3E3E3E"});
            }
            cirs.eq(next1).css({background:"#B61B1F"});
            n1=next1;
        })
        fashion_right.click(function(){
            move1();
        });
         for(var i=0;i<cirs.length;i++){
            cirs.eq(i).attr({index:i});
            cirs.eq(i).mouseover(function(){
                if(n1<$(this).attr("index")){
                   pics.eq($(this).attr("index")).css({left:fashion_width});
                   pics.eq(n1).animate({left:-fashion_width},1);
                   pics.eq($(this).attr("index")).animate({left:0},1);
                   for(var i=0;i<cirs.length;i++){
                     cirs.eq(i).css({background:"#3E3E3E"});
                   }
                   $(this).css({background:"#B61B1F"});
                   n1=$(this).attr("index");    
                }else if(n1>$(this).attr("index")){
                    pics.eq($(this).attr("index")).css({left:-fashion_width});
                    pics.eq(n1).animate({left:fashion_width},1);
                    pics.eq($(this).attr("index")).animate({left:0},1);
                    for(var i=0;i<cirs.length;i++){
                     cirs.eq(i).css({background:"#3E3E3E"});
                   }
                   $(this).css({background:"#B61B1F"});
                   n1=$(this).attr("index");
                }
            });
        }
    }  


//楼层选项
    var F1=$(".floor-f1");
    var F1box=$(".F1");
    var hi=F1box.find(".hidden-1");
    xuXa(F1,hi);
    function xuXa(F,hi){
        var seek=F.find(".tab-item");
        var n=0;
        for(var i=0;i<seek.length;i++){
        seek.eq(i).attr({index:i}); 
        seek.eq(i).mouseover(function(){
            for(var j=0;j<hi.length;j++){
                hi.eq(j).css("display","none");
                seek.eq(j).removeClass("tab-selected");
                seek.eq(j).find("a").css("color","#666");
            }
            hi.eq($(this).attr("index")).css("display","block");
            $(this).addClass("tab-selected");
            $(this).find("a").css("color","#fff");
            n=$(this).attr("index");
        });
     }
   }
    var F2=$(".floor-f2");
    var F2box=$(".F2");
    var hi2=F2box.find(".hidden-1");
    xuXa(F2,hi2);

    var F3=$(".floor-f3");
    var F3box=$(".F3");
    var hi3=F3box.find(".hidden-1");
    xuXa(F3,hi3);

    var F4=$(".floor-f4");
    var F4box=$(".F4");
    var hi4=F4box.find(".hidden-1");
    xuXa(F4,hi4);

    var F5=$(".floor-f5");
    var F5box=$(".F5");
    var hi5=F5box.find(".hidden-1");
    xuXa(F5,hi5);

    var F6=$(".floor-f6");
    var F6box=$(".F6");
    var hi6=F6box.find(".hidden-1");
    xuXa(F6,hi6);

    var F7=$(".floor-f7");
    var F7box=$(".F7");
    var hi7=F7box.find(".hidden-1");
    xuXa(F7,hi7);

    var F8=$(".floor-f8");
    var F8box=$(".F8");
    var hi8=F8box.find(".hidden-1");
    xuXa(F8,hi8);

    var F9=$(".floor-f9");
    var F9box=$(".F9");
    var hi9=F9box.find(".hidden-1");
    xuXa(F9,hi9);


    var dian1=F1box.find(".dianji");
    dianji(F1,hi,dian1,F1box);
    var dian2=F2box.find(".dianji");
    dianji(F2,hi2,dian2,F2box);
    var dian3=F3box.find(".dianji");
    dianji(F3,hi3,dian3,F3box);
    var dian4=F4box.find(".dianji");
    dianji(F4,hi4,dian4,F4box);
    var dian5=F5box.find(".dianji");
    dianji(F5,hi5,dian5,F5box);
    function dianji(F,hi,dian,box){
        box.mouseover(function(){
            dian.css("display","block");
        });
        box.mouseout(function(){
            dian.css("display","none");
        });
        var seek=F.find(".tab-item");
        var n=0;
        dian.click(function(){
            n++;
            if(n>=7){
                n=0;
            }
            for(var j=0;j<hi.length;j++){
                hi.eq(j).css("display","none");
                seek.eq(j).css("background","#fff");
                seek.eq(j).find("a").css("color","#666");
            }
            hi.eq(n).css("display","block");
            seek.eq(n).css("background","#535353");
            seek.eq(n).eq(j).find("a").css("color","#fff");
        });
    
    }
})
// 右边导航
$(document).ready(function(){
    $('.back .back-one').hover(function(){
        $('.back-one .tu1 .backOne').stop(true)
        $('.back-one .tu1 .backOne').delay(200).animate({width:140},400)
    },function(){
        $('.back-one .tu1 .backOne').stop(true)
        $('.back-one .tu1 .backOne').delay(200).animate({width:0},400)
    })

    $('.back .back-two').hover(function(){
        $('.back-two .backTwo').stop(true)
        $('.back-two .backTwo').delay(200).animate({width:100},400)
    },function(){
        $('.back-two .backTwo').stop(true)
        $('.back-two .backTwo').delay(200).animate({width:0},400)
    })

    $('.back .back-three').hover(function(){
        $('.back-three .backThree').stop(true)
        $('.back-three .backThree').delay(200).animate({width:100},400)
    },function(){
        $('.back-three .backThree').stop(true)
        $('.back-three .backThree').delay(200).animate({width:0},400)
    })
})