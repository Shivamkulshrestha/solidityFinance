$(".photo_list").slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // centerMode: true,
  centerMode: true,
  centerPadding: "60px 60px 60px 60px",
  // centerMargin:"20px",
  // adaptiveHeight: false,
  prevArrow:
    '<button class="slide-arrow1 prev-arrow"> <i class="fa-solid fa-angle-left"></i> </button>',
  nextArrow:
    '<button class="slide-arrow2 next-arrow"> <i class="fa-solid fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        // centerPadding: "60px 60px 60px 60px",
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ///////////////////////////////////////////////////////
const slider = $(".slick1");
slider.on("wheel", function (e) {
  e.preventDefault();
  if (e.originalEvent.deltaX < 0) {
    $(this).slick("slickNext");
  } else {
    $(this).slick("slickPrev");
  }
});
// ////////////////////////////////////////////////////////////
$(".slick1").slick({
  rows: 2,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 3,
  dots: true,
  horizontal: true,
  horizontalSwiping: true,
  // autoplay: true,
  // autoplaySpeed: 200,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

//////////////////////////////
$(document).ready(function () {
  $("#menu-btn").click(function () {
    $("body").toggleClass("is_open");

    if ($("body").hasClass("is_open")) {
      $("#menu-btn").hide();
      // $(".nav-item").width(310);
      $(".filter-brand").hide();
      $(".audit-list-main h6").css("fontSize", "18px");
      $(".search-input").width(320);
      $(".search-input").css("margin-left", "-10px");
    } else {
      // $(".nav-item").width(320);
      // $("#menu-btn").show();
      // $(".filter-brand").show();
      // $(".search-input").width(525);
      // $(".audit-list-main h6").css("fontSize", "22px");
      // $(".search-input").css("margin-right", "10px");
      // $(".search-input").css("margin-left", "46px", "important");
    }
  });
  $("#menu-bt").click(function () {
    $("body").toggleClass("is_open");
    {
      $(".nav-item").width(300);
      $("#menu-btn").show();
      $(".filter-brand").show();
      $(".search-input").width(535);
      $(".audit-list-main h6").css("fontSize", "22px");
      $(".search-input").css("margin-left", "46px", "important");
    }
  });
});
// /////////////////////////

////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".side-bar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);
        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    });
  });
});
//////////////////////////////////////////////

const html = document.querySelector("html");
const btn = document.querySelector(".btn-click");
btn.addEventListener("click", () => {
  if (!html.classList.contains("body-test")) {
    html.classList.add("body-test");
  } else {
    html.classList.remove("body-test");
  }
});

const body = document.querySelector("body");
const viewbtn = document.querySelector(".viewbtn");
const auditchart = document.querySelector(".modalfixed");
const contenthead = document.querySelector(".audit-content1");
const auditbutton = document.querySelector(".audit-button");
viewbtn.addEventListener("click", () => {
  if (!body.classList.contains("body-test")) {
    body.classList.add("body-test");
    auditchart.classList.add("modaltablepopup");
    contenthead.style.display = "none";
    auditbutton.style.display = "block";
    viewbtn.style.display = "none";
    // console.log("hejfehf", auditbutton);
    // console.log("5555", contenthead);
  } else {
    // body.classList.remove("body-test");
    // contenthead.style.display = "block";
    // auditchart.classList.remove("modaltablepopup");
    // auditbutton.style.display = "none";
  }
});

auditbutton.addEventListener("click", () => {
  body.classList.remove("body-test");
  contenthead.style.display = "block";
  auditbutton.style.display = "none";
  auditchart.classList.remove("modaltablepopup");
  viewbtn.style.display = "block";
});
