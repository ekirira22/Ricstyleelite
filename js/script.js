$(document).ready(function(){
  //for navigation
  $("#home").click(function(){
    //remember to change this when hosting the website
    window.location.replace("index.html")
  });
  $("#about").click(function(){
    //remember to change this when hosting the website
    window.location.replace("about.html")
  });
  $("#services").click(function(){
    //remember to change this when hosting the website
    window.location.replace("services.html")
  });

  // for elevator-wrapper

  $(document).on('click', 'a', function(event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
  (function($) {
      'use strict';

      // Elevator - Scroll back to top utility JS
      // append necessary class
      // should have already contain wrapper on a page.
      // <div class="elevator-wrapper"></div>
      $('.elevator-wrapper').append('<div class="elevator"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>');

      // browser window scroll (in pixels) after which the "back to top" link is shown
      var offset = 300,
          // duration of the top scrolling animation (in ms)
          scroll_top_duration = 700,
          // grab the "back to top" link
          $back_to_top = $('.elevator');

      // hide or show the "back to top" link
      $(window).scroll(function() {
          ($(this).scrollTop() > offset) ? $back_to_top.addClass('elevator-is-visible'): $back_to_top.removeClass('elevator-is-visible');
      });

      // smooth scroll to top
      $back_to_top.on('click', function(event) {
          event.preventDefault();
          $('body,html').animate({
              scrollTop: 0
          }, scroll_top_duration);
      });

  })(jQuery);



  (function($) {

    $.fn.menumaker = function(options) {

        var cssmenu = $(this), settings = $.extend({
          title: "Menu",
          format: "dropdown",
          sticky: false
        }, options);

        return this.each(function() {
          cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) {
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });

          cssmenu.find('li ul').parent().addClass('has-sub');

          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');

          if (settings.sticky === true) cssmenu.css('position', 'fixed');

          resizeFix = function() {
            if ($( window ).width() > 768) {
              cssmenu.find('ul').show();
            }

            if ($(window).width() <= 768) {
              cssmenu.find('ul').hide().removeClass('open');
            }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);

        });
    };
  })(jQuery);

  (function($){
  $(document).ready(function(){

  $(document).ready(function() {
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

    $("#cssmenu").prepend("<div id='menu-line'></div>");

  var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

  $("#cssmenu > ul > li").each(function() {
    if ($(this).hasClass('active')) {
      activeElement = $(this);
      foundActive = true;
    }
  });

  if (foundActive === false) {
    activeElement = $("#cssmenu > ul > li").first();
  }

  defaultWidth = lineWidth = activeElement.width();

  defaultPosition = linePosition = activeElement.position().left;

  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);

  $("#cssmenu > ul > li").hover(function() {
    activeElement = $(this);
    lineWidth = activeElement.width();
    linePosition = activeElement.position().left;
    menuLine.css("width", lineWidth);
    menuLine.css("left", linePosition);
  },
  function() {
    menuLine.css("left", defaultPosition);
    menuLine.css("width", defaultWidth);
  });

  });


  });
  })(jQuery);


});
