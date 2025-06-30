// const videoHeader = document.querySelectorAll(".about_us_first");
const navBtn = document.querySelector(".burger_btn");
const navMobile = document.querySelector(".nav_mobile");
const burgerBars = document.querySelector(".burger_bars");
const allNavItems = document.querySelectorAll(".item_mobile");
const openVideoButton = document.querySelectorAll("#play_icon");
const videoPlayer = document.querySelectorAll("#video_container");
const myVideo = document.querySelectorAll("#myVideo");
const closeVideo = document.querySelectorAll("#closeVideo");

// window.onload = () => {
//   videoHeader.play();
// };
// videoHeader.forEach((video) => {
//   video.muted = true;
//   video.loop = true;
//   video.autoplay = true;
//   video.play();
// });

const handleNav = () => {
  navMobile.classList.toggle("nav_mobile--active");
  burgerBars.classList.toggle("burger_bars--active");

  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("clicked");
      navMobile.classList.remove("nav_mobile--active");
      burgerBars.classList.remove("burger_bars--active");
    });
  });
};

navBtn.addEventListener("click", handleNav);

openVideoButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    videoPlayer[i].style.display = "flex";
    myVideo[i].play();
  });
});

closeVideo.forEach((button, i) => {
  button.addEventListener("click", () => {
    videoPlayer[i].style.display = "none";
    myVideo[i].pause();
    myVideo[i].currentTime = 0;
  });
});
