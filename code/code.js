window.onload = init();

function init(){
  newsDate();
}

document
  .getElementById("registerPopupButton")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup-content").style.animation = "fade-in 1s ease forwards";
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

function randomDateJuly(){
  let date = "Aug ";
  let num;
  num = Math.floor(Math.random()*10+1);
  date += num;
  return date;
}

function newsDate(){
  let news1 = document.getElementById("slick-icons-text1");
  let news2 = document.getElementById("slick-icons-text2");
  let news3 = document.getElementById("slick-icons-text3");
  let news4 = document.getElementById("slick-icons-text4");
  let news5 = document.getElementById("slick-icons-text5");
  let news6 = document.getElementById("slick-icons-text6");
  news1.textContent = randomDateJuly();
  news2.textContent = randomDateJuly();
  news3.textContent = randomDateJuly();
  news4.textContent = randomDateJuly();
  news5.textContent = randomDateJuly();
  news6.textContent = randomDateJuly();
}

