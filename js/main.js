$(function () {
  $(".intro_menu").click(function (e) {
    $(".intro_list").css("display", "flex");
    $(".cs_list").css("display", "none");
    $(".information_list").css("display", "none");
    $(".mega__menu").slideToggle();
  });
  $(".cs_menu").click(function (e) {
    $(".cs_list").css("display", "flex");
    $(".intro_list").css("display", "none");
    $(".information_list").css("display", "none");
    $(".mega__menu").slideToggle();
  });
  $(".information_menu").click(function (e) {
    $(".information_list").css("display", "flex");
    $(".cs_list").css("display", "none");
    $(".intro_list").css("display", "none");
    $(".mega__menu").slideToggle();
  });

  $(document).on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;
    // console.log($(document).scrollTop());
    // console.log(wheel);
    // $("body").animate();
    if ($(document).scrollTop() >= $(".nav").height()) {
      $(".nav").css({ backgroundColor: "white", borderBottom: "none", boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.31)" });
      $(".mega__menu").css({ backgroundColor: "white", borderBottom: "none", boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.31)" });
      $(".nav li, .nav a").css("color", "black");
      $(".dropdown").removeClass("flex__box");
      $(".nav__logo").css("backgroundImage", "url(img/logo_color.png)");
      $(".nav__menu-btn").css("backgroundImage", "url(/img/menu_btn-blk.png)");
    } else {
      $(".mega__menu").css({ backgroundColor: "transparent", boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.31)" });
      $(".nav").css({ backgroundColor: "transparent", boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.31)" });
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
      $(".nav__mobile").css({ backgroundColor: "white", boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.31)" });
      $(".nav__logo-mobile").css("backgroundImage", "url(img/logo_color.png)");
      $(".nav__menu-btn").css("backgroundImage", "url(/img/menu_btn-blk.png)");
    } else {
      $(".nav__mobile").css({ backgroundColor: "transparent" });
      $(".nav__logo-mobile").css("backgroundImage", "url(img/logo.png)");
      $(".nav__menu-btn").css("backgroundImage", "url(/img/menu_btn.png)");
    }
  });
});
