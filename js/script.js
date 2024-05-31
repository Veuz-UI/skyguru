// cursor pointer


// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
// });

// document.addEventListener('click', e => {
//     cursor.classList.add("expand");
//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500);
// });


const cursor = document.querySelector("#cursor");
const cursorPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursor.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursor.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursor.style.backgroundColor = "white";
      cursor.style.mixBlendMode = "difference";
      cursor.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursor.style.backgroundColor = "unset";
    cursor.style.mixBlendMode = "unset";
    cursor.style.setProperty("--size", "50px");
  });
});



// nav


// Search box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// Sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
}

// Sidebar submenu open close js code
let dropdownArrows = document.querySelectorAll(".dropdown-arrow");

dropdownArrows.forEach(arrow => {
  arrow.onclick = function() {
    let subMenu = arrow.nextElementSibling;
    let allSubMenus = document.querySelectorAll(".dropdown-menu");
    let allArrows = document.querySelectorAll(".dropdown-arrow");

    allSubMenus.forEach(menu => {
      if (menu !== subMenu) {
        menu.style.display = "none";
      }
    });

    allArrows.forEach(arrowItem => {
      if (arrowItem !== arrow) {
        arrowItem.style.transform = "rotate(0deg)";
      }
    });

    subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
    arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
  }
});










// explore slider

$('.explore-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    prevArrow:'<span class="pre_arrow"><i class="fa-solid fa-chevron-left"></i></span>',
nextArrow:'<span class="next_arrow"><i class="fa-solid fa-chevron-right"></i></span>',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// logo slider

$('.logo-slide').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  


// testimonial slider

$('.testimonial-slider').slick({
  dots: false,
  infinite: true,
  prevArrow:'<span class="pre_arrow"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa-solid fa-chevron-right"></i></span>',
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// counter

let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    let count = 0

    function CounterUp(){
        count++
        item.innerHTML = count
        if(count == item.dataset.number){
            clearInterval(stop);
        }
    }
    let stop = setInterval(
        function(){
            CounterUp();
        },100/item.dataset.speed
    );
})


