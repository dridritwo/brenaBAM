let body = document.querySelector("body");
var BAM = document.createElement("div");
var newContent = document.createTextNode('BAM!');
BAM.appendChild(newContent);
BAM.classList.add("BAM");

body.addEventListener("mousedown", e => {
  // et lui donne un peu de contenu
  // ajoute le nœud texte au nouveau div créé
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
  var container = document.getElementById('container');
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
  var randomColor2 = "#"+((1<<24)*Math.random()|0).toString(16); 
  BAM.style.setProperty('background-color', randomColor);
  BAM.style.setProperty('color', randomColor2);
  document.body.insertBefore(BAM, container);

//   BAM.style.left = `${e.clientX.toString()}px`;
//   BAM.style.top = `${(e.clientY.toString() - 20 )}px`;
  setTimeout(() => {  
    //   BAM.remove();
   }, 100);
});

body.addEventListener("mouseup", e => {
    BAM.remove();
})