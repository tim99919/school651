$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-mnu").slideToggle();
		return false;
	});


	$(".banner-car-wrap").owlCarousel({
		loop:true,
		margin:10,
		center:true,
		items:1,
		autoplay:true,
		autoplayTimeout:5000,
		autoplaySpeed: 1000,
		autoplayHoverPause:true,
	});
	

	$(".news-car-wrap").owlCarousel({
		margin:10,
		items:4,
		nav: true,
		responsive:{
			0:{
        		items:1
        	},
        	576:{
        		items:2
        	},
        	768:{
        		items:3
        	},
        	1024:{
						items:4
					},
				}
			});
	
	$(".events-car-wrap").owlCarousel({
		margin:10,
		items:4,
		nav: true,
		responsive:{
			0:{
        		items:1
        	},
        	576:{
        		items:2
        	},
        	768:{
        		items:3
        	},
        	1024:{
						items:4
					},
				}
			});


	var dropdown = document.querySelectorAll('.dropdown');
	var dropdownArray = Array.prototype.slice.call(dropdown,0);

	dropdownArray.forEach(function(el){
		var button = el.querySelector('a[data-toggle="dropdown"]'),
		menu = el.querySelector('.dd-mnu'),
		arrow = button.querySelector('i.icon-arrow');

		button.onclick = function(event) {
			if(!menu.hasClass('show')) {
				button.classList.add('active');
				menu.classList.add('show');
				menu.classList.remove('hide');
				arrow.classList.add('open');
				arrow.classList.remove('close');
				event.preventDefault();
			}
			else {
				button.classList.remove('active');
				menu.classList.remove('show');
				menu.classList.add('hide');
				arrow.classList.remove('open');
				arrow.classList.add('close');
				event.preventDefault();
			}
		};
	})

	Element.prototype.hasClass = function(className) {
		return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};



	// $(".news").click(function() {
	// 	var news = document.querySelectorAll('.news-car-wrap'),
	// 	events = document.querySelectorAll('.events-car-wrap');
	// 	if(news.hasClass('show')) {
			
	// 	}
	// 	querySelector('news').classList.add('active');
	// 	event.preventDefault();


	// });


	$(".contacts-but").click(function() {
		$("html, body").animate({
			scrollTop : $(".contacts").offset().top
		}, 1200);		
	});


//клик на новости/мероприятия
	$(".events").click(function(e) {
		$(".news-car-wrap").fadeOut(300); 
		$(".events-car-wrap").fadeIn(300);
		$(".news").removeClass("active");
		$(".events").addClass("active");
		preventDefault();
	});

	$(".news").click(function(e) {
		$(".events-car-wrap").fadeOut(300); 
		$(".news-car-wrap").fadeIn(300);
		$(".events").removeClass("active");
		$(".news").addClass("active");
		preventDefault();
	});

});
