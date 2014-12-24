(function ($) {$(document).ready(function() {  



/***************************************************************
* Toggles *
****************************************************************/

$(".zenith_toggle_accordion_container").each( function () {
	if($(this).attr('data-id') === 'closed') {
		$(this).accordion({ header: '.toggle_box_title_accordion', collapsible: true, active: false, heightStyle: 'content', autoHeight: false  });
	} else {
		$(this).accordion({ header: '.toggle_box_title_accordion', collapsible: true, heightStyle: 'content', autoHeight: false });
	}
});

$(".toggle_box").each( function () {
	if($(this).attr('data-id') === 'closed') {
		$(this).accordion({ header: '.toggle_box_title', collapsible: true, active: false, heightStyle: 'content'  });
	} else {
		$(this).accordion({ header: '.toggle_box_title', collapsible: true, heightStyle: 'content'});
	}
});


$(".flexslider").flexslider({
		
		
	});


function zenith_go_top_scroll() { 

    var pageScroll = false;
    var $element = $('#go_top_scroll');

    $element.click(function(e) {
        $('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
        e.preventDefault();
    });

    $(window).scroll(function() {
        pageScroll = true;
    });

    setInterval(function() {
        if( pageScroll ) {
            pageScroll = false;

            if( $(window).scrollTop() > 300 ) {
                $element.fadeIn('fast');
            } else {
                $element.fadeOut('fast');
            }
        }
    }, 250);    
}

zenith_go_top_scroll();


$(".drop").mouseover(function(){
		if (!$(this).siblings().children().is(':animated')){
			$(this).children("ul").slideDown();
		}
		
		
	}).mouseleave(function() {
        $(this).children("ul").slideUp();
    });
/****************************************************************/
}); })(jQuery);
// Do not delete above lines