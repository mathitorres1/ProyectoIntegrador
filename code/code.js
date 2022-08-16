document
  .getElementById("registerPopupButton")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup-content").style.animation = "fade-in 1s ease forwards";
  });

document.querySelector(".close-popup").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
