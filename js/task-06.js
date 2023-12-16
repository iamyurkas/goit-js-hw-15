const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
    const length = validationInput.value.length;
    const dataLength = validationInput.getAttribute("data-length");

    if (length == dataLength) {
        console.log("valid");
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        console.log("invalid");
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});