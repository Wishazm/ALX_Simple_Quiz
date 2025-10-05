function checkAnswer() {
  // Step 1: Define the correct answer
  const correctAnswer = "4";

  // Step 2: Get the user’s selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Step 3: Access the feedback element
  const feedback = document.getElementById("feedback");

  // Step 4: Check if the user selected an option
  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 5: Compare answers and display feedback
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Step 6: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
