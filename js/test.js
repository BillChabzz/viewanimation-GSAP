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

/*functional programming for toggle listener
take a function with two parameters
e.g since element and duration are frequent items
e.g function toggleAnimation(id,frequency)
funtion should hold a tween object and return the values
tween object should have fallback
*/