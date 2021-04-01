(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// code for menu

		$(".p2header-left span").click(function (){
			$(".menu").animate({
				"left":"0%"
			});
			$("body").addClass("overflow")
		});

		$(".menu-left-heading span").click(function (){
			$(".menu").animate({
				"left":"-100%"
			});
			$("body").removeClass("overflow")
		})



		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);