var li = document.getElementById("items");
li.addEventListener("click", (e) => {
  if (e.target.classList[0] === "delete") {
    if (confirm("Are You Sure")) {
      e.target.parentElement.remove();
    }
  } else if (e.target.classList[0] === "edit") {
    var reqLi = e.target.parentElement;
    var text = prompt("Enter The String");
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
