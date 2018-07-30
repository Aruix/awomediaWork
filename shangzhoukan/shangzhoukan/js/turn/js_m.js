var b_width = $("body")[0].offsetWidth,
	b_height = b_width/115*150,
	nowpage = 1,
	maxWidth = 876,
	fenye = "single";
$(".book").css({
	"width":b_width,
	"height":b_height,
	"margin-left":-b_width/2,
	"margin-top":-b_height/2
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
	duration: 500,
	display:fenye,
	turnCorners:"tl,tr",
	when: {
		turning: function(e, page, view) {
			/*
			var picpage1 = $(".p"+view[0]).find(".bookpic");
			$(".now").val(view[0]);
			if((picpage1.attr("src")=="")||(picpage1.attr("src")==undefined)){
				if((picpage1.attr("data-url")=="")||(picpage1.attr("data-url")==undefined)){
					console.log(view[0])
					var imgsrc = picarr[view[0]-1];
					picpage1.attr("src",imgsrc);
				}else{
					picpage1.attr("src",picpage1.attr("data-url"));
				}
				picpage1.css("display","block");
			}*/
		},
		turned: function(e, page, view){
			console.log(view[0])
			var picpage1 = $(".p"+view[0]).find(".bookpic");
			$(".now").val(view[0]);
			if((picpage1.attr("src")=="")||(picpage1.attr("src")==undefined)){
				picpage1.attr("src",picpage1.attr("data-url"));
				picpage1.css("display","block");
			}
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
		},2000)
		$(this).css({
			"background-image":"url(img/turn/pause.svg)"
		})
		autoflag = 1;
	}else{
		clearInterval(autoplay);
		autoflag = 0;
		$(this).css({
			"background-image":"url(img/turn/play.svg)"
		})
	}
})
$("#flipbook").click(function(){
	$(".prev").fadeToggle();
	$(".next").fadeToggle();
	$(".setting").fadeToggle();
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
	books.turn("page",books.turn("pages"));
})