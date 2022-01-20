console.log('rcvd')
var popup = document.getElementById("popup");
var input = document.getElementById("bookButton");
var submit = document.getElementById("submitButton");

//Displaying a popup once the user clicks the button informing them that the book room has been received
input.addEventListener("click", submittedValues, true);
function submittedValues(event) {
  event.preventDefault();
  console.log("clicked")
  popup.style.display = "block";
}

//Clicking anywhere to remove the popup
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

submit.addEventListener("click", submitEmail, true);
function submitEmail(event) {
  popup.style.display = "none";
  alert("The house has been succesfully booked");
  event.preventDefault();
}