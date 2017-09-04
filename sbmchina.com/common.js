
$(function(){
    //
    $('.icon-toggle').on('click',function(e) {
         e.preventDefault();
         e.stopPropagation();
         $('.sidebar').stop(true).toggleClass('sidebar-show');

    })
    $('.left-arrow-icon').on('click', function(e) {
         e.preventDefault();
         e.stopPropagation();
         $('.sidebar').stop(true).removeClass('sidebar-show');

    })
    $('.sidebar').on('click', function(e) {
        e.stopPropagation();
    }); 
});     