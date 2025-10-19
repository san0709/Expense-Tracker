// Get element reference globally
const incomeInput = document.getElementById("incomeAmount");

// Function to run when the button is clicked
function getInputAmount() {
    // Check if the element was successfully found
    if (!incomeInput) {
        console.error("Error: Income input element not found (ID 'amount').");
        return;
    }

    // Get the value
    const incomeInputValue = incomeInput.value;

    // Log the value
    console.log("Income Amount:", incomeInputValue);

    // Clear the input field (Optional, but good UX)
    incomeInput.value = '';
}

// No event listener needed since you're using onclick in the HTML.
// The code is clean and should now work without errors or reloads!