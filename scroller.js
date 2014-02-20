$(document).ready(function(){
	$('body').stellar();
	$('.nav span').hover(function(){
		$(this).css('background-color', '#E36F26');
	},
	function(){
		$(this).css('background-color', '#E48025');
	}
	);
	$('.portfolio_wrapper').bjqs({
        'height' : 500,
        'width' : 700,
        'usecaptions' : true,
        'responsive' : true
    });
});