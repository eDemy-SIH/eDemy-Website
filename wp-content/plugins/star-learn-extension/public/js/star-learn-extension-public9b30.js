(function( $ ) {
	'use strict';

	/*====================
	PRELOADER JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	$( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
            
            // Star Banner Slider
	        var bannerSlider = $(".star-banner-slider");
	        if (bannerSlider.length) {
	            bannerSlider.owlCarousel({
                    items: 1,
                    loop: true,
                    nav: true,
                    navText: [
                        "<i class='fa fa-arrow-left'></i>", 
                        "<i class='fa fa-arrow-right'></i>"],
                    dots: false,
                    autoplay: true,
                    autoplayHoverPause: true,
                    smartSpeed: 500,
                    animateOut: "slideOutLeft",
                    animateIn: "slideInRight",
                    responsive: {
                        0: {
                            nav: false
                        },
                        768: {
                            nav: false
                        },
                        992: {
						    nav: true
						},
						1200: {
							nav: true
						}
                    },
                });
	        }

			// LP Course Categories Slider
			$('.star-lp-course-category-area .lp-course-category-slider-new').owlCarousel({
				nav: true,
				margin: 0,
				loop: true,
				dots: false,
				autoplay: true,
				autoplayHoverPause: true,
				smartSpeed: 500,
				animateOut: "slideOutLeft",
                animateIn: "slideInRight",
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					375: {
						items: 2
					},
					768: {
						items: 3
					},
					992: {
						items: 4
					},
					1200: {
						items: 5
					}
				}
			});

			// LP Course Tags Slider
			$('.star-lp-course-tag-area .lp-course-tag-slider-new').owlCarousel({
				nav: true,
				margin: 0,
				loop: true,
				dots: false,
				autoplay: true,
				autoplayHoverPause: true,
				smartSpeed: 500,
				animateOut: "slideOutLeft",
                animateIn: "slideInRight",
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					375: {
						items: 2
					},
					768: {
						items: 3
					},
					992: {
						items: 4
					},
					1200: {
						items: 5
					}
				}
			});
            
            // Star Testimonial Slider
			$('.star-testimonial-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 30,
				autoplay: true,
				autoplayHoverPause: true,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {
						items: 2
					}
				}
			});

			// Star Team Slider
			$('.star-team-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 30,
				autoplay: true,
				autoplayHoverPause: true,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					768: {
						items: 2
					},
					992: {
						items: 4
					}
				}
			});

			// Star Blog Slider
			$('.star-blog-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 30,
				autoplay: true,
				autoplayHoverPause: true,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			});

			// Data Aos
		    AOS.init({
		        once: true,
		        disable: function() {
		            var maxWidth = 991;
		            return window.innerWidth < maxWidth;
		        }
		    });

	    });
    });

    if (!$( "body" ).hasClass('elementor-page')) {  

	    // Data Aos
	    AOS.init({
	        once: true,
	        disable: function() {
	            var maxWidth = 991;
	            return window.innerWidth < maxWidth;
	        }
	    });

    }

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.star-navbar-area').addClass("is-sticky");
		}
		else{
			$('.star-navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.star-go-top-area .go-top').addClass('active');
			if (scrolled < 300) $('.star-go-top-area .go-top').removeClass('active');
		});  
		// Click Event
		$('.star-go-top-area .go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  50);
		});
	});

	/*====================
	Comment Form JS
	======================*/
	$('.comment-respond textarea').attr('placeholder', 'Comment');
	$('.comment-respond input[type="text"]').attr('placeholder', 'Full Name');
	$('.comment-respond input[type="email"]').attr('placeholder', 'Email Address');
	$('.comment-respond input[type="url"]').attr('placeholder', 'Website URL');

	/*====================
	LTR & RTL JS
	======================*/
	$('.ltr-rtl-button .star-primary-btn.ltr').on('click', function() {
		$("html").attr('dir', 'ltr');
	});

	$('.ltr-rtl-button .star-primary-btn.rtl').on('click', function() {
		$("html").attr('dir', 'rtl');
	});

})( jQuery );
