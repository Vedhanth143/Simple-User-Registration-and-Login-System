function validateForm() {
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  if (pass !== confirm) {
    alert("Passwords do not match!");
    return false;
  }
  return true;
}
