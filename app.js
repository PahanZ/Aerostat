let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

let nextSlide = () => {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
let slideInterval = setInterval(nextSlide, 3000);



let deadline = 'July 31 2025 20:39:00 GMT+03:00'; 
let getTime = (endtime) => { 
let t = Date.parse(endtime)-Date.parse(new Date()); 
let seconds = Math.floor((t / 1000) % 60); 
let minutes = Math.floor((t / 1000 / 60) % 60); 
let hours = Math.floor(t / (1000 * 60 * 60) % 24); 
let days = Math.floor(t / (1000 * 60 * 60 * 24)); 
return { 
'total': t, 
'days': days, 
'hours': hours, 
'minutes': minutes, 
'seconds': seconds 
}; 
} 
let initialTime = (id, endtime) => { 
let clock = document.getElementById(id); 
let daysSpan = clock.querySelector('.days'); 
let hoursSpan = clock.querySelector('.hours'); 
let minutesSpan = clock.querySelector('.minutes'); 
let secondsSpan = clock.querySelector('.seconds'); 
let timeinterval = () => { 
let t = getTime(endtime); 
daysSpan.innerHTML = t.days; 
hoursSpan.innerHTML = ('0' + t.hours).slice(-2); 
minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); 
secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); 
if(t.total <=0 ){ 
clearInterval(interval) 
} 
} 
let interval = setInterval(timeinterval, 1000); 
} 
initialTime('clockdiv', deadline);