$(function(){
	certifySwiper = new Swiper('#certify .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	//loopedSlides: 5,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	pagination: '.swiper-pagination',
	paginationClickable :true,
	onProgress: function(swiper, progress) {
		for (i = 0; i < swiper.slides.length; i++) {
			var slide = swiper.slides.eq(i);
			var slideProgress = swiper.slides[i].progress;
			modify = 1;
			if (Math.abs(slideProgress) > 1) {
				modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
			}
			translate = slideProgress * modify * 260 + 'px';
			scale = 1 - Math.abs(slideProgress) / 5;
			zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
			slide.transform('translateX(' + translate + ') scale(' + scale + ')');
			slide.css('zIndex', zIndex);
			slide.css('opacity', 1);
			if (Math.abs(slideProgress) > 3) {
				slide.css('opacity', 0);
			}
		}
	},
	onSetTransition: function(swiper, transition) {
		for (var i = 0; i < swiper.slides.length; i++) {
			var slide = swiper.slides.eq(i)
			slide.transition(transition);
		}

	},
	//处理分页器bug
	onSlideChangeStart: function(swiper) {
		if (swiper.activeIndex == 4) {
			swiper.bullets.eq(9).addClass('swiper-pagination-bullet-active');
			console.log(swiper.bullets.length);
		}
	}
});
})
