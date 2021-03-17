var vForm = document.getElementById("mgform");
var vInput = document.getElementById("mail");
vForm.onsubmit = function () {
  if (this.hid == "bulk") {
    location = "/api/mail/submit/" + encodeURIComponent(vInput.value);
  }
  if (this.hid == "list") {
    location = "/api/mail/validate/" + encodeURIComponent(vInput.value);
  }
  if (this.hid == "inv") {
    location = "/api/mail/invoice/" + encodeURIComponent(vInput.value);
  }
  return false;
};
