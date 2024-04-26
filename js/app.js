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
        name: 'Tranquil Waterscape',
        image: 'nature/banner.JPG',
        price: 35

    },
    {
        id: 2,
        name: 'Reflections of Serenity',
        image: 'nature/nature1.JPG',
        price: 35
    },
    {
        id: 3,
        name: 'Forest Escape',
        image: 'nature/nature2.JPG',
        price: 35
    },
    {
        id: 4,
        name: 'Solitary Sentinel',
        image: 'nature/nature3.JPG',
        price: 35
    },
    {
        id: 5,
        name: 'Graceful Wanderer',
        image: 'nature/nature4.JPG',
        price: 35
    },
    {
        id: 6,
        name: 'Whispers of Freedom',
        image: 'nature/nature5.JPG',
        price: 35
    },
    {
        id: 7,
        name: 'Woodland Elegance',
        image: 'nature/nature6.JPG',
        price: 35
    },
    {
        id: 8,
        name: 'Grassland Serenity',
        image: 'nature/nature7.JPG',
        price: 35
    },
    {
        id: 9,
        name: 'Solitude\'\s Embrace',
        image: 'nature/nature8.JPG',
        price: 35
    },
    {
       id: 10,
        name: 'Tranquil Waterscape',
        image: 'people_portraits/portrait0.JPG',
        price: 35
    },
    {
        id: 11,
        name: 'Reflections of Serenity',
        image: 'people_portraits/portrait1.JPG',
        price: 35
    },
    {
        id: 12,
        name: 'Forest Escape',
        image: 'people_portraits/portrait2.JPG',
        price: 35
    },
    {
        id: 13,
        name: 'Solitary Sentinel',
        image: 'people_portraits/portrait3.JPG',
        price: 35
    },
    {
        id: 14,
        name: 'Graceful Wanderer',
        image: 'people_portraits/portrait4.JPG',
        price: 35
    },
    {
        id: 15,
        name: 'Whispers of Freedom',
        image: 'people_portraits/portrait5.JPG',
        price: 35
    },
    {
        id: 16,
        name: 'Woodland Elegance',
        image: 'people_portraits/portrait6.JPG',
        price: 35
    },
    {
        id: 17,
        name: 'Grassland Serenity',
        image: 'people_portraits/portrait7.JPG',
        price: 35
    },
    {
        id: 18,
        name: 'Solitude\'\s Embrace',
        image: 'people_portraits/portrait8.JPG',
        price: 35
    },
    {
        id: 19,
        name: 'Tranquil Waterscape',
        image: 'people_portraits/portrait9.JPG',
        price: 35
    },
    {
        id: 20,
        name: 'Reflections of Serenity',
        image: 'people_portraits/portrait10.JPG',
        price: 35
    },
    {
        id: 21,
        name: 'Forest Escape',
        image: 'people_portraits/portrait11.JPG',
        price: 35
    },
    {
        id: 22,
        name: 'Solitary Sentinel',
        image: 'urban_life/urbanlife0.JPG',
        price: 35
    },
    {
        id: 23,
        name: 'Graceful Wanderer',
        image: 'urban_life/urbanlife1.JPG',
        price: 35
    },
    {
        id: 24,
        name: 'Whispers of Freedom',
        image: 'urban_life/urbanlife2.JPG',
        price: 35
    },
    {
        id: 25,
        name: 'Woodland Elegance',
        image: 'urban_life/urbanlife3.JPG',
        price: 35
    },
    {
        id: 26,
        name: 'Grassland Serenity',
        image: 'urban_life/urbanlife4.JPG',
        price: 35
    },
    {
        id: 27,
        name: 'Solitude\'\s Embrace',
        image: 'urban_life/urbanlife5.JPG',
        price: 35
    },
    {
       id: 28,
        name: 'Tranquil Waterscape',
        image: 'urban_life/urbanlife6.JPG',
        price: 35
    },
    {
        id: 29,
        name: 'Reflections of Serenity',
        image: 'urban_life/urbanlife7.JPG',
        price: 35
    },
    {
        id: 30,
        name: 'Forest Escape',
        image: 'urban_life/urbanlife8.JPG',
        price: 35
    },
    {
        id: 31,
        name: 'Solitary Sentinel',
        image: 'nudes/nudes0.jpg',
        price: 35
    },
    {
        id: 32,
        name: 'Graceful Wanderer',
        image: 'nudes/nudes1.jpg',
        price: 35
    },
    {
        id: 33,
        name: 'Whispers of Freedom',
        image: 'nudes/nudes2.jpg',
        price: 35
    },
    {
        id: 34,
        name: 'Woodland Elegance',
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
            <div class="title">${value.name}</div>
            <div class="print.price">${value.price.toLocaleString()}</div>
            <div class="frame.price">${value.price.toLocaleString()}</div>
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
    let totalPrice = '$';
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="Images/${value.image}"/></div>
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