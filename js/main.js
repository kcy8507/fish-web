// $(function () {
//   $(document).mouseup(function (e) {
//     if ($(e.target).parents(".nav__menu").lenght == 0) {
//       $(". li").removeClass("expand");
//       $(". ul").hide();
//     }
//   });

// 네비바를 스크롤(네비바 높이만큼) 내렸을 때 색이 변함

// $(function () {
//   $(".nav").click(function (e) {
//     // $(".nav").
//     console.log($(e.target));
//   });
// });

// $(function () {
//   $(".nav").click(function (e) {
//     console.log($(e.target));
//     e.preventDefault();
//     $(".dropdown").toggle();
//   });
// });

$(function () {
  $(".dropdown__menu").click(function (e) {
    console.log($(e.target));
    // e.preventDefault();
    $(".dropdown").toggleClass("flex__box");
    $(".nav").css("borderBottom", "1px solid #bcbcbc");
    // $(".nav").css("height", "100%");
  });

  $(document).on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;
    console.log($(document).scrollTop());
    // console.log(wheel);
    // $("body").animate();
    if ($(document).scrollTop() >= $(".nav").height()) {
      $(".nav, .dropdown").css({ backgroundColor: "white", borderBottom: "none" });
      $(".nav li, .nav a").css("color", "black");
      $(".dropdown").removeClass("flex__box");
      $(".nav__logo").css("backgroundImage", "url(img/logo_color.png)");
    } else {
      // $(".nav, .dropdown").css({ backgroundColor: "transparent", borderBottom: "1px solid white" });
      $(".nav, .dropdown").css({ backgroundColor: "transparent" });
      $(".nav li, .nav a").css("color", "white");
      $(".nav__logo").css("backgroundImage", "url(img/logo.png)");
    }
  });

  $(".nav__btn-mobile").click(function (e) {
    console.log($(e.target));
    // e.preventDefault();
    $(".nav__menu-mobile").css("display", "flex");
    $(".mobile_black").css("display", "flex");

    $("html").css("overflow", "hidden");
  });

  $(".close_btn").click(function (e) {
    console.log($(e.target));
    // e.preventDefault();
    $(".nav__menu-mobile").css("display", "none");
    $(".mobile_black").css("display", "none");
    // $(".nav").css("height", "100%");
    $("html").css("overflow", "inherit");
  });

  $(document).on("touchmove", function (e) {
    console.log($(document).scrollTop());

    if ($(document).scrollTop() >= $(".nav__mobile").height()) {
      $(".nav__mobile").css({ backgroundColor: "white" });
      $(".nav__logo-mobile").css("backgroundImage", "url(img/logo_color.png)");
      $(".nav__btn-mobile").css("backgroundImage", "url(img/nav_btn-black.png)");
    } else {
      $(".nav__mobile").css({ backgroundColor: "transparent" });
      $(".nav__logo-mobile").css("backgroundImage", "url(img/logo.png)");
      $(".nav__btn-mobile").css("backgroundImage", "url(img/nav_btn-wht.png)");
    }
  });
});
