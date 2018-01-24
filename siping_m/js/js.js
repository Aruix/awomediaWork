$(function(){
	//移动端
	$(".but-pull").click(function(){
		$(this).parents('.content').toggleClass('ac');
		if($(this).html()==="更多"){
			$(this).html("收起")
		}else{
			$(this).html("更多")
		}
	})
	//原来的
  function bannerIndex(){
    var mySwiper = $('#swiperIndex').swiper({
      pagination : '.pagination',
      paginationClickable :true,
      onSlideChangeEnd:function(swiper){
        var index = swiper.activeIndex;
        $(".content-k .content").fadeOut().eq(index).fadeIn(100);
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
  // 搜索选择模块
  $(".module-k .module-c").click(function(){
    var ids = $(this).attr("data-id");
    var index = $(this).index();
    $(".module-k .module-c").removeClass("action")
    .eq(index).addClass('action')
    $("#mod").val(ids);
  })
})
