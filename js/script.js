//scrollspy===========================

$(document).ready(function () {
  var x = $("a.nav-link");

  $(document).scroll(function () {
    x.each(function () {
      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition = $(document).scrollTop();

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});

// progressbr
$(".bar-nivel").each(function () {
  var valorLargura = $(this).data("nivel");
  var valorNivel = $(this).html(
    "<span class='valor-nivel'>" + valorLargura + "</span>"
  );
  $(this).animate({
    width: valorLargura,
  });
});

//scroll_btn

const toTop = document.querySelector(".to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

$(".to_top").click(function () {
  $(".to_top").css({
    color: "#346dc4",
    transform: " rotate(-40deg)",
  });
});

// nav-icon-----------------

$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });
});

// navigation toggle

$("#nav-icon").click(function () {
  $(".menu_item").slideToggle(300);
});

$("li a").click(function () {
  $(".menu_item").hide(100);
});
