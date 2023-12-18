const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {};

    for (const input of loginForm.elements) {
        if (input.name) {
            if (input.value === "") {
                alert("Please fill all fields.");
                return;
            }
        formData[input.name] = input.value;
    }
    }
    console.log(formData);
    loginForm.reset();
});
