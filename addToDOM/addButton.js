"use strict"

function addToDom(newElement, newId, newContent) {
    var thisElement = document.createElement(newElement);
    thisElement.setAttribute("id", newId);
    var eltContent = document.createTextNode(newContent);
    thisElement.appendChild(eltContent);
  
    var location = document.getElementById("tbl");
    document.body.appendChild(thisElement);
  
    //add CSS
    thisElement.style.border = "outset 5px green";
  }

  function addButton(idBtn, parentBtn, caption,exe) {
    var newBtn = document.createElement("button");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("id", idBtn);
    newBtn.innerHTML = caption;
    let parentNode = document.getElementById(parentBtn);
    parentNode.appendChild(newBtn);
    newBtn.setAttribute('click',exe);
  }