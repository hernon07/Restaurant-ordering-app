const menuArray = [
  {
    name: "Pizza",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    id: 0,
    price: 14,
    emoji: "🍕",
  },
  {
    name: "Hamburger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 12,
    emoji: "🍔",
    id: 1,
  },
  {
    name: "Beer",
    ingredients: ["grain, hops, yeast, water"],
    price: 12,
    emoji: "🍺",
    id: 2,
  },
];

/*add to order*/

const main = document.querySelector("main[class='menu']");
const name = document.querySelector("#name");
const price = document.querySelector("#price");

main.addEventListener("click", function (e) {});

/* onload */
function loadMenu() {
  menuArray.forEach((menu) => {
    const { name, ingredients, price, emoji, id } = menu;

    const main = document.querySelector("main[class='menu']");

    main.innerHTML += `
    <div class="item">
    <div class="icon">${emoji}</div>
    <div class="txt-container">
        <p class="name">${name}</p>
        <p class="topping">${ingredients}</p>
        <p class="price">${price}</p>
    </div>
    <input class="btn" type="button" value="+" id="${id}">
</div>

    `;
  });
}

window.addEventListener("load", loadMenu);
