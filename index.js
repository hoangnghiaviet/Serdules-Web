setInterval(() => $('.carousel').carousel('next'), 5000)


lottie.loadAnimation({
    container: document.getElementById('slide2_ani'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json/slide2.json' // the path to the animation json
});

lottie.loadAnimation({
    container: document.getElementById('slide3_ani'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json/slide3.json' // the path to the animation json
});