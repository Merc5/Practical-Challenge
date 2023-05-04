function checkEligibility() {
	// Retrieve values from input fields
	const age = parseInt(document.getElementById("age").value);
	const membership = document.getElementById("membership").checked;

	// Check eligibility based on age and membership
	if (age >= 65) {
		document.getElementById("output").innerHTML = "You are eligible for a Senior Discount!";
	} else if (age >= 18 && membership) {
		document.getElementById("output").innerHTML = "You are eligible for a Member Discount!";
	} else {
		document.getElementById("output").innerHTML = "Sorry, you are not eligible for a discount.";
	}
}
