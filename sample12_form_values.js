function getData() {
  var user = {
    fname: "",
    lname: "",
    email: "",
    gender: ""
  };
  user.fname = document.getElementById("fname").value;
  user.lname = document.getElementById("lname").value;
  user.email = document.getElementById("email").value;

  // for Radio Buttons
  var rbuttons = document.getElementsByName("gender");
  for (i = 0; i < rbuttons.length; i++) {
    if (rbuttons[i].checked) {
      user.gender = rbuttons[i].value;
    }
  }

  // for Checkboxes

  var cboxes = document.getElementsByName("role");
  var cboxValue = [];
  for (i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked) {
      cboxValue.push(cboxes[i].value);
    }
  }
  user.roles = cboxValue;

  console.log(user);
}
