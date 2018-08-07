//比例760:500
var b_height = $("body").height()-80,
	b_width = b_height/500*760,
	nowpage = 1,
	maxWidth = 876,
	fenye = "double";
	
	
$(".book").css({
	"width":b_width,
	"height":b_height,
	"margin-left":-b_width/2,
	"margin-top":-b_height/2+17
})
$("#flipbook .own-size").css({
	"width":b_width/2-10,
	"height":b_height-20
})
$("#flipbook .fm").css({
	"width":b_width/2-10,
	"height":b_height-20
})
var books = $("#flipbook");
books.turn({
	width: b_width,
	height: b_height,
	autoCenter: true,
	gradients: true,
	duration: 1000,
	display:fenye,
	turnCorners:"tl,tr",
	when: {
		turning: function(e, page, view) {
			var picpage1 = $(".p"+view[0]).find(".bookpic"),
				picpage2 = $(".p"+view[1]).find(".bookpic");
			if(picpage1.attr("data-url")!==""){
				picpage1.attr("src",picpage1.attr("data-url"));
				picpage1.attr("data-url","");
				picpage1.css("display","block");
			}
			if(picpage2.attr("data-url")!==""){
				picpage2.attr("src",picpage2.attr("data-url"));
				picpage2.attr("data-url","");
				picpage2.css("display","block");
			}
			nowpage = page;
			var book = $(this),
				currentPage = book.turn('page'),
				pages = book.turn('pages');
				
			var book = $(this),
				currentPage = book.turn('page'),
				pages = book.turn('pages');
			
			if(view[0]==0){
				$(".now").val("1");
			}else if(view[1]==0){
				$(".now").val(book.turn('pages'));
			}else{
				$(".now").val(view[0]+"-"+view[1]);
			}
			if (currentPage>3 && currentPage<pages-3) {
			
				if (page==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (page==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			} else if (page>3 && page<pages-3) {
				if (currentPage==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (currentPage==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			}
			
			if (page>=2)
				$('#flipbook .p2').addClass('fixed');
			else
				$('#flipbook .p2').removeClass('fixed');

			if (page<book.turn('pages'))
				$('#flipbook .p_la').addClass('fixed');
			else
				$('#flipbook .p_la').removeClass('fixed');
		}
	}
});
$(".zong").html(books.turn("pages"));
$(".next").click(function(){
	books.turn("next")
})
$(".prev").click(function(){
	books.turn("previous")
})

$(".nextpage").click(function(){
	books.turn("next")
})
$(".prevpage").click(function(){
	books.turn("previous")
})

var autoplay,autoflag = 0;
$(".play").click(function(){
	if(autoflag == 0){
		books.turn("next");
		autoplay = setInterval(function(){
			if(nowpage == books.turn("pages")){
				books.turn("page", 1);
			}else{
				books.turn("next");
			}
		},2000);
		$(this).addClass("ac");
		autoflag = 1;
	}else{
		clearInterval(autoplay);
		autoflag = 0;
		$(this).removeClass("ac");
	}
})
$(".menu").on("click",function(e){
	$(this).children(".menu-src").css("display","block");
})
$(".menu-src .bg").on("click",function(e){
	if(e.originalEvent.target.className=="bg"){
		$(this).parent(".menu-src").css("display","none");
		e.stopPropagation()//jquery防止事件冒泡
	}
})
$(".menu .srcs").click(function(e){
	if(e.originalEvent.target.className=="srcs"){
		var page = $(this).attr("data-page");
		books.turn("page", page);
		e.stopPropagation()//jquery防止事件冒泡
	}
})
$(".seticon.view").click(function(){
	$(".pics").css("display","block");
})
$(".imgmun").click(function(){
	var page = $(this).attr("data-page");
	books.turn("page",page);
	$(this).parents(".pics").css("display","none");
})
$(".pics").click(function(){
	$(this).css("display","none");
})
$(".seticon.screen").click(function(){
	$(".full-k").fullScreen();
	$(this).toggleClass("exit")
	$("body>div").css({
		"background-image":"url(img/turn/bg.jpg)"
	})
})
$(".togo").click(function () {
	var page = $(".now").val();
	books.turn("page",page);
})
$(".ones").click(function(){
	books.turn("page",1);
})
$(".lsats").click(function(){
	var num = books.turn("pages");
	var picpage1 = $(".p"+num).find(".bookpic");
	console.log(num);
	picpage1.attr("src",picpage1.attr("data-url"));
	books.turn("page",books.turn("pages"));
})