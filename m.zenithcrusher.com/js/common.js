$(function(){

		$(".swiper-container").swiper({
			loop: true,
			autoplay: 3000,
			pagination: '.swiper-pagination',
			paginationClickable: true
		});
		$( ".menu-icon" ).on( "click", function() {
				
				$( ".menu-nav").stop(true).slideToggle();
		  	
		});

});

 $(document).ready(function(){
	  $(".mapIco").mouseover(function(){
	      	$(this).css("background","url(/images/contact/mapicon1.png)");
	      	var p=$(this).parents().next(".info").text();
	     	$.toast(p, "text");
	      	$(".mapIco").mouseout(function(){
	          	$(this).css("background","url(/images/contact/mapicon.png)");
	          
	      	});
	  });
});

$(document).ready(function(){ 
	$('.titlebar-select').change(function(){ 
	 
	var p=$(this).children('option:selected').val(); 
	window.location.href=p; 
	}) 
});
		