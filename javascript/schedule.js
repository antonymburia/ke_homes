const form = document.getElementById("form");
const clientName = document.getElementById("name");
const submitButton = document.getElementById("submit");
const phoneNumber = document.getElementById("phone_number")
const date = document.getElementById("date");
const time = document.getElementById("time");
const textArea = document.getElementById("textarea");

form.addEventListener("submit", getName);

function getName(e) {
  e.preventDefault();

  const name = clientName.value;

  submitButton.innerText = "submitting...";

  setTimeout(() => {
    alert(`Hi ${name} your visit has been scheduled.`);

    submitButton.innerText = "submit";
    clientName.value = "";
    phoneNumber.value = "";
    date.value = "";
    time.value = "";
    textArea.value = "";
  }, 2000);
}
