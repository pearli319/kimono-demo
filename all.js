const s = skrollr.init();

$(window).scroll(function(evt){
    if ($(window).scrollTop()>0) {
      $(".navbar").addClass("bg-dark");
      $(".navbar").addClass("navbar-dark");
    }
    else {
        $(".navbar-toggler-icon").css("background-image", 'url("data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"%3e%3cpath stroke="rgba%28255, 255, 255, 0.5%29" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/%3e%3c/svg%3e")')
        $(".navbar").removeClass("bg-dark");
        $(".navbar").removeClass("navbar-dark");
    }
  });