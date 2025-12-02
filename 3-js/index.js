const element = document.querySelector(".container");
const clonElement = document.querySelector(".clone");

const producto = [
  {
    id: 1,
    name: "Play Station",
    description: "Bla bla bla bla bla",
  },
  {
    id: 2,
    name: "iPhone 17",
    description: "Es un celular de gama alta",
  },
  {
    id: 3,
    name: "Tomatodo",
    description: "Sirve para beber agua",
  },
];

clonElement.innerHTML = producto.map(
  (product) => `      <div class="card">
      <h3>${product.name}</h3>
      <p class='description'>${product.description}</p>
  </div>
`
);
