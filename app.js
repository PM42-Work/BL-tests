const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const oneT = intro.querySelector('span') 
	  
//end section
const section = document.querySelector('.section');
const end = section.querySelector('h1');

//scrollmagic
const controller = new ScrollMagic.Controller();


//scenes
let scene = new ScrollMagic.Scene({
	duration: 1000, 
	triggerElement: intro,
	triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//text
let scrollAn = TweenMax.fromTo(oneT, 3, {opacity:1},{opacity:0})
const textAnim= TweenMax.fromTo(text, 1, {opacity:0, scale:0.5}, {opacity:1, scale:1} )
let scene2 = new ScrollMagic.Scene({
	duration:1000,
	triggerElement: intro,
	offset:1700,
	triggerHook:0
})
.addIndicators()
.setTween(textAnim)
.addTo(controller);

//Video Animation

let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;


scene.on('update', e => {
	scrollpos=e.scrollPos/70;
});

setInterval(() => {
	delay += (scrollpos - delay) * accelAmount;
	console.log(scrollpos, delay);
	
	video.currentTime = delay
}, 40);
