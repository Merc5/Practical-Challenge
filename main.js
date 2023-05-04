function checkEligibility() {
    var age = parseInt(document.getElementById("age").value);
    var membership = document.getElementById("membership").checked;
    var result = document.getElementById("result");

    if (age >= 45) {
        result.innerHTML = "Congratulations! You are eligible for a senior discount.";
    } else if (age >= 23 && membership) {
        result.innerHTML = "Congratulations! You are eligible for a member discount.";
    } else {
        result.innerHTML = "Sorry, you are not eligible for a discount.";
    }
}
