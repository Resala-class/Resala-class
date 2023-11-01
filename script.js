const userDataForm = document.getElementById("userDataForm");
const thanksMessage = document.getElementById("thanksMessage");

// Check if user data is already saved in local storage
if (localStorage.getItem("name") && localStorage.getItem("phone")) {
    const name = localStorage.getItem("name");
    const phone = localStorage.getItem("phone");
    showThanksMessage(name, phone);
}

// Handle form submission
userDataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // Save user data to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);

    showThanksMessage(name, phone);
});

function showThanksMessage(name, phone) {
    userDataForm.style.display = "none";
    thanksMessage.textContent = `Thank you, ${name}! Your phone number (${phone}) has been saved.`;
}
