document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f4f4";

// Navbar
const navbar = document.createElement("nav");

navbar.style.backgroundColor = "#333";
navbar.style.color = "white";
navbar.style.padding = "10px";
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";

const logo = document.createElement("h2");
logo.textContent = "ShopNow";

const cart = document.createElement("span");
cart.textContent = "Cart (0)";

navbar.appendChild(logo);
navbar.appendChild(cart);

document.body.appendChild(navbar);


// Hero section
const hero = document.createElement("section");

hero.style.textAlign = "center";
hero.style.padding = "50px 20px";
hero.style.backgroundColor = "#fff";
hero.style.color = "#333";

const heading = document.createElement("h1");
heading.textContent = "Welcome to ShopNow!";
heading.style.fontSize = "2.5em";

const description = document.createElement("p");
description.textContent = "Discover amazing products at great prices.";

const shopButton = document.createElement("button");
shopButton.textContent = "Shop Now";

shopButton.style.padding = "12px 30px";
shopButton.style.border = "none";
shopButton.style.borderRadius = "6px";
shopButton.style.cursor = "pointer";

hero.appendChild(heading);
hero.appendChild(description);
hero.appendChild(shopButton);

document.body.appendChild(hero);


// Product section
const productSection = document.createElement("section");

productSection.style.padding = "60px 20px";
productSection.style.textAlign = "center";

const productHeading = document.createElement("h2");
productHeading.textContent = "Featured Products";

productSection.appendChild(productHeading);


// Products
const products = [
    {
        name: "Wireless Headphones",
        price: 1999,
        icon: "🎧"
    },
    {
        name: "Smart Watch",
        price: 2499,
        icon: "⌚"
    },
    {
        name: "Running Shoes",
        price: 2999,
        icon: "👟"
    },
    {
        name: "Backpack",
        price: 1499,
        icon: "🎒"
    }
];


// Flexbox container
const container = document.createElement("div");

container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.gap = "25px";
container.style.flexWrap = "wrap";


// Cart count
let cartCount = 0;


// Create product cards
products.forEach((product) => {

    const card = document.createElement("div");

    card.style.backgroundColor = "#fff";
    card.style.width = "220px";
    card.style.padding = "25px";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";


    const icon = document.createElement("div");

    icon.textContent = product.icon;
    icon.style.fontSize = "3em";


    const name = document.createElement("h3");

    name.textContent = product.name;


    const price = document.createElement("p");

    price.textContent = `₹${product.price}`;
    price.style.fontWeight = "bold";
    price.style.fontSize = "20px";


    const button = document.createElement("button");

    button.textContent = "Add to Cart";

    button.style.backgroundColor = "#2563eb";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";


    // Add to cart
    button.addEventListener("click", () => {

        cartCount++;

        cart.textContent = `Cart (${cartCount})`;

        alert(product.name + " added to cart!");

    });


    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);

    container.appendChild(card);

});


productSection.appendChild(container);

document.body.appendChild(productSection);


// Footer
const footer = document.createElement("footer");

footer.textContent = "© 2026 ShopNow. All Rights Reserved.";

footer.style.backgroundColor = "#111827";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "20px";

document.body.appendChild(footer);