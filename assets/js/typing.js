/* ==========================================
   TYPING ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector(".typing")) {

        new Typed(".typing", {

            strings: [

                "BS Data Science Undergraduate",

                "AI Enthusiast",

                "Full Stack Web Developer",

                "Machine Learning Explorer",

                "Python Developer",

                "Data Analytics Learner",

                "Creative Problem Solver",

                "Future Data Scientist"

            ],

            typeSpeed: 60,

            backSpeed: 35,

            backDelay: 1800,

            startDelay: 500,

            smartBackspace: true,

            loop: true,

            showCursor: true,

            cursorChar: "|"

        });

    }

});