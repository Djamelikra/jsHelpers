"use strict"

function addElementToDom(newElement, newId, newContent) {
    var thisElement = document.createElement(newElement);
    thisElement.setAttribute("id", newId);
    var eltContent = document.createTextNode(newContent);
    thisElement.appendChild(eltContent);
    document.body.appendChild(thisElement);
    //add CSS
    thisElement.style.border = "solid 1px green";
  }

  function addButton(idBtn, parentBtn, caption, tooltip) {
    var newBtn = document.createElement("button");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("id", idBtn);
    newBtn.innerHTML = caption;
    let parentNode = document.getElementById(parentBtn);
    parentNode.appendChild(newBtn);
    newBtn.setAttribute('title',tooltip);
  }

  function addClickEvent(idBtn, exe) {
    var cta =  document.getElementById(idBtn);
    cta.addEventListener('click',exe,false);
  }

