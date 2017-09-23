$('.bigNav img').hide();
$('#ham').hide();
$('#close').hide();
$('.slideInMenu').hide();
$('.megaMenu').hide();
$('.womenDynamic').hide();
//FIXED HEADER
$(window).scroll(function(){
    if ($(window).scrollTop() >= 600) {
       $('.bigNav').addClass('animated fadeInDown').addClass('fixed-header');
    	$('.bigNav img').show();
    if($(window).width() < 481)
		{    
		$('.bigNav ul').hide();	
		$('.bigNav').addClass('mobileNav');
		$('#ham').show();
		}
    }
    else {
       $('.bigNav').removeClass('fixed-header animated fadeInUp');
    	$('.bigNav img').hide();
 	if($(window).width() < 481)
		{    
		$('.bigNav ul').show();	
		$('#ham').hide();
		$('.bigNav').removeClass('mobileNav');
		}
    }
});
$('#ham').click(function(){
$('.slideInMenu').removeClass('animated slideOutLeft')
$('.slideInMenu').addClass('animated slideInLeft');
$('.slideInMenu').show();
$('#ham').hide();
$('#close').show();
});
$('#close').click(function(){
$('.slideInMenu').removeClass('animated slideInLeft')
$('.slideInMenu').addClass('animated slideOutLeft');
$('#ham').show();
$('#close').hide();
});
$('.shop').mouseenter(function(){
$('.megaMenu').show();
});
$('.bigNav').mouseleave(function(){
$('.megaMenu').hide();
$('.womenDynamic').hide();
$('.menDynamic').hide();
});
$('#megaMenuMen').hover(function(){
$('.womenDynamic').hide();
$('.menDynamic').show();
});
$('#megaMenuWomen').hover(function(){
$('.menDynamic').hide();
$('.womenDynamic').show();
});
//SMOOTH SCROLL
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// Mobile Menu
