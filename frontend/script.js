
let form = document.getElementById("registrationForm");

let successMessage = document.getElementById("successMessage");


// Hide Success Message When User Starts Typing

form.addEventListener("input", function() {

    successMessage.textContent = "";

});


// Form Submission

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let email = document.getElementById("email").value;

    let location = document.getElementById("location").value;


    // Full Name Validation

    if (name.trim() === "") {

        alert("Please enter your full name");

        return;

    }


    // Phone Number Validation

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit phone number");

        return;

    }


    // Email Validation

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address");

        return;

    }


    // Location Validation

    if (location.trim() === "") {

        alert("Please enter your location");

        return;

    }


    // Display Entered Details in Console

    console.log("Name:", name);

    console.log("Phone:", phone);

    console.log("Email:", email);

    console.log("Location:", location);


    // Display Success Message

    successMessage.textContent = "Registration Successful!";

    form.reset();

});
