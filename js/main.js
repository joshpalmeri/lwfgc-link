$(document).ready(function() {
	$('.color-trigger, img.main-logo').hover(function() {
		var color = '#'+$(this).attr('data-color');
		$('.site-wrap').css('background',color);
		var imgClass = '.'+$(this).attr('data-shape');
		$('.lg-img-wrapper img').addClass('hide-accessible');
		$(imgClass).removeClass('hide-accessible');
	});
});