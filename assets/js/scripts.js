$(document).ready(function(){
$('body').scrollspy({ target: '.nav-item' });
	// Header sticky menu
	$(window).scroll(function(){
		if( $(window).scrollTop() > 400 ){
			$(".navbar-sec").addClass('sticky');
		}else{
			$(".navbar-sec").removeClass('sticky');
		}
	});



	$(".screen-carousel").owlCarousel({
		items: 5,
		margin: 30,
		center: true,
		loop: true,
		autoplay: true,
		smartSpeed: 800,
		responsiveClass: true,
		responsive:{
			0:{
				items: 2,
			},
			568:{
				items: 3
			},
			992:{
				items: 5
			}
		}
	});



});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1700);
});

new WOW().init();