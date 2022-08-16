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
  slidesToScroll: 3,
  dots: true
})