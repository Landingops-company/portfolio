$(function(){
	$(window).scroll(function(){
		if( $(window).scrollTop() > 0){
			$('#header').addClass('scroll');
		}else{
			$('#header').removeClass('scroll');
		}
	});

	$("#header .sm_bx").append($("#header .menu_bx .menu_bx_inner").clone());
	
	$("#header .menu_btn").click(function(){
		$(this).toggleClass("on");
		$("header .sm_bx").stop().fadeToggle("300");
		
		$("#header .h_top").stop().fadeToggle("300");
		$("#header").toggleClass("mOn");
		
		if($(this).hasClass("on")) {
			$("html").css("overflow-y", "hidden");
		}else {
			setTimeout(function(){
				$("html").css("overflow-y", "auto");
			},100);
			
			setTimeout(function(){
				$("#header.type1 .sm_bx .dep1").removeClass("sOn");
				$("#header.type1 .sm_bx_new .dep2_wrap").stop().slideUp(300);
			},300);
		}
		
		if($("#header.type4").length > 0) {
			mMenu();
		}

		if($("#header.type3").length > 0) {
			mMenuT();
		}
	});
	
	$("#header .menu_bx .dep1_wrap").hover (function(){
		if($(window).width() > 1024){
			$("#header .h_btm").addClass("pcOn");
		}
	}, function(){
		if($(window).width() > 1024){
			$("#header .h_btm").removeClass("pcOn");
		}
	});
	
	/*$("#header.type1 .menu_bx .dep1").hover (function(){
		if($(window).width() > 1024) {
			$(this).children(".dep2_wrap").stop().slideDown(200);
		}
	}, function(){
		if($(window).width() > 1024) {
			$("#header.type1 .menu_bx .dep2_wrap").stop().slideUp(200);
		}
	});*/
	
	$("#header.type1 .sm_bx .dep1 > a").click(function(){
		if($(window).width() <= 1024) {
			if($(this).parent(".dep1").hasClass("a_none") == false) {
				$("#header.type1 .sm_bx .dep1").removeClass("sOn");
				$(this).parent(".dep1").addClass("sOn");
				
				$("#header.type1 .sm_bx .dep2_wrap").stop().slideUp(300);
				$(this).siblings(".dep2_wrap").stop().slideDown(300);

				return false
			}
		}
	});
	
	$("#header .menu_bx .dep1").hover(function(){
		if($(window).width() > 1024){
			$(this).children(".dep2_wrap").stop().slideDown(300);
			if($(this).hasClass("a_none") == false) {
				$("#header .bg_bx").stop().fadeIn(300);
			}
		}
	}, function(){
		if($(window).width() > 1024){
			$("#header .menu_bx .dep2_wrap").stop().slideUp(300);
			$("#header .bg_bx").stop().fadeOut(300);
		}
	});
	
	
	/* 상담신청 팝업 */
	
	var thisSm;
	
	/*$(".contact_btn_kakao").click(function(){
		thisSm = $(this).parents(".sm_bx").length;
		$("html").css("overflow-y", "hidden");
		$("#contact_pop").stop().fadeIn(300);
		
		$("#contact_pop .tab_bx li").removeClass("on");
		$("#contact_pop .tab_bx li").eq(0).hide();
		$("#contact_pop .tab_bx li").eq(1).addClass("on");

		$("#contact_pop .con_bx .con_w").removeClass("on");
		$("#contact_pop .con_bx .con_w").eq(1).addClass("on");
	});*/
	$(".contact_btn").click(function(e){
		e.preventDefault();
		thisSm = $(this).parents(".sm_bx").length;
		$("html").css("overflow-y", "hidden");
		$("#contact_pop").stop().fadeIn(300);
	});
	$("#contact_pop .close_btn").click(function(){
		$("#contact_pop").stop().fadeOut(300);
		if(thisSm == 0) {
			setTimeout(function(){
				$("html").css("overflow-y", "auto");
			},100);
		}
	});

	$("#contact_pop .tab_bx li").click(function(){
		var thisIdx = $(this).index();
		$("#contact_pop .tab_bx li").removeClass("on");
		$(this).addClass("on");

		$("#contact_pop .con_bx .con_w").removeClass("on");
		$("#contact_pop .con_bx .con_w").eq(thisIdx).addClass("on");
	});
	
	$('#l_quick .top_btn').click(function(){
		$('body,html').animate({'scrollTop':0});
	});
	
	
	/* 오른쪽 퀵 */
	$('#quick_bx .top_btn').click(function(){
		$('body,html').animate({'scrollTop':0});
	});
	
	$("#quick_bx .f_btn").click(function(){
		$("#quick_bx").toggleClass("on");
		if($("#quick_bx").hasClass("on")) {
			$("#quick_bx").css("z-index", "12");
		}else {
			setTimeout(function(){
				$("#quick_bx").css("z-index", "1");
			},300);
		}
	});
	$(".quick_btn").click(function(){
		$("#quick_bx").addClass("on");
		$("#quick_bx").css("z-index", "12");
	});
	
	
//	$(".sm_bx .dep1 > a").click(function(){
//		if($(window).width() > 1024) {
//			return false;
//		}
//	});
})