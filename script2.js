const watches = [
{
name:"Rolex Classic",
price:499,
image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
},
{
name:"Omega Gold",
price:599,
image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa"
},
{
name:"Titan Black",
price:299,
image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56"
},
{
name:"Fossil Luxury",
price:349,
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d"
},
{
name:"Casio Pro",
price:199,
image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
},
{
name:"Silver Elite",
price:399,
image:"https://images.unsplash.com/photo-1612817159949-195b6eb9e31a"
},
{
name:"Royal Time",
price:699,
image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56"
},
{
name:"Diamond Watch",
price:899,
image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
},
{
name:"Classic Leather",
price:259,
image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa"
},
{
name:"Black Master",
price:450,
image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
},
{
name:"Elegant Gold",
price:550,
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d"
},
{
name:"Premium Steel",
price:470,
image:"https://images.unsplash.com/photo-1612817159949-195b6eb9e31a"
},
{
name:"Luxury X",
price:720,
image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa"
},
{
name:"Sport Pro",
price:390,
image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
},
{
name:"Royal Black",
price:510,
image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56"
},
{
name:"Silver King",
price:430,
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d"
},
{
name:"Modern Style",
price:375,
image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
},
{
name:"Classic Time",
price:280,
image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa"
},
{
name:"Gold Edition",
price:620,
image:"https://images.unsplash.com/photo-1612817159949-195b6eb9e31a"
},
{
name:"Executive Watch",
price:780,
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d"
}
];

const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

watches.forEach((watch) => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${watch.image}">
        <div class="card-content">
            <h3>${watch.name}</h3>
            <p class="price">$${watch.price}</p>
            <button class="btn">Add To Cart</button>
        </div>
    `;

    card.querySelector(".btn").addEventListener("click", () => {
        cart.push(watch);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        alert("Added to Cart");
    });

    productContainer.appendChild(card);
});

function updateCart(){
    cartCount.innerText = cart.length;
}