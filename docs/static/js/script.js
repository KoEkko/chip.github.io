var ww = $(window).width();

$(window).scroll(function(){
	//判断置顶
    var sTop=$(window).scrollTop();
	 // var ttop = $(".ny-banner").offset().top + $(".ny-banner").height();
    if(sTop>0){
//    	$('a.backTop').css({"display":"block"});
		$('body').addClass('on-fixed');
    }else{
//      $('a.backTop').hide();
		$('body').removeClass('on-fixed');
    }
	
	// if(sTop > ttop){
	// 	$(".twoMenuDiv").addClass("onFixed");
	// }else{
	// 	$(".twoMenuDiv").removeClass("onFixed");
	// }
});
  
//判断置顶
$('a.backTop').click(function(){
	$('html, body').animate({'scrollTop': 0}, 600);
})
  
$(function(){

	//特效
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};
	$("header .rightDiv .menu>ul>li li a").click(function(){
		$("header .mbtn").click();
	})
	
	$("header .rightDiv .ssDiv").click(function(){
		$("#myModal").show();
	})
	$(".modal-header .close").click(function(){
		$("#myModal").hide();
	})
	
})

if(ww<768){
	$(".footerDiv .hd .listDiv>span").click(function(){
		$(this).next(".aDiv").slideToggle();
	})
}

// 右下角悬浮窗

$(".xfBrBox .formBtn").click(function(){

	$(this).siblings(".formBox").fadeIn();

	$(this).siblings(".yy").fadeIn();

})

$(".xfBrBox .formBox .closeBtn").click(function(){

	$(this).parents(".xfBrBox .formBox").fadeOut();

	$(".xfBrBox .yy").fadeOut();

})

// 切换表单
$(".serviceDiv3 .qiehuan .xxBox p").click(function(){
	$(this).addClass("on").siblings("p").removeClass("on");
	var xuhao = $(this).index();
	$(".serviceDiv3 .formBox form").eq(xuhao).show().siblings("form").hide();
})


// 点击弹出图片
$(".soluP1 .clickB").on("click","li",function(){
	var zhi =$(this).find("img").attr("src");
	$(".imgShow .imgBox").attr("src",zhi);
	$(".imgShow").css('display',"flex");
})
$(".imgShow .yinying").click(function(){
	$(".imgShow").css('display',"none");
})
$(".imgShow .close").click(function(){
	$(".imgShow").css('display',"none");
})


$(".mileDiv .leftDiv .listDiv ul li").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
	$(".mileDiv .imgListDiv .imgDiv").removeClass("on").eq($(this).index()).addClass("on");
})