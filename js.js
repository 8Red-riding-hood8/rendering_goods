let kitchenProducts = [
    {
        type: "Grater",
        price: 10
    },
    {
        type: "Pastry-Bag",
        price: 25
    },
    {
        type: "Scale",
        price: 5
    },
    {
        type: "Whisk",
        price: 10
    }
];
// console.log(kitchenProducts);

let devicesProducts = [
    {
        type: "Desktop",
        price: [100, 1000]
    },
    {
        type: "Laptop",
        price: [80, 1500]
    },
    {
        type: "Smartphone",
        price: [80, 2000]
    },
    {
        type: "Tablet",
        price: [20, 1300]
    }
];
// console.log(devicesProducts);

let cosmeticsProducts = [
    {
        type: "Blush",
        price: 100
    },
    {
        type: "Eyeshadow",
        price: 50
    },
    {
        type: "Lipstick",
        price: 80
    },
    {
        type: "Nail-Polish",
        price: 200
    },
    {
        type: "Perfume",
        price: 300
    }
];
// console.log(cosmeticsProducts);

let Kitchen = { category: 'kitchen'};
let Devices = { category: 'devices'};
let Cosmetics = { category: 'cosmetics'};

const allCategory = [Kitchen, Devices, Cosmetics];
// console.log(allCategory);

let modProducs =[];

let getProto = (arr, proto) => {
    modProducs = arr
    .map((prducts) => {
        let newProducts = Object.create(proto);
        for(let key in prducts){
            newProducts[key] = prducts[key];
        }
        return newProducts;
    })
    return modProducs;
}

// console.log(modProducs);

let goods = [
    getProto(kitchenProducts, Kitchen),
    getProto(devicesProducts, Devices),
    getProto(cosmeticsProducts, Cosmetics)
];

let renderArr = [];
let newArr = [];

console.log(goods);

goods.forEach(element => {
    renderArr.push(`<section class="category">
        <h2 class="category__header">Category: ${element[0].category}</h2>
        <div class="category__boxes">
        `);
    element.map( obj => {
        console.log(obj.category);
        renderArr. push(
            `<div class="category__box">
                <div class ="category__image">
                    <img class="category__img" src="../src/images/${obj.type}.svg" alt="${obj.type}">
                </div>
                <div class="category__title">
                    <p class="category__name">Name: <span class="category__text">${obj.type}</span></p>
                    <p class="category__price">Price: <span class="category__text">$${Array.isArray(obj.price) === true ? String(obj.price[0])
                        + '-' + String(obj.price[1]) : obj.price}</span>
                        </p>
                </div>
            </div>`
        );
    })
    renderArr.push(`</div>
        </section>`);
});

document.write(`<div class="category">${renderArr.join('')}</div>`);
