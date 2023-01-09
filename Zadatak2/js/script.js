// Kad se klikne na žutu shopping ikonu, otvori/zatvori 'side-menu' s desne strane
document.getElementById("shopping").addEventListener("click", () => {
  document.getElementById("shopping-side-menu").classList.toggle("active");
});

let count = 0; // Početna vrijednost 'shopping-count'-a (brojač iznad žute košarice)
document.getElementById("shopping-count").innerText = count;

// Inkrementira brojač iznad ikone od žute košarice
function incrementCount() {
  count++; // count = count + 1;
  document.getElementById("shopping-count").innerText = count;
}

// Pronađi sva 3 crvena 'Naruči' button-a i spremi ih u listu 'pizzaButtons'
const pizzaButtons = document.querySelectorAll(".pizza-card button");
for (let i = 0; i < pizzaButtons.length; i++) {
  const button = pizzaButtons[i];
  // Za svaki od ta 3 button-a postavi da zove funkciju 'handleOrderButton()' kad se na njega klikne
  button.addEventListener("click", handleOrderButton);
}

// Ova funkcija se poziva svaki put kad se pizza naruči
function handleOrderButton(event) {
  incrementCount(); // Poziv funkcije koja inkrementira brojač iznad ikone od žute košarice

  const clickedButton = event.currentTarget; // Spremi kliknuti button u varijablu
  const pizzaCard = clickedButton.parentElement; // 'Roditelj' od button-a je 'article'

  // Dohvati naziv i cijenu pizze
  const pizzaName = pizzaCard.querySelector("h3").innerText;
  const pizzaPrice = pizzaCard.querySelector("small > em").innerText;

  // Poziv funkcije koja kreira 'item' u košarici
  createShopItem(pizzaName, pizzaPrice);
}

// Funkcija koja kreira novi 'shopping-item' u 'shopping-side-menu'
function createShopItem(name, price) {
  const shopItem = document.createElement("article"); // Kreiraj prazan 'article' element: <article></article>
  shopItem.classList.add("shopping-item"); // Dodaj mu klasu 'shopping-item': <article class="shopping-item"></article>

  // "Template string"
  shopItem.innerHTML = `
    <i class="fas fa-times close"></i>
    <h3>${name}</h3>
    <div class="item-info">
      <small>Cijena:</small>
      <strong class="price">${price}</strong>
    </div>
    <div class="item-info">
      <small>Količina:</small>
      <div class="amount-box">
        <button class="minus"><i class="fas fa-minus"></i></button>
        <strong class="amount">1</strong>
        <button class="plus"><i class="fas fa-plus"></i></button>
      </div>
    </div>`;

  document.getElementById("shopping-items").appendChild(shopItem);
}
