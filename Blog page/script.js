// JavaScript code to handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your login validation logic here
    // For this example, let's just check if both fields are filled
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in both fields");
    } else {
      // You can make an AJAX request or any other action here after successful login
      alert(`Welcome, ${username}!`);
      // Reset the form
      loginForm.reset();
    }
  });

  // Back button action
  const backButton = document.querySelector(".btn-back");
  backButton.addEventListener("click", function () {
    // Redirect or perform any action when the Back button is clicked
    // Example: window.location.href = "back_url.html";
    alert("Back button clicked");
  });
});

// JavaScript code to handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector("form");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values entered by the user
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // You can add your sign-up validation logic here
    // For this example, let's check if all fields are filled and if the passwords match
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
    } else {
      // You can make an AJAX request or any other action here after successful sign-up
      alert(`Welcome, ${username}! Your account has been created.`);
      // Reset the form
      signUpForm.reset();
    }
  });
});

// JavaScript code to handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your login validation logic here
    // For this example, let's just check if both fields are filled
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in both fields");
    } else {
      // You can make an AJAX request or any other action here after successful login
      alert(`Welcome, ${username}!`);
      // Reset the form
      loginForm.reset();
    }
  });

  // Back button action
  const backButton = document.querySelector(".btn-back");
  backButton.addEventListener("click", function () {
    // Redirect or perform any action when the Back button is clicked
    // Example: window.location.href = "back_url.html";
    alert("Back button clicked");
  });
});
// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Assuming you have a form with fields like title and content
const blogForm = document.querySelector("#blog-form");

blogForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  // Push the blog post to the Firebase Realtime Database
  const newBlogPostRef = database.ref("blog-posts").push();
  newBlogPostRef
    .set({
      title: title,
      content: content,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    })
    .then(() => {
      alert("Blog post submitted successfully!");
      // Clear the form fields if needed
      blogForm.reset();
    })
    .catch((error) => {
      console.error("Error submitting blog post:", error);
    });
});
