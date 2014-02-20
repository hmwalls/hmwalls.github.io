$(document).ready(function(){
	$('body').stellar();
	$('.nav span').hover(function(){
		$(this).css('background-color', '#E36F26');
	},
	function(){
		$(this).css('background-color', '#E48025');
	}
	);
});