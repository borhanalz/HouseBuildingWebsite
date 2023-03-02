$(document).ready(function(){

function NavHovers(element,hoverer){

  $(element).hover(function() {
      $(hoverer).toggle();
  });

}
NavHovers("#apartment_element","#apartment_sub");
NavHovers("#home_element","#submenu_homes");
NavHovers("#vill_element","#villa_sub");
NavHovers("#residental_element","#residental_sub");
NavHovers("#lux_element","#lux_sub");


function SignHover() {
  let sign_element=$("#sign_element");
  $(sign_element).hover(function () {
      $(".sign_container").stop();
      $(".sign_container").toggle("hidden");
  });
}
SignHover();


});