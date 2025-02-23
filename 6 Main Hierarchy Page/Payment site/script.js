document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.getElementsByTagName("input")[3];

    submitButton.addEventListener("click", function (event) {
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let card = document.getElementById("card").value;

        if (isNaN(card)) {
            alert("Must be numbers in card field");
            event.preventDefault();
        }

        if (name === "" || surname === "" || card.length < 16) {
            alert("All fields are required!");
            event.preventDefault();
        } else {
            // Save information to localStorage
            localStorage.setItem("name", name);
            localStorage.setItem("gmail", surname);
            localStorage.setItem("card", card);

            alert("Form submitted successfully!\nyou have successfully become student in\nGOAL ORIENTED ACADEMY!");
        }        
    });
});