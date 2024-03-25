const btn = document.getElementById("button");

btn.addEventListener("click", (e) => {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  const container = document.querySelector(".container");
  container.appendChild(newBox);
});
