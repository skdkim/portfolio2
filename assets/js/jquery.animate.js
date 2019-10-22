let fade = null;
let fadeOut = null;

$(function() {
  $('.skills').children().mouseover(function(){
    $(this.children[1]).removeClass('hidden flipOutX').addClass('flipInX');
  });

  $('.skills').children().mouseleave(function(){
    $(this.children[1]).removeClass('flipInX').addClass('flipOutX');
  });
});

$(function() {
  // $('a[href*="#"]:not([href="#"])').click(function() {
  //   // console.log(this);
  //
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000);
  //       return false;
  //     }
  //   }
  // });
});

$(function() {
  const actions = $('.actions');
  const list = $('.actions').children();
  const buttons = $('.actions').children().children();
  const one = $('.one');
  const two = $('.two');
  let topOfActions = actions.offset().top;

  const actionsMarginBottom = parseInt($('.actions').css('marginBottom'));
  const actionsHeight = parseInt($('.actions').css('height'));
  const selfHeight = parseInt($('#oneone').css('marginTop'));
  const newMargin = actionsMarginBottom + actionsHeight + selfHeight * 2;

  $('a[href*="#"]:not([href="#"])').click(function() {
    console.log(this);
    if ($(window).scrollTop() > topOfActions && screen.width > 675){
      buttons.addClass('minify');
      // document.body.style.paddingTop = actions.children().height() + 'px';

      list.css('padding', 0);
      two.children().appendTo(one);
      $('.one').addClass('stick');

    } else {
      if (two.children().length === 0){
        $('.one li:gt(-4)').appendTo(two);
      }
      // document.body.style.paddingTop = 0;

      list.css('padding-right', 1 + "em");

      buttons.removeClass('minify');
      $('.one').removeClass('stick');
    }

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 130){
      $('.btt').removeClass('hidden fadeOutUp').addClass('fadeInUp');
    } else {
      $('.btt').addClass('fadeOutUp');
    }
    clearTimeout(fadeOut);

    fadeOut = setTimeout(() => {
      if ($('.btt').hasClass('fadeInUp')){
        $('.btt').removeClass('fadeInUp').addClass('fadeOutUp');
      }
    }, 1500);

    if ($(window).scrollTop() > topOfActions && screen.width > 675){
      buttons.addClass('minify');

      $('#two').css('marginTop', newMargin + "px");

      list.css('padding', 0);
      two.children().appendTo(one);
      $('.one').addClass('stick');

    } else {
      if (two.children().length === 0){
        $('.one li:gt(-4)').appendTo(two);
      }
      $('#two').css('marginTop', '64px');

      list.css('padding-right', 1 + "em");

      buttons.removeClass('minify');
      $('.one').removeClass('stick');
    }
  });
});
