$(document).ready(function(){
	$('body').addClass("background");
	
	$('#introanimate').effect('slide',1000);//slideToggle(1000);
	$('img').show("slide", { direction: "right" }, 1000,function(){
	//$(this).addClass("slideanimate");
	$(this).css("display","block");
	//$(this).removeClass("img-circle");
	$(this).addClass("Pictureanimate");
	$(this).addClass("img-circle");
	$(this).css("float","none");
	});
	$('.detial').accordion();
	$('.educationcontent h2').effect('slide',1000);
	

	
});


