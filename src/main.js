const navTrigger = $('.nav-trigger');

if (navTrigger) {
  const body = $('body');
  const ACTIVE_CLASS = 'menu-fix_active';

  navTrigger.on('click', function () {
    body.toggleClass(ACTIVE_CLASS);
  });
}

//new
$(document).ready(function (){
  // Delete that line if you don't want the first Div to be displayed by default
  $(".accordion-content div:first").css("display", "block");
  
  // 
  $(".accordion-content h3").click(function () {
    $(this).next().slideToggle(500);
    $(".accordion-content div").not($(this).next()).slideUp(500);
    
    // how to rotate the icon JUST h3>i
    // $("i").css({'transform':'rotate(180deg)'});
    
  });
  
});