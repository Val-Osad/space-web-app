(function () {
    const error = document.querySelectorAll(".error");
    const userName = document.querySelector("#login__username-input");
    const password = document.querySelector("#login__password-input");
    const submitBtn = document.querySelector("#submit-btn");

    function validate() {
        if(userName.value !== "Admin") {
            error.innerHTML = "Try Admin for username";
        } if (password.value !== "12345") {
            error.innerHTML = "Try 12345 for password";
        } else {
            error.innerHTML = "Good job!";
        }
    }

    validate(); // не працює
})();