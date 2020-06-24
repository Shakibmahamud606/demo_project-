$(function(){
	//scroll
	$('a[href^="#"]').click(function(){
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	//tel_link
	var ua = navigator.userAgent;
      if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
        $('.tel').each(function(){
         var strLink = $('.tel_link').text();
         var str = $('.tel').html();
         $(this).html($('<a>').attr('href', 'tel:' + strLink.replace(/-/g, '')).append(str + '</a>'));
        });
      }
	
	//footer_fixed
	var flug = false;
	var footer = $('.footer_fixed');
	footer.css('bottom', '-500px');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			if (flug == false) {
				flug = true;
				footer.stop().animate({'bottom' : '0'}, 200);
			}
		} else {
			if (flug) {
				flug = false;
				footer.stop().animate({'bottom' : '-500px'}, 200); 
			}
		}
	});
	
	//effect
	$('header .ttl1 img').addClass('move');//h1 ttl
	
	setTimeout(function(){//h1 text
		$('header .ttl1 span').addClass('move');
    },250);
	setTimeout(function(){//main visual
		$('header .inner img.pc').addClass('move');
		$('header .inner img.sp').addClass('move');
    },500);
	setTimeout(function(){//main description
		$('header .inner p').addClass('move');
    },750);
	setTimeout(function(){//main catch
		$('header .catch').addClass('move');
    },1500);
	
	//text EF
	$('.efct').css("opacity","0");
	$(window).scroll(function (){
		$(".efctBox").each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop(); //スクロール値
			var windowHeight = $(window).height(); //ウインドウの高さ
			if (scroll > imgPos - windowHeight + windowHeight/5){
				$(this).find('.efct').css("opacity","1" );
				$(this).find('.efct').addClass("ad-efct");
			} else {
				$(this).find('.efct').css("opacity","0" );
				$(this).find('.efct').removeClass("ad-efct");
			}
		});
	});
	
	//img EF
	$('.float').removeClass('move');
	$(window).scroll(function(){
		$(".float").each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > imgPos - windowHeight + windowHeight/5){
				$(this).addClass('move');
			} else {
				$(this).removeClass('move');
			}
		});
	});

	
	
	
});