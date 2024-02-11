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

main.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT") {
    const order = menuArray.find((menu) => menu.id == e.target.id);
    orderRender(order);
  }
});

/* render order */

function orderRender(order) {
  const name = document.createElement("p");
  name.textContent = order.name;
  name.classList.add("bold");

  const remove = document.createElement("p");
  remove.textContent = "remove";
  remove.setAttribute("id", remove);

  const price = document.createElement("p");
  price.textContent = order.price;
  price.classList.add("price");

  const div = document.createElement("div");
  div.classList.add("wrapper");

  div.appendChild(name);
  div.appendChild(remove);
  div.appendChild(price);

  document.getElementById("ctn").appendChild(div);

  const totalPrice = document.getElementById("total-price");
  totalPrice.textContent = Number(totalPrice.textContent) + order.price;

  /*remove btn */

  remove.addEventListener("click", function () {
    const totalPrice = document.getElementById("total-price");
    totalPrice.textContent = Number(totalPrice.textContent) - order.price;
    remove.parentElement.remove();
  });
}
const pay = document.getElementById("order");
const card = document.getElementById("card");
/*pay form */

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  card.classList.add("hide");
});

/* show card form */

pay.addEventListener("click", function () {
  card.classList.remove("hide");
});

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
