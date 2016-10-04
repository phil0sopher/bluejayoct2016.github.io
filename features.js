if ($(window).width() < 768) {
   var feature1 = 2300;
   var feature2 = 1000;
   var feature3 = 2700;
}
else {
   var feature1 = 1900;
   var feature2 = 1400;
   var feature3 = 2400;
}


$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window - feature1;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
        }); 
    
    });
});

$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window - feature2;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
        }); 
    
    });
});

$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock3').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window - feature3;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
        }); 
    
    });
});

<!-- video player -->

$(window).keypress(function(e) {
  var video = document.getElementById("vid");
  if (e.which == 32) {
    if (video.paused == true)
      video.play();
    else
      video.pause();
  }
});