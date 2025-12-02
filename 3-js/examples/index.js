const container = document.getElementById("main-container");

const img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.alt = "Logo Javascript";
img.id = "image-selector";
container.appendChild(img);

const p = document.createElement("p");
p.innerText = "Hola mundo";

const imageSelector = document.getElementById("image-selector");

container.replaceChild(p, imageSelector);

// container.removeChild(imageSelector);
