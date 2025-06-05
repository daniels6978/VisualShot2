// const videoHeader = document.querySelectorAll(".about_us_first");
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
