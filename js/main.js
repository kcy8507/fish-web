$(function () {
  $(".dropdown__menu").click(function (e) {
    // console.log($(e.target));
    // e.preventDefault();
    $(".dropdown").toggleClass("flex__box");
    $(".nav").css("borderBottom", "1px solid #bcbcbc");
    // $(".nav").css("height", "100%");
  });

  $(document).on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;
    // console.log($(document).scrollTop());
    // console.log(wheel);
    // $("body").animate();
    if ($(document).scrollTop() >= $(".nav").height()) {
      $(".nav").css({ backgroundColor: "white", borderBottom: "none" });
      $(".nav li, .nav a").css("color", "black");
      $(".dropdown").removeClass("flex__box");
      $(".nav__logo").css("backgroundImage", "url(img/logo_color.png)");
      $(".nav__menu-btn").css("backgroundImage", "url(/img/menu_btn-blk.png)");
    } else {
      // $(".nav").css({ backgroundColor: "transparent", borderBottom: "1px solid white" });
      $(".nav").css({ backgroundColor: "transparent" });
      $(".nav li, .nav a").css("color", "white");
      $(".nav__logo").css("backgroundImage", "url(img/logo.png)");
      $(".nav__menu-btn").css("backgroundImage", "url(/img/menu_btn.png)");
    }
  });

  $(".nav__menu-btn").click(function (e) {
    $(".side__nav").css("display", "block");
    $("html").css("overflow", "hidden");
  });

  $(".nav__menu-cls").click(function (e) {
    $(".side__nav").css("display", "none");
    $("html").css("overflow", "inherit");
  });

  $(document).on("touchmove", function (e) {
    if ($(document).scrollTop() >= $(".nav__mobile").height()) {
      $(".nav__mobile").css({ backgroundColor: "white" });
      $(".nav__logo-mobile").css("backgroundImage", "url(img/logo_color.png)");
      $(".nav__menu-btn").css("backgroundImage", "url(/img/menu_btn-blk.png)");
    } else {
      $(".nav__mobile").css({ backgroundColor: "transparent" });
      $(".nav__logo-mobile").css("backgroundImage", "url(img/logo.png)");
      $(".nav__menu-btn").css("backgroundImage", "url(/img/menu_btn.png)");
    }
  });
});
