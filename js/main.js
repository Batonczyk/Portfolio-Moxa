$(document).ready(function () {
  $('.header-burger').click(function () {
    $('.header__menu').toggleClass('open-menu');
    $('.bg-photo').toggleClass('bg-photo--active');
  });

  $('.close').click(function(){
    $('.header__menu').removeClass('open-menu');
    $('.bg-photo').removeClass('bg-photo--active');
  });

});