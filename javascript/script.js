var popup = document.getElementById("popup");
var input = document.getElementById("bookButton");

//Displaying a popup once the user clicks the button informing them that the book room has been received
input.addEventListener("click", submittedValues, true);
function submittedValues(event) {
  event.preventDefault();
  popup.style.display = "block";
  console.log("rcvd");
}

//Clicking anywhere to remove the popup
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
