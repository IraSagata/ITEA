const inp = document.querySelector("input");
const addTaskBtn = document.querySelector("button");
const list = document.querySelector("ul");
const checkBox = document.getElementsByClassName("check");

function getInputValue(inputElement) {
  console.log("getInputValue ", inputElement);
  return inputElement.value;
}

function createElementWithText(elementName, text) {
  console.log("createElementWithText ", elementName, text);
  let span = document.createElement("span");
  span.textContent = "\u00D7";
  span.onclick = function() {
    let li = this.parentElement;
    list.removeChild(li);
  };
  let li = document.createElement(elementName);
  li.textContent = text;
  li.appendChild(span);
  return li;
}

function appendChildTodo(parent, child) {
  console.log("appendChildTodo ", parent, child);
  parent.appendChild(child);
  return (inp.value = "");
}

addTaskBtn.addEventListener("click", () => {
  let value = getInputValue(inp);

  if (value) {
    console.log("click ", value);

    let child = createElementWithText("li", value);

    return appendChildTodo(list, child);
  }
});
