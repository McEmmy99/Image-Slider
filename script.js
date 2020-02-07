const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter=0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide () {
	container.animate([{opacity:'0.1'}, {opacity:'1.0'}],
		{duration:2000, fill:'forwards'});
	if (counter === 8) {
		counter = -1;
	}

	counter++;

	let slider = "url('img/slider-" + counter + ".jpg')";  

	container.style.backgroundImage = slider;
}

function prevSlide () {
	container.animate([{opacity:'0.1'}, {opacity:'1.0'}],
		{duration:2000, fill:'forwards'});
	if (counter === 0) {
		counter = 9;
	}

	counter--;

	let slider = "url('img/slider-" + counter + ".jpg')";  

	container.style.backgroundImage = slider;
}
