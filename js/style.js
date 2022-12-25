
(function($){
	'use strict';

//code start


$('span i').on('click', function(){
	$('.main-section-2'). fadeIn ();
});


$('.item-3 i').on ('click',function(){
	$('.section-2'). fadeOut ();
	$(this).hide();
});


$('.fa-chevron-left').on('click',function(){
	$('.read-our-section-blog-6').show();
});


$('.fa-chevron-right').on('click',function(){
	$('.read-our-section-blog-7').show();
	$('.read-our-section-blog-7'). hide();

});


$('span i').on('click', function(){
	$('.hader-section-2'). fadeIn ();
});










}) (jQuery);