
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("hl-slider");
  if (!slider) return;

  const track = slider.querySelector(".hl-track");
  const slides = slider.querySelectorAll(".hl-slide");
  const prev = slider.querySelector(".hl-prev");
  const next = slider.querySelector(".hl-next");

  let index = 0;
  const total = slides.length;

  const goTo = (n) => {
    index = (n + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  const nextSlide = () => goTo(index + 1);
  const prevSlide = () => goTo(index - 1);

  let timer = setInterval(nextSlide, 6000);

  const pause = () => {
    clearInterval(timer);
    timer = null;
  };

  const resume = () => {
    if (!timer) timer = setInterval(nextSlide, 6000);
  };

  prev.addEventListener("click", () => {
    pause();
    prevSlide();
    resume();
  });

  next.addEventListener("click", () => {
    pause();
    nextSlide();
    resume();
  });

  slider.addEventListener("mouseenter", pause);
  slider.addEventListener("mouseleave", resume);

  goTo(0);
});


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const dropdowns = document.querySelectorAll(".dropdown");

  if (!toggle || !navMenu) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("slide-down");
      navMenu.classList.add("slide-up");
      setTimeout(() => {
        navMenu.classList.remove("active");
      }, 300);
    } else {
      navMenu.classList.add("active");
      navMenu.classList.remove("slide-up");
      navMenu.classList.add("slide-down");
    }
  });

  dropdowns.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024) {
        e.stopPropagation();
        item.classList.toggle("active");
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      navMenu.classList.remove("active", "slide-up", "slide-down");
      toggle.classList.remove("active");
      dropdowns.forEach((item) => item.classList.remove("active"));
    }
  });
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n === undefined) { slideIndex++; }
  else { slideIndex = n; }
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
}

