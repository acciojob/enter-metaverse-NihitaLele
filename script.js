// Create paragraph
const para = document.createElement("p");
para.id = "status";
para.textContent = "Enter the Metaverse";

// Create button
const button = document.createElement("button");
button.id = "enterBtn";
button.textContent = "Enter";

// Append to body
document.body.appendChild(para);
document.body.appendChild(button);

// Add click event
button.addEventListener("click", () => {
  para.innerHTML = "<h1>Entered Metaverse</h1>";
});