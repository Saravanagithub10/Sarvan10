// script.js
document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("register-form");
  const signInForm = document.getElementById("signin-form");
  const profileUsername = document.getElementById("profile-username");
  const profileEmail = document.getElementById("profile-email");
  const editProfileButton = document.getElementById("edit-profile");
  const deleteProfileButton = document.getElementById("delete-profile");

  // Registration form validation and submission
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Display the user's profile after successful registration
    profileUsername.textContent = username;
    profileEmail.textContent = email;
    registrationForm.reset();
  });

  // Sign-in form validation and submission
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const signInEmail = document.getElementById("signin-email").value;
    const signInPassword = document.getElementById("signin-password").value;

    // Display the user's profile after successful sign-in
    profileUsername.textContent = "User"; // Replace with actual username
    profileEmail.textContent = signInEmail;
    signInForm.reset();
  });

  // Edit profile button click event
  editProfileButton.addEventListener("click", () => {});

  // Delete profile button click event
  deleteProfileButton.addEventListener("click", () => {});
});
