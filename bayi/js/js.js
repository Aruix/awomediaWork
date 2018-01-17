$(function(){
	
	if($('#swiperIndex').length === 1){
		var swiperIndex = $('#swiperIndex').swiper({
  	})
	}
	if($('#swiperIndex2').length === 1){
		var swiperIndex2 = $('#swiperIndex2').swiper({
  	})
	}
	if($('#bannerN').length === 1){
		var bannerN = $('#bannerN').swiper({
			onSlideChangeEnd:function(swiper){
        var index = swiper.activeIndex;
        $(".banner-n1 .title .text").css('display','none')
        .eq(index).css("display","block");
      },
  	})
	}
	
})
