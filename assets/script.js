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
const image_banner = document.querySelector(".banner-img");
const class_dots = document.querySelector(".dots");
const tag_line = document.querySelector(".tag");
let inprogress = 0;

// Flêche de caroussel //
arrow_right.addEventListener('click', () => {

	image_banner.src = `assets/images/slideshow/${slides[inprogress].image}`
	tag_line.innerHTML = `${slides[inprogress].tagLine}`

	handleCircle()
	// dots.forEach(dot => dot.classList.remove('dot_selected'));
	// dots[inprogress].classList.add('dot_selected');
	if (inprogress >= slides.length - 1) {
		inprogress = 0
	}
	else {
		inprogress++;
	}

});


arrow_left.addEventListener('click', () => {


	image_banner.src = `assets/images/slideshow/${slides[inprogress].image}`
	tag_line.innerHTML = `${slides[inprogress].tagLine}`

	handleCircle()
	// inprogress = inprogress == 0 ? slides.length - 1 : inprogress--;
	if (inprogress == 0) {
		inprogress = slides.length - 1
	}
	else {
		inprogress--;
	}
});

// Dot mobil //

function handleCircle() {
	class_dots.innerHTML = ""
	for (let i = 0; i < slides.length; i++) {
		const circleElt = document.createElement("div")
		circleElt.className = "dot-w"
		if (inprogress == i) {
			circleElt.innerHTML = circle[1]

		} else {
			circleElt.innerHTML = circle[0]
		}

		class_dots.append(circleElt)
	}

}


handleCircle()