alert("WELCOME TO SIDAF CREATIVES!");


const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function() {

    navigation.classList.toggle("active");

});


const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");

    });

});

const contactForm = document.getElementById("contactForm");

const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formResponse.textContent =
        "Thank you, " + name + "! Your form is ready.";

    contactForm.reset();

});