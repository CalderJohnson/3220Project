//initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAkAZcLhwQiS99zJpKUB__eQLiQv27icoM",
  authDomain: "opendataset3220.firebaseapp.com",
  projectId: "opendataset3220",
  storageBucket: "opendataset3220.appspot.com",
  messagingSenderId: "859480734794",
  appId: "1:859480734794:web:05d9a4a8272b30a0befab3",
  measurementId: "G-Z4R5ZPPBN2"
};
//initialize Firebase
firebase.initializeApp(firebaseConfig);

//sign-Up Function
function signUp() {
  var email = document.getElementById('email').value; 
  var password = document.getElementById('password').value; 
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //signed in 
      var user = userCredential.user;
      //datasets page
      window.location.href = 'datasets.html'; 
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      //error message
      alert(errorMessage);
    });
}

//login Function
function logIn() {
  var email = document.getElementById('username').value; 
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //signed in
      var user = userCredential.user;
      //redirect to datasets
      window.location.href = 'datasets.html'; 
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      //error message
      alert(errorMessage);
    });
}

//event listeners for form submission
document.addEventListener('DOMContentLoaded', function() {
  //attach signUp function to signup form
  var signupForm = document.querySelector('.signup-form');
  if(signupForm) {
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); //prevent the default form submission
      signUp();
    });
  }

  //attach logIn function to login form
  var loginForm = document.querySelector('.login-form');
  if(loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); //prevent the default form submission
      logIn();
    });
  }
});
