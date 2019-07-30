var users = []
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

  users.push(user)
  displayUsers(users)
  clearForm(user)
}

function clearForm(obj){
  for(a in obj){
    if(a !== "gender" && a !="roles"){
      document.getElementById(a).value =""

    }else if (a == "gender"){
      var rbuttons = document.getElementsByName("gender");
      for (i = 0; i < rbuttons.length; i++) {
        rbuttons[i].checked = false
      }
    
    }else{
      var cboxes = document.getElementsByName("role");
      for (i = 0; i < cboxes.length; i++) {
        cboxes[i].checked = false
      }
    }
  }
}

function displayUsers(users){
  document.getElementById("myTable").innerHTML = ""

  for(i=0;i<users.length;i++){
    var tr = document.createElement("tr")
    var obj = users[i]
    displayObject(tr,obj)
    document.getElementById("myTable").appendChild(tr)
  }
}
function editUser(i){
  index =i;
  clearForm(users[i])

  displayInform(users[i])

}
function displayObject(tr,obj){
  for(a in obj){
    var td = document.createElement("td")
    td.innerHTML = obj[a]
    tr.appendChild(td)
  }

  var editTd = document.createElement("td")
  var deleteTd = document.createElement("td")

  var editButton= document.createElement("button")
  editButton.innerHTML = "Edit"
  editButton.setAttribute("class","btn btn-info")
  editButton.setAttribute("onclick","editUser("+i+")")

  var deleteButton= document.createElement("button")
  deleteButton.setAttribute("class","btn btn-danger")
  deleteButton.setAttribute("onclick","deleteuser("+i+")")

  deleteButton.innerHTML = "Delete";

  editTd.appendChild(editButton)
  deleteTd.appendChild(deleteButton)

  tr.appendChild(editTd)
  tr.appendChild(deleteTd)
}

function deleteuser(i){
  users.splice(i,1)
  displayUsers(users)
}

function displayInform(obj){
  for(a in obj){
    if( a !== "gender" && a !=="roles"){
      document.getElementById(a).value = obj[a]

    }else if(a == "gender"){
      var rbuttons = document.getElementsByName("gender");
      for (i = 0; i < rbuttons.length; i++) {
        if(obj[a]== rbuttons[i].value){
          rbuttons[i].checked =true
        }
      }
    }
    else{
      var cboxes = document.getElementsByName("role");
      for(i=0;i<obj[a].length;i++){
        for(j=0;j<cboxes.length;j++){
          if(obj[a][i]==cboxes[j].value){
            cboxes[j].checked = true
          }
        }
      }
    }
  }
}

function update(){
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
  users[index] = user;
  displayUsers(users)
  clearForm(user)

}