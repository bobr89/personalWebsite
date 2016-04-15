/*$(document).ready(function(){

			$("#banner").css({"height":$(window).height() + "px"});

			var flag = false;
			var scroll;

			$(window).scroll(function(){
				scroll = $(window).scrollTop();

					if(scroll > 40){
						if(!flag){
						$("#logo").css({"margin-top": "-27px", "width": "150px", "height": "150px"});

						$("header").css({"background-color": "#3C3C3C"});
						flag = true;
						}
					}

					else {
						if(flag){
						$("#logo").css({"margin-top": "70px", "width": "849px", "height": "849px"});

						$("header").css({"background-color": "transparent"});
						flag = false;
					}
				}
			});

			/*Menu*/

			$('.icon-menu').click(function(){
				$('.menu').animate({
					left: "0px"
				}, 200);

				$('body').animate({
					left: "285px"
				}, 200);
			});

			$('.icon-close').click(function(){
				$('.menu').animate({
					left: "-285px"
				}, 200);

				$('body').animate({
					left: "0px"
				}, 200);
			});

			/*var scroll1; 
			$(window).scroll(function(){
				scroll1 = $(window).scrollTop();

					if(scroll1 > 450){
						$(".about").animate({'opacity':'1'});
					}
			});

			var scroll2;
			$(window).scroll(function(){
				scroll2 = $(window).scrollTop();

					if(scroll2 > 1050){
						$(".content2").animate({'opacity':'1'});
					}
			});

			var scroll3;
			$(window).scroll(function(){
				scroll3 = $(window).scrollTop();

					if(scroll3 > 1850){
						$(".content3").animate({'opacity':'1'});
					}
			});

			var flag1 = false;
			var scroll4;
			$(window).scroll(function(){
				scroll4 = $(window).scrollTop();

					if(scroll > 3250){
						if(!flag1){
						$("header").css({"background-color": "transparent"});
						flag1 = true;
						}
					}
					else {
						if(flag1){
						$("header").css({"background-color": "#3C3C3C"});
						flag1 = false;
					}
				}
			});

		});*/