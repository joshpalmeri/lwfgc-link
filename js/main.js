$(document).ready(function() {
	$('.color-trigger').hover(function() {
		var color = '#'+$(this).attr('data-color');
		$('.site-wrap').css('background',color);
	});
});