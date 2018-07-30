$(function(){
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
			loop: true,
			pagination:".pagination",
			grabCursor: true,
    		paginationClickable: true
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
}
