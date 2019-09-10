const inp = document.querySelector("input");
const addTaskBtn = document.querySelector("button");
const list = document.querySelector("ul");
const checkBox = document.getElementsByClassName("check")[0];

function getInputValue(inputElement) {
  //console.log("getInputValue ", inputElement);
  return inputElement.value;
}

function createElementWithText(elementName, text) {
  //console.log("createElementWithText ", elementName, text);
  let span = document.createElement("span");
  span.textContent = "\u00D7";
  span.onclick = function() {
    let li = this.parentElement;
    console.log("li");
    list.removeChild(li);
  };
  let li = document.createElement(elementName);
  li.textContent = text;
  li.appendChild(span);
  return li;
}

function appendChildTodo(parent, child) {
  //console.log("appendChildTodo ", parent, child);
  parent.appendChild(child);
  // return (inp.value = "");
}

addTaskBtn.addEventListener("click", () => {
  let value = getInputValue(inp);
  if (value) {
    let child = createElementWithText("li", value);
    if (checkBox.checked) {
      child.style.fontWeight = "bold";
      child.style.color = "blue";
      list.insertBefore(child, list.firstChild);
    } else {
      appendChildTodo(list, child);
    }
    return (inp.value = "");
  } else {
    alert("Come on!!!");
  }
});
inp.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTaskBtn.click();
  }
});

// list.addEventListener(
//   "click",
//   function(event) {
//     console.log("click");
//     if ("li") {
//       inp.style.textDecoration = "lineThrough";
//       list.replaceChild();
//     }
//   },
//   false
// );
