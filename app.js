let body = document.querySelector("body");
var BAM = document.querySelector(".BAM");
var BAMLink = document.querySelector(".BAM-link");
var hero = document.querySelector(".hero");
var container = document.querySelector(".container");
var video = document.querySelector(".video");
var videoContainer = document.querySelector(".video-container");

let logoColors = setInterval(bam, 500, 'Parameter 1', 'Parameter 2');

function bam() {
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
  var randomColor2 = "#"+((1<<24)*Math.random()|0).toString(16); 
  container.style.setProperty('background-color', randomColor);
  BAM.style.setProperty('color', randomColor2);
  BAMLink.style.setProperty('color', randomColor2);
}

hero.addEventListener("click", () => {
  clearInterval(logoColors);
  videoContainer.style.setProperty('z-index', 10)
  container.classList.add("container-grow")
  video.classList.add("video-grow")
})