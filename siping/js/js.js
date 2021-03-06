$(function(){
  function bannerIndex(){
    var w = $("body").css('width'),
        h = (parseInt(w)*0.389583)+'px';
    $("#swiperIndex").css({
      "height":h
    });
    $(".index-banner").css("height",h);
    $(".content-k .content").eq(0).fadeIn(0);
    var mySwiper = $('#swiperIndex').swiper({
      mode: 'vertical',
      direction:"vertical",
      effect:"fade",
      autoplay : 3000,
      pagination : '.pagination',
      paginationClickable :true,
      onSlideChangeEnd:function(swiper){
        var index = swiper.activeIndex;
        $(".content-k .content").fadeOut().eq(index).fadeIn(100);
      },
      onFirstInit:function(swiper){
        var pw = $(".index-banner .pagination")[0].offsetHeight;
        $(".index-banner .pagination").css({
          'height':pw,
          "bottom":0
        });
      },
      onInit:function(swiper){
        var pw = $(".index-banner .pagination")[0].offsetHeight;
        $(".index-banner .pagination").css({
          'height':pw,
          "bottom":0
        });
      }
    });
    $(".arrow-top").click(function(){
      if(mySwiper.hasOwnProperty('swipePrev')){
        mySwiper.swipePrev();
      }else{
        mySwiper.slidePrev();
      }
    });
    $(".arrow-bottom").click(function(){
      if(mySwiper.hasOwnProperty('swipeNext')){
        mySwiper.swipeNext();
      }else{
        mySwiper.slideNext();
      }
    })
  }
  bannerIndex();
  // 返回顶部
  $(".retop").click(function(){
    $("html").animate({ scrollTop: 0 }, 500);
  })
  //页面滚动事件
  $(document).scroll(function(){
    var x = $("html")[0].scrollTop;
    if(x>100){
      $(".retop").fadeIn(200);
    }else{
      $(".retop").fadeOut(200);
    }
  })
  function swiperList(){
    var swiper2 = $('#swiperIndex2').swiper({
      pagination : '.pagination2',
      paginationClickable :true,
      onSlideChangeEnd:function(swiper){
        var index = swiper.activeIndex;
        $(".list-banner .setting .title-list")
        .removeClass('active').eq(index).addClass("active");
      }
    })
  }
  swiperList();
  // 菜单切换按钮
  $(".ownswip-title .text").click(function(){
    var index = $(this).index();
    $(this).parent().find(".textt").toggleClass("action")
    $(this).parents('.ownswip-title')
    .nextAll('.content').children('.content-t')
    .removeClass('action').eq(index)
    .addClass('action');
  })
  // 查看全部
  $(".seeq").click(function(){
    if($(this).html()=="查看全部"){
      $("#newCon").css({
        "max-height":"none"
      })
      $(this).html("收起全部");
    }else{
      $("#newCon").css({
        "max-height":"800px"
      })
      $(this).html("查看全部");
    }
  })
  //首页通知公告
  function tzggBan(){
    var list = $(".tzgg-list-k .tzgg-list");
    var height = list.height();
    if(list.length>5){
      setInterval(function(){
        $(".tzgg-ks").animate({
            top:(-height)+"px"
          },500,function(){
            var list1 = $(".tzgg-list-k .tzgg-list").eq(0);
            console.log(list1);
            $(".tzgg-ks").append($(list1).clone());
            $(list1).remove();
            $(".tzgg-ks").css("top",0);
          }
        )
      },5000)
    }
  }
  tzggBan();
  // 加入收藏
  $(".header-top .sc").click(function(){
    alert("请点击 Ctrl+D 收藏本页面");
    return false;
  })
  // 图集
  function swiperPic(){
    var swiper3 = $('#swiperPic').swiper({
      //pagination : '.pagination2',
      paginationClickable :true,
      keyboardControl : true,
      onSlideChangeEnd:function(swiper){
        var index = swiper.activeIndex;
        $(".num .zn").html(index+1);
        $(".banner-desc .title-list").removeClass('action')
        .eq(index).addClass("action")
      },
      onFirstInit:function(swiper){
        var pw = $('#swiperPic .swiper-slide').length;
        $(".num .zs").html(pw);
      },
      onInit:function(swiper){
        var pw = $('#swiperPic .swiper-slide').length;
        $(".num .zs").html(pw);
      }
    })
  }
  swiperPic();
  function bannerBj(){
    var swiper4 = $('#bannerTj').swiper({
      paginationClickable :true,
      pagination : '.pagination3',
      slidesPerView : 'auto'
    })
  }
  bannerBj();
  // 弹出二维码
  $(".header-top .gz").click(function(){
    $(this).children('.orwm').fadeToggle();
    return false;
  })
  // 搜索选择模块
  $(".module-k .module-c").click(function(){
    var ids = $(this).attr("data-id");
    var index = $(this).index();
    $(".module-k .module-c").removeClass("action")
    .eq(index).addClass('action')
    $("#mod").val(ids);
  })
})
