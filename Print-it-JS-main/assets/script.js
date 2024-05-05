const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables //

const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");
const image_banner = document.querySelectorAll(".banner-img");
const class_dots = document.querySelectorAll(".dots");
const tag_line = document.querySelectorAll("p #banner-img"); 
let inprogress = 0; 
	inprogress = (inprogress === 0 ? slides.length - 1 : inprogress - 1 );//faire progresser les images en boucles//

// Boucles //

//for boucle (let i = 0; i < slide.length; i++) {
	//const boucleOne = slide[i];
//

// Modifier image //

image_banner.src()
image_banner.classList.remove()

// Click //

arrow_left.addEventListener('click', () => {
	console.log("ok");
	inprogress = (inprogress === 0 ? slides.length - 1 : inprogress - 1 );

	bannerImg.src = `/Print-it-JS-main/assets/images/slideshow/${slides[inprogress].image}`;
	tagLine.innerHTML = slides[inprogress].tagLine;
	console.log (slides);

	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[inprogress].classList.add('dot_selected');
});
console.log(arrow_left);
arrow_right.addEventListener('click', () => {
	
	inprogress = (inprogress === 0 ? slides.length + 1 : inprogress + 1 );

	bannerImg.src = `./assets/images/slideshow/${slides[inprogress].image}`;
	tagLine.innerHTML = slides[inprogress].tagLine;

	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[inprogress].classList.add('dot_selected');
});

// Conditions //
//function prev() {
//	if (i <= 0 ) i = image_banner {
