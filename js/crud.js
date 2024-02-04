function addStudent() {
  var name = document.getElementById("studentName").value;
  var id = document.getElementById("studentID").value;

  if (name && id) {
    var table = document.getElementById("studentTable");
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = id;
    cell3.innerHTML =
      '<button id="btndel" onclick="deleteStudent(this)">Delete</button>' +
      ' <button id="btnup" onclick="updateStudent(this)">Update</button>';

    document.getElementById("studentForm").reset();
  } else {
    alert("Please enter both student name and ID.");
  }
}

function deleteStudent(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function updateStudent(btn) {
  var row = btn.parentNode.parentNode;
  var name = prompt("Enter updated student name:", row.cells[0].innerHTML);
  var id = prompt("Enter updated student ID:", row.cells[1].innerHTML);

  if (name !== null && id !== null) {
    row.cells[0].innerHTML = name;
    row.cells[1].innerHTML = id;
  }
}
function signout() {
  //   let btnout = document.getElementById("btnout");
  window.location.href = "/logout.html";
}
