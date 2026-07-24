/* ==========================================
   Muhammad Uzair Portfolio
   main.js
========================================== */

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});


// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

});


// =============================
// Close Mobile Menu
// =============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



// =============================
// Sticky Navbar
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background="rgba(11,17,32,.95)";

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

    }

    else{

        header.style.background="rgba(11,17,32,.75)";

        header.style.boxShadow="none";

    }

});



// =============================
// Scroll Progress
// =============================

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});



// =============================
// Back To Top
// =============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.pageYOffset>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}



// =============================
// Active Navigation
// =============================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



// =============================
// Reveal Animation
// =============================

const revealElements=document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.experience-card,.achievement-card,.stat-card"

);

const reveal=()=>{

revealElements.forEach(el=>{

const windowHeight=window.innerHeight;

const top=el.getBoundingClientRect().top;

if(top<windowHeight-100){

el.classList.add("fade-up");

}

});

}

window.addEventListener("scroll",reveal);

reveal();



// =============================
// Counter Animation
// =============================

const counters=document.querySelectorAll(".stat-card h2");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=Number(counter.innerText.replace(/\D/g,""));

const count=Number(counter.getAttribute("data-count"))||0;

const increment=Math.ceil(target/speed);

if(count<target){

counter.setAttribute("data-count",count+increment);

counter.innerText=(count+increment)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});



// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});



// =============================
// Current Year
// =============================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}



// =============================
// Disable Right Click (Optional)
// =============================

// document.addEventListener("contextmenu",e=>e.preventDefault());



// =============================
// Console Welcome
// =============================

console.log("%cWelcome to Muhammad Uzair Portfolio","color:#3B82F6;font-size:18px;font-weight:bold;");