
let form = document.getElementById("registrationForm");

let successMessage = document.getElementById("successMessage");

form.addEventListener("input", function() {

    successMessage.textContent = "";

});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let email = document.getElementById("email").value;

    let location = document.getElementById("location").value;

    if (name.trim() === "") {

        alert("Please enter your full name");

        return;

    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit phone number");

        return;

    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address");

        return;

    }

    if (location.trim() === "") {

        alert("Please enter your location");

        return;

    }

    console.log("Name:", name);

    console.log("Phone:", phone);

    console.log("Email:", email);

    console.log("Location:", location);

    successMessage.textContent = "Registration Successful! 😀";

    form.reset();

});
