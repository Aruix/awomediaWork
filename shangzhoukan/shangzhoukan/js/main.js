$(function(){
	var u = navigator.userAgent; 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
	if(isiOS){
// .news-content p,.news-content div{
		$('.news-content p').css({
			'-webkit-text-size-adjust':"none",
			"font-size":"26px"
		})
		$('.news-content div').css({
			'-webkit-text-size-adjust':"none",
			"font-size":"26px"
		})
		console.log(123);
	}
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
             $('.totop').fadeIn();
        }else{
             $('.totop').fadeOut();
        }
	})
	$(".totop").click(function(){
		$("html,body").animate({scrollTop:0},500)
	})
	$(".wb").click(function(){
		$(".erm-wx").fadeOut();
		$(".erm-wb").fadeToggle();
	})
	$(".wx").click(function(){
		$(".erm-wb").fadeOut();
		$(".erm-wx").fadeToggle();
	})
})
window.onload = function(){
	if($("#indexBnaner").length>0){
		var mySwiper = new Swiper('#indexBnaner .swiper-container',{
			// loop: true,
			pagination:".pagination",
			grabCursor: true,
			paginationClickable: true,
			onSlideChangeEnd: function(swiper){
				var index = swiper.activeIndex;
				$('#indexBnaner .title').children('.txt').css("display","none").eq(index).css("display","block")
			}
		}); 
		$('#indexBnaner .pre').on('click', function(e){
			e.preventDefault()
			mySwiper.swipePrev()
		})
		$('#indexBnaner .next').on('click', function(e){
		    e.preventDefault()
		    mySwiper.swipeNext()
		})
	};
	function onFooter(){
		if($("body").height()<$(window).height()){
			$(".footer").css({
				"width":"100%",
				"position":"fixed",
				"bottom":0
			})
		}
	}
	onFooter();
	window.onresize = function(){
		onFooter();
	}
}
