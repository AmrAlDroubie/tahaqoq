const our_branches_swiper = new Swiper(".our-branches-swiper", {
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
    },
});

new WOW().init();

window.onload = function() {
    document.querySelector(".loading").classList.remove("active");
    document.querySelector("body").style.overflow = "auto";
};