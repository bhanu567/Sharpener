var li = document.getElementById("items");
li.addEventListener("click", (e) => {
  if (e.target.classList[0] === "delete") {
    if (confirm("Are You Sure")) {
      document.getElementsByTagName("li")[e.buttons].remove();
    }
  } else if (e.target.classList[0] === "edit") {
    document.getElementsByTagName("li")[e.buttons].innerText = prompt("Enter The String");
    var del = document.createElement("button");
    del.className = "delete btn btn-danger btn-sm";
    del.appendChild(document.createTextNode("X"));
    del.style.cssFloat = "right";
    del.style.marginRight = "5px";
    var edit = document.createElement("button");
    edit.className = "edit btn btn-danger btn-sm";
    edit.appendChild(document.createTextNode("EDIT"));
    edit.style.cssFloat = "right";
    document.getElementsByTagName("li")[e.buttons].appendChild(edit);
    document.getElementsByTagName("li")[e.buttons].appendChild(del);
  }
});

