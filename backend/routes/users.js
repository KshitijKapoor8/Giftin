const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:_id').get((req, res) => {
    User.findById(req.params._id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({username, email, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    User.findOne({email})
        .then(users => {
            if(password === users.password)
            {
                res.json(users._id);
            }
            else
            {
                res.status(404).json('Wrong Credentials!');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/updateWishlist/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(post => {
            post.wishlist = req.body.wishlist;

            post.save()
                .then(() => res.json('Post updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;