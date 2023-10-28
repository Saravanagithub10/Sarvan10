const video = document.getElementById("bg-video");

video.play();

window.addEventListener("blur", () => {
  video.pause();
});

window.addEventListener("focus", () => {
  video.play();
});
