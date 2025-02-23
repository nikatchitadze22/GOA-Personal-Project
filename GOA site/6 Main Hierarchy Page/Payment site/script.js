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
