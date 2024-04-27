let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: "Print Only:<br>'Tranquil Waterscape'",
        image: 'nature/banner.JPG',
        price: 35

    },
    {
        id: 2,
        name: "Print Only:<br>'Reflections of Serenity'",
        image: 'nature/nature1.JPG',
        price: 35
    },
    {
        id: 3,
        name: "Print Only:<br>'Forest Escape'",
        image: 'nature/nature2.JPG',
        price: 35
    },
    {
        id: 4,
        name: "Print Only:<br>'Solitary Sentinel'",
        image: 'nature/nature3.JPG',
        price: 35
    },
    {
        id: 5,
        name: "Print Only:<br>'Graceful Wanderer'",
        image: 'nature/nature4.JPG',
        price: 35
    },
    {
        id: 6,
        name: "Print Only:<br>'Whispers of Freedom'",
        image: 'nature/nature5.JPG',
        price: 35
    },
    {
        id: 7,
        name: "Print Only:<br>'Woodland Elegance'",
        image: 'nature/nature6.JPG',
        price: 35
    },
    {
        id: 8,
        name: "Print Only:<br>'Grassland Serenity'",
        image: 'nature/nature7.JPG',
        price: 35
    },
    {
        id: 9,
        name: "Print Only:<br>'Solitude\'\s Embrace'",
        image: 'nature/nature8.JPG',
        price: 35
    },
    {
       id: 10,
        name: "Print Only:<br>'Vintage Elegance'",
        image: 'people_portraits/portrait0.JPG',
        price: 35
    },
    {
        id: 11,
        name: "Print Only:<br>'Smoldering Charisma'",
        image: 'people_portraits/portrait1.JPG',
        price: 35
    },
    {
        id: 12,
        name: "Print Only:<br>'Mystic Charm'",
        image: 'people_portraits/portrait2.JPG',
        price: 35
    },
    {
        id: 13,
        name: "Print Only:<br>'Melancholy Glance'",
        image: 'people_portraits/portrait3.JPG',
        price: 35
    },
    {
        id: 14,
        name: "Print Only:<br>'Glamour Glimpse'",
        image: 'people_portraits/portrait4.JPG',
        price: 35
    },
    {
        id: 15,
        name: "Print Only:<br>'Captivating Gaze'",
        image: 'people_portraits/portrait5.JPG',
        price: 35
    },
    {
        id: 16,
        name: "Print Only:<br>'Sparkling Reverie'",
        image: 'people_portraits/portrait6.JPG',
        price: 35
    },
    {
        id: 17,
        name: "Print Only:<br>'Glimmering Vision'",
        image: 'people_portraits/portrait7.JPG',
        price: 35
    },
    {
        id: 18,
        name: "Print Only:<br>'Silent Mystique'",
        image: 'people_portraits/portrait8.JPG',
        price: 35
    },
    {
        id: 19,
        name: "Print Only:<br>'Blooming Serenity'",
        image: 'people_portraits/portrait9.JPG',
        price: 35
    },
    {
        id: 20,
        name: "Print Only:<br>'Blooms and Beret'",
        image: 'people_portraits/portrait10.JPG',
        price: 35
    },
    {
        id: 21,
        name: "Print Only:<br>'Skyward Azure'",
        image: 'people_portraits/portrait11.JPG',
        price: 35
    },
    {
        id: 22,
        name: "Print Only:<br>'Retro Stroll'",
        image: 'urban_life/urbanlife0.JPG',
        price: 35
    },
    {
        id: 23,
        name: "Print Only:<br>'Vintage Detour'",
        image: 'urban_life/urbanlife1.JPG',
        price: 35
    },
    {
        id: 24,
        name: "Print Only:<br>'Frame of Elegance'",
        image: 'urban_life/urbanlife2.JPG',
        price: 35
    },
    {
        id: 25,
        name: "Print Only:<br>'Beyond Contemplation'",
        image: 'urban_life/urbanlife3.JPG',
        price: 35
    },
    {
        id: 26,
        name: "Print Only:<br>'Doorway Dreaming'",
        image: 'urban_life/urbanlife4.JPG',
        price: 35
    },
    {
        id: 27,
        name: "Print Only:<br>'Urban Blossoms'",
        image: 'urban_life/urbanlife5.JPG',
        price: 35
    },
    {
       id: 28,
        name: "Print Only:<br>'Brickbound Beauty'",
        image: 'urban_life/urbanlife6.JPG',
        price: 35
    },
    {
        id: 29,
        name: "Print Only:<br>'Freedom Skies'",
        image: 'urban_life/urbanlife7.JPG',
        price: 35
    },
    {
        id: 30,
        name: "Print Only:<br>'Timeless Poise'",
        image: 'urban_life/urbanlife8.JPG',
        price: 35
    },
    {
        id: 31,
        name: "Print Only:<br>'Sultry Dusk'",
        image: 'nudes/nudes0.jpg',
        price: 35
    },
    {
        id: 32,
        name: "Print Only:<br>'Luminescent Dreams'",
        image: 'nudes/nudes1.jpg',
        price: 35
    },
    {
        id: 33,
        name: "Print Only:<br>'Ethereal Elegance'",
        image: 'nudes/nudes2.jpg',
        price: 35
    },
    {
        id: 34,
        name: "Print Only:<br>'Sensual Silhouette'",
        image: 'nudes/nudes3.jpg',
        price: 35
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="Images/${value.image}">
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add Print Only to Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div class="checkout-image"><img src="Images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}