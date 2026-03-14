// ==============================
// DYNAMIC FOOTER YEAR
// ==============================

const year = document.getElementById("year");

if(year){
year.textContent = new Date().getFullYear();
}



// ==============================
// MOBILE MENU TOGGLE
// ==============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if(menuToggle){

menuToggle.addEventListener("click", () => {

nav.classList.toggle("show");
menuToggle.classList.toggle("active");

});

}



// ==============================
// CLOSE MENU WHEN LINK CLICKED
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

nav.classList.remove("show");
menuToggle.classList.remove("active");

});

});



// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

const windowHeight = window.innerHeight;

reveals.forEach(section => {

const revealTop = section.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

section.classList.add("active");

}

});

}

window.addEventListener("scroll", revealSections);

revealSections();



// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

if(topBtn){

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}



// ==============================
// ACTIVE NAV LINK ON SCROLL
// ==============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 120){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});



// ==============================
// AVATAR IMAGE MODAL
// ==============================

const avatar = document.querySelector(".avatar img");
const modal = document.getElementById("avatarModal");
const modalImg = document.getElementById("modalAvatar");
const closeModal = document.querySelector(".close");

if(avatar && modal){

avatar.addEventListener("click", () => {

modal.style.display = "flex";
modalImg.src = avatar.src;

});

}

if(closeModal){

closeModal.addEventListener("click", () => {

modal.style.display = "none";

});

}

window.addEventListener("click", (e) => {

if(e.target === modal){

modal.style.display = "none";

}

});