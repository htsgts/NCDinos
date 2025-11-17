$(function () {
  const $slides = $(".stadium-slide");
  const $dots = $(".stadium-dots button");
  if ($slides.length === 0) return;

  let slideIndex = 0;
  let timer;

  function showSlide(n) {
    slideIndex = n % $slides.length;
    $slides.removeClass("active").eq(slideIndex).addClass("active");
    $dots.removeClass("active").eq(slideIndex).addClass("active");
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  // 초기 상태
  showSlide(0);

  // 자동 슬라이드 (4초 간격)
  timer = setInterval(nextSlide, 4000);

  // 점(dot) 클릭 시 이동
  $dots.on("click", function () {
    clearInterval(timer); // 타이머 초기화
    slideIndex = $dots.index(this);
    showSlide(slideIndex);
    timer = setInterval(nextSlide, 4000); // 다시 시작
  });
});
