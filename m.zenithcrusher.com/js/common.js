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
	      $(this).css("background","url(http://static.zenithcrusher.com/d/file/images/contact/mapicon1.png)");
	      $(this).parents().next(".info").css("display","block");
	      $(".office-info").css("width","211px");
	      $(".mapIco").mouseout(function(){
	          $(this).css("background","url(http://static.zenithcrusher.com/d/file/images/contact/mapicon.png)");
	          $(".info").css("display","none");
	          $(".office-info").css("width","auto");
	      });
	  });
})
		