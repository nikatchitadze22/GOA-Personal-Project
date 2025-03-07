document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.getElementsByTagName("input")[3];

    submitButton.addEventListener("click", function (event) {
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let card = document.getElementById("card").value;

        if (name === "" || surname === "" || isNaN(card) || card === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else {
            // Save information to localStorage
            localStorage.setItem("name", name);
            localStorage.setItem("surname", surname);
            localStorage.setItem("card", card);

            alert("Form submitted successfully!\nYou have successfully become a student in\nGOAL ORIENTED ACADEMY!");
        }
    });
});

const image = document.getElementById('moon-icon');
const navbar = document.querySelector('.navbar-header-main');

image.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'rgb(12, 12, 12)') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        navbar.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'rgb(12, 12, 12)';
        document.body.style.color = 'white';
        navbar.style.backgroundColor = 'rgb(12, 12, 12)';
    }
});
