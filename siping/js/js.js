// 设置rem数值
(function (doc, win) {
  var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	  var clientWidth = docEl.clientWidth;
	  if (!clientWidth) return;
	  /*
	  if(clientWidth>700){
			docEl.style.fontSize = '100px';
			return;
	  };
	  */
	  docEl.style.fontSize = 100 * (clientWidth / 1646) + 'px';
	};

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
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
      pagination : '.pagination',
      paginationClickable :true,
      onFirstInit:function(swiper){
        var pw = $(".index-banner .pagination")[0].offsetHeight;
        $(".index-banner .pagination").css({
          'height':pw,
          "bottom":0
        });
      },
      onSlideChangeEnd:function(swiper){
        var index = swiper.activeIndex;
        $(".content-k .content").fadeOut().eq(index).fadeIn(100);
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
        "height":"auto"
      })
      $(this).html("收起全部");
    }else{
      $("#newCon").css({
        "height":"300px"
      })
      $(this).html("查看全部");
    }
  })
})
