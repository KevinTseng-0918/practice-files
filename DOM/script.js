const btn = document.getElementById("button");

button.addEventListener("click", (e) => {
  const newbox = document.createElement("div");
  newbox.classList.add("box");
  const container = document.querySelector(".container");
  container.appendChild(newbox);
});
