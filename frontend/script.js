// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAkAZcLhwQiS99zJpKUB__eQLiQv27icoM",
    authDomain: "opendataset3220.firebaseapp.com",
    projectId: "opendataset3220",
    storageBucket: "opendataset3220.appspot.com",
    messagingSenderId: "859480734794",
    appId: "1:859480734794:web:05d9a4a8272b30a0befab3",
    measurementId: "G-Z4R5ZPPBN2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Sign-Up Function
  function signUp() {
    var email = document.getElementById('email').value; // Adjust ID for your signup page
    var password = document.getElementById('password').value; // Adjust ID for your signup page
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // Redirect to login page or somewhere else
        window.location.href = 'login.html'; // Adjust redirect as needed
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // Show an error message to your user
        alert(errorMessage);
      });
  }
  
  // Login Function
  function logIn() {
    var email = document.getElementById('username').value; // Adjust ID for your login page
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // Redirect to homepage or dashboard
        window.location.href = 'homepage.html'; // Adjust redirect as needed
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // Show an error message to your user
        alert(errorMessage);
      });
  }
  
  // Event listeners for form submission
  // Make sure to call these functions after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Attach signUp function to signup form
    var signupForm = document.querySelector('.signup-form');
    if(signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        signUp();
      });
    }
  
    // Attach logIn function to login form
    var loginForm = document.querySelector('.login-form');
    if(loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        logIn();
      });
    }
  });
  