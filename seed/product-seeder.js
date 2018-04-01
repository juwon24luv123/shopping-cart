var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/Myshopping');

var products = [
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
        title: 'Gothic Video Game',
        description: 'Awesome Game',
        price: 1000
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/commons/7/7e/PS4-Console-wDS4.jpg",
        title: 'Gothic Video Game',
        description: 'Awesome Home Game',
        price: 4000
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
        title: 'Gothic Video Game',
        description: 'Awesome Game',
        price: 100
    }),
    new Product({
        imagePath: "https://www.fantasyobchod.cz/image/cache/the-gothic-tarot-compendium-22696-0-1000x1000.jpg",
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!!',
        price: 300
    }),
    new Product({
        imagePath: "https://www.fantasyobchod.cz/image/cache/the-gothic-tarot-compendium-22696-0-1000x1000.jpg",
        title: 'Gothic Video ',
        description: 'Awesome Lovely Game!!!!!',
        price: 3000
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++
        if (done === products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
