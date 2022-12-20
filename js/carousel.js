let currentIndex = 0;
let previousSlideIndex = 0;

let slides = document.getElementsByClassName('slides');

let heroPrev = document.getElementById('heroPrev');
let heroNext = document.getElementById('heroNext');

let heroNav0 = document.getElementById('heroNav0');
let heroNav1 = document.getElementById('heroNav1');
let heroNav2 = document.getElementById('heroNav2');
let heroNav3 = document.getElementById('heroNav3');
let heroNav4 = document.getElementById('heroNav4');
let heroNavBtns = document.getElementsByClassName('hero-radio-button');


document.addEventListener('DOMContentLoaded', startup());


function startup() {
	initEventListeners();
	liveSlide(currentIndex = 0);
}

function initEventListeners() {
	heroPrev.addEventListener('click', function() { nextSlide(-1); });
	heroNext.addEventListener('click', function() { nextSlide(1); });
	heroNav0.addEventListener('click', function() { liveSlide(0); });
	heroNav1.addEventListener('click', function() { liveSlide(1); });
	heroNav2.addEventListener('click', function() { liveSlide(2); });
	heroNav3.addEventListener('click', function() { liveSlide(3); });
	heroNav4.addEventListener('click', function() { liveSlide(4); });
}


function nextSlide(x) {
	previousSlideIndex = currentIndex;
	currentIndex += x;

	if(currentIndex < 0)
		currentIndex = slides.length - 1;
	else if(currentIndex > slides.length -1)
		currentIndex = 0;
	determineSlide();
}


function liveSlide(x) {
	previousSlideIndex = currentIndex;
	currentIndex = x;
	determineSlide();
}


function determineSlide() {
	slides[previousSlideIndex].style.display = 'none';
	heroNavBtns[previousSlideIndex].className = 'hero-radio-button';


	slides[currentIndex].style.display = 'block';
	heroNavBtns[currentIndex].className += ' selected';
}









