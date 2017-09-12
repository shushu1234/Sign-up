/*
*Author:Inory
*Date:2017-3-30
*last modefied by:Inory
*last modefied time:2017-3-30
*/

$(document).ready(function($) {
	/*$('.overflow').on('mouseenter',function (ev) {
		$(this).css('boxShadow', '10px 10px 40px #fff');
	});
	$('.overflow').on('mouseleave',function (ev) {
		$(this).css('boxShadow', 'none');
	});*/
	$('.overflow').css('left', parseInt($(window).width())/2-parseInt($('.overflow').css('width'))/2+'px');
	
	$('.joinus').on('mouseover', function(ev) {
		$(this).css('boxShadow', '1px 1px 25px #fff');
	});
	$('.joinus').on('mouseout', function(ev) {
		$(this).css('boxShadow', 'none');
	});
	$('.joinus').on('click', function(ev) {
		location.href='index.jsp';
	});
	$(window).on('resize',function(){
		$('.overflow').css('left', parseInt($(window).width())/2-parseInt($('.overflow').css('width'))/2+'px');
	});
});