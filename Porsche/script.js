// IMAGE SLIDE
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // cambia ogni 4 secondi
}

// OPACITY AND ZOOM
// Get the modal
var modal = document.getElementById("myModal");
var ply = document.getElementById('player');
const corpo = document.getElementById("corpo");


// Get the image and insert it inside the modal - use its "alt" text as a caption and music control
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  // ferma musica
  ply.pause();
  ply.currentTime = 0;
}


// button on click description audio
var ply2 = document.getElementById('player2');
var ply3 = document.getElementById('player3');
var ply4 = document.getElementById('player4');

var button1 = document.getElementById("intro");
var button2 = document.getElementById("modello");
var button3 = document.getElementById("curiosita");

var isPlaying2 = 0;
var isPlaying3 = 0;
var isPlaying4 = 0;

button1.onclick = function(){
  ply.pause();
  ply3.pause();
  ply4.pause();
  ply.currentTime = 0;
  ply3.currentTime = 0;
  ply4.currentTime = 0;
  
  // fa partire o ferma la musica
  if(isPlaying2 === 1){	// se stava andando la ferma
	ply2.pause();
	isPlaying2 = 0;
  }else{ 	// altrimenti fa partire
	ply2.currentTime = 0;
	ply2.play();
	isPlaying2 = 1;
  }
}
button2.onclick = function(){
  ply.pause();
  ply2.pause();
  ply4.pause();
  ply.currentTime = 0;
  ply2.currentTime = 0;
  ply4.currentTime = 0;
  
  // fa partire o ferma la musica
  if(isPlaying3 == 1){	// se stava andando la ferma
	ply3.pause();
	isPlaying3 = 0;
  }else{ 	// altrimenti fa partire
	ply3.currentTime = 0;
	ply3.play();
	isPlaying3 = 1;
  }
}
button3.onclick = function(){
  ply.pause();
  ply2.pause();
  ply3.pause();
  ply.currentTime = 0;
  ply2.currentTime = 0;
  ply3.currentTime = 0;
  
  // fa partire o ferma la musica
  if(isPlaying4 == 1){	// se stava andando la ferma
	ply4.pause();
	isPlaying4 = 0;
  }else{ 	// altrimenti fa partire
	ply4.currentTime = 0;
	ply4.play();
	isPlaying4 = 1;
  }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  
  // musica che riparte
  ply.play();
}