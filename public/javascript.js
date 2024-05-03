$(document).ready(function(){
    $(".fancybox").fancybox({
       openEffect: "none",
       closeEffect: "none"
       });
       
       $(".zoom").hover(function(){
       
       $(this).addClass('transition');
       }, function(){
       
       $(this).removeClass('transition');
       });
       });


$('#myCarousel').carousel({
          interval: false
      });

      //scroll slides on swipe for touch enabled devices

      $("#myCarousel").on("touchstart", function(event){

          var yClick = event.originalEvent.touches[0].pageY;
          $(this).one("touchmove", function(event){

              var yMove = event.originalEvent.touches[0].pageY;
              if( Math.floor(yClick - yMove) > 1 ){
                  $(".carousel").carousel('next');
              }
              else if( Math.floor(yClick - yMove) < -1 ){
                  $(".carousel").carousel('prev');
              }
          });
          $(".carousel").on("touchend", function(){
              $(this).off("touchmove");
          });
      });