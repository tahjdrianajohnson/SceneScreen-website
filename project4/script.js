document.getElementById("date").innerHTML = Date();

function validateForm() {

  let name = document.getElementById("name").value;
  let comments = document.getElementById("comments").value;

  if (name =="" || comments == "") {
    alert("Please complete all required fields.");
    return false;
  }
  return true;
}
