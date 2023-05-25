var menu = document.querySelector('#menu');
var bg = document.querySelector('#bg');

menu.addEventListener('click', function(){
    bg.style.transform = 'scale(.8)';
    bg.style.borderRadius = '10px';
    bg.style.boxShadow = '0 150px 45px -100px rgba(0,0,0,0.2)';
})
window.onload = function() {
    const tl = gsap.timeline();

    tl.from("#name", { duration: 1, y: 50, opacity: 0, ease: "power3.out" })
      .from("#intro", { duration: 1, x: -50, opacity: 0, ease: "power3.out" }, "-=0.5")
      .from("#description", { duration: 1, x: 50, opacity: 0, ease: "power3.out" }, "-=0.5")
      .from("#playbtn", { duration: 1, scale: 0, opacity: 0, ease: "elastic.out(1, 0.3)" }, "-=0.5");
};
