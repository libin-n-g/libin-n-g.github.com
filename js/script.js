$(document).ready(function(){
	$('#introanimate').effect('slide',1000);//slideToggle(1000);
	$('img').show("slide", { direction: "right" }, 1000,function(){
	$(this).css("display","block");
	$(this).css("float","none");
	});
	$('.detial').accordion();
	$('.educationcontent h2').effect('slide',1000);
	

	
});


