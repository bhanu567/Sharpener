//DELETE & EDIT
var li = document.getElementById("items");
li.addEventListener("click", (e) => {
  if (e.target.classList[0] === "delete") {
    if (confirm("Are You Sure")) {
      e.target.parentElement.remove();
    }
  } else if (e.target.classList[0] === "edit") {
    var reqLi = e.target.parentElement;
    var text = prompt("Enter The String", reqLi.innerText);
    if (text) {
      reqLi.innerHTML = text;
      var del = document.createElement("button");
      del.className = "delete btn btn-danger btn-sm";
      del.appendChild(document.createTextNode("X"));
      del.style.cssFloat = "right";
      del.style.marginRight = "5px";
      var edit = document.createElement("button");
      edit.className = "edit btn btn-danger btn-sm";
      edit.appendChild(document.createTextNode("EDIT"));
      edit.style.cssFloat = "right";
      console.log(e.target.parentElement);
      console.log(e.target.parentElement);
      reqLi.appendChild(edit);
      reqLi.appendChild(del);
    }
  }
});

//SEARCH
var filter = document.getElementById("filter");

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  var text = e.target.value.toLowerCase();

  var items = document.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
// APPEND NODE
document.getElementById("sub").addEventListener("submit", (e) => {
  e.preventDefault();

  //Creating li
  var newNode = document.createElement("li");

  //adding class to li
  newNode.classList = "list-group-item";

  //adding text to li
   newNode.innerText=document.getElementById("val").value;

  //  creating delete button, adding class
  var BD = document.createElement("button");
  BD.innerHTML="X";
  BD.className = "delete btn btn-danger btn-sm";

  //creating edit button, adding class
  var EDBT = document.createElement("button");
  EDBT.textContent= "EDIT";
  EDBT.className = "edit btn btn-danger btn-sm";

  //appending delete and edit
  newNode.appendChild(EDBT);
  newNode.appendChild(BD);
  BD.style.cssFloat = "right";
  BD.style.marginRight = "5px";
  EDBT.style.cssFloat = "right";

  //appending in list
  document.getElementById("items").appendChild(newNode);
});
