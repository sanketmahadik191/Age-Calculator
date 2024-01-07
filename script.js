function calculateAge() {
    let userInput = document.getElementById("date").value;
    let result = document.getElementById("result");

    if (userInput) {
        let birthDate = new Date(userInput);
        let today = new Date();

        // calculate diff. in days
        let ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

        //calculate all values
        let years = Math.floor(ageInDays / 365);
        let months = Math.floor((ageInDays % 365) / 30);
        let days = Math.floor(ageInDays % 365 % 30);

        // to avoid selecting future dates
        if (days < 1) {
            result.innerHTML = "Please enter a valid date.";
            return;
        }

        // result display
        result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
    } else {
        // error message
        result.innerHTML = "Please enter a valid date.";
    }
}