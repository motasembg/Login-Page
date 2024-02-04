// let user = document.getElementById("username").value;
// let pass = document.getElementById("password").value;
// TODO: this is fn for valildatelogin just declear the var inside that...
function validatelogin() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if (user === "mo98" && pass === "1998") {
    // path after login Correct
    window.location.href = "/signin.html";
  } else {
    alert("Incorrect username or password. Please try again.");
    document.getElementById("password").value = "";
  }
}
