$(function() {
  initResponsiveHeader();  

  $(window).on("load", function() {
    initNavbar();
    appendMember();

    setTimeout(function(){ 
      $(".loader-wrapper").fadeOut("slow");
      $('body').removeAttr('style');
     }, 500);
  });

  $(window).on('resize', () => {
    initResponsiveHeader();
    initHeaderScrolled();
  });

  $(window).on('scroll', () => {
    initHeaderScrolled();
  });

  function appendMember() {
    let member = $(".team-wrapper:not('.team-collapse') .team-holder:nth-child(10)").html();

    if ($(window).width() < 768) {
      $(".team-wrapper:not('.team-collapse') .team-holder:nth-child(10)").remove();
      $("<div class='team-holder'>"+ member +"</div>").prependTo(".team-collapse");
    }
  }

  function initNavbar() {
    $('.nav-link[href*="#"], a[href*="#"]').click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      var scroll = $(window).scrollTop();
      var offset =  80;

      $('.nav-item').removeClass('active');
      $(this).parent().addClass('active');

      if($(window).width() < 576 && scroll < 84) {
        offset = 40; 
      } 

      $("html, body").animate({
        scrollTop: $(section).offset().top - offset
      });
    });
  }

  function initHeaderScrolled() {
    var header = $(".custom-header");
    var scroll = $(window).scrollTop();

    if ($(window).width() >= 992 && scroll >= 85) {
      header.addClass("sticky-top");
    } else if ($(window).width() >= 992 && scroll <= 84) {
      header.removeClass("sticky-top");
    }

    if ($(window).width() <= 991) {
      if (scroll <= 84) {
        header.removeClass('sticky-top');
      } else {
        header.addClass('sticky-top');
      }
    }
  }

  function initResponsiveHeader() {
    var header = $(".custom-header");

    if ($(window).width() <= 991) {
      header.addClass('sticky-top');
    } else {
      header.removeClass('sticky-top');
    }
  }
});
