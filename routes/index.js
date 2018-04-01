var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   Product.find(function(err, docs) {
//     var productChunks = [];
//     var chunkSize = 3;
//     for (var i = 0; i < docs.length; i += chunkSize) {
//       productChunks.push(docs.slice(i, i + chunkSize))
//     }
//     res.render('shop/index', { title: 'Shopping Cart', products: productChunks});
//   })
//     console.log(docs)
// });


router.get('/', function(req, res, next) {
  Product.find({})
  .sort({date:'desc'})
  .then(product => {
    res.render('shop/index', { title: 'Shopping Cart', items: product});
  })
});
router.get('/addProduct' , function(req ,res){
  res.render('shop/view');
})
router.post('/add', function(req , res) {
  const newProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  }
  new Product(newProduct).save()
  .then(product => {
    
      res.redirect('/');
    
  })
})
router.get('/user/signup', function(req, res, next) {
  var messages = req.flash('error')
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signup', passport.authenticate('local.signup',{
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/profile', function(req, res, next) {
  res.render('user/profile');
})

module.exports = router;
