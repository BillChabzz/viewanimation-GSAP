$(document).ready(function(){
var toggle = $(".open"),
    untoggle = $(".close"),
    land = $("#land"),
    about = $("#about");
    
    toggle.click(function(){
       TweenMax.from(about, 1 ,{
           x : 1000,
           autoAlpha: 0
           
       });
        
    });
   
});

