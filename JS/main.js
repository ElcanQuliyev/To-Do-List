const text = document.getElementById("inputText");
const btn = document.getElementById("btn");
const ul = document.getElementById("toDoList");

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = text.value;
  let btn2 = document.createElement("button");
  btn2.textContent = "Delete";
  li.appendChild(btn2);

  btn2.addEventListener("click", () => {
    ul.removeChild(li);
  });
  ul.appendChild(li);
});
