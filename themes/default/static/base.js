$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).load(function(){
	$('dt').click(function(){
		$(this).next().slideToggle();
	});
});