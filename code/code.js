document
  .getElementById("registerPopupButton")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
  });

document.querySelector(".close-popup").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

$('.newsSlick').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 844,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
}) 