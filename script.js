function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let device = document.getElementById("device").value;
    let issue = document.getElementById("issue").value;
    let status = document.getElementById("form-status");

    if (name === "" || email === "" || phone === "" || issue === "") {
        status.innerText = "Please fill out your name, email, phone number, and issue.";
        return;
    }

    let params = {
        name: name,
        email: email,
        phone: phone,
        device: device,
        issue: issue
    };

    emailjs.send(
        "service_okmacd9",
        "template_knbo2fi",
        params
    ).then(function () {
        status.innerText = "Your issue was submitted successfully. Please text or email screenshots/videos if needed.";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("device").value = "";
        document.getElementById("issue").value = "";

    }).catch(function (error) {
        status.innerText = "Something went wrong: " + error.text;
        console.log("EmailJS Error:", error);
    });
}


let serviceButtons = document.querySelectorAll(".service-title");

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let description = this.nextElementSibling;
        description.classList.toggle("active");
    });
});


let bottomDropdownButtons = document.querySelectorAll(".bottom-dropdown-title");

bottomDropdownButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let description = this.nextElementSibling;
        description.classList.toggle("active");
    });
});