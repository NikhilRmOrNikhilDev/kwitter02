const firebaseConfig = {
  apiKey: "AIzaSyCRu4idk0U8oF03fbKtvwOu0t-gHWWLu60",
  authDomain: "a1a1a-e8526.firebaseapp.com",
  projectId: "a1a1a-e8526",
  storageBucket: "a1a1a-e8526.appspot.com",
  messagingSenderId: "885650177819",
  appId: "1:885650177819:web:27398fb579e21d23579dbe",
  measurementId: "G-ZTW6FBNF6X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.addEventListener("load", function() {
  document.getElementById("preloader").id = "hide-preloader";
})
function sumbit(){
  user_name = document.getElementById("uname").value;
  email_id = document.getElementById("Ename").value;
  password = document.getElementById("pass").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("email", email_id);
  localStorage.setItem("pass", password);
  window.location = "kwitter-page.html";
}
function login(){
  document.getElementById("uname").style.display = "none";
  document.getElementById("sumbit").innerHTML = "Login In";
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "block";
}
function SignUp(){
  document.getElementById("uname").style.display = "block";
  document.getElementById("sumbit").innerHTML = "Sign Up";
  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
}