let body = document.querySelector("body");
var BAM = document.querySelector(".BAM");
var hero = document.querySelector(".hero");
var container = document.querySelector(".container");

setInterval(bam, 500, 'Parameter 1', 'Parameter 2');

function bam() {
  console.log("ok")
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
  var randomColor2 = "#"+((1<<24)*Math.random()|0).toString(16); 
  container.style.setProperty('background-color', randomColor);
  BAM.style.setProperty('color', randomColor2);
}