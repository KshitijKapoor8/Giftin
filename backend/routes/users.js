const router = require('express').Router();
let User = require('../models/user.model');
const axios = require('axios');
const cherrio = require('cheerio');

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

router.route("/update/:id").post((req, res) => {
    User.findByIdAndUpdate(req.params.id)
        .then((user) => {
            return res.status(200).json(user);
        })
  });


  const options = {
    method: 'GET',
    url: 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product',
    params: {
      url: 'https://www.amazon.com/AMD-Ryzen-3600-12-Thread-Processor/dp/B07STGGQ18/ref=sr_1_1?dchild=1&keywords=Ryzen+5+5600x&qid=1609213264&sr=8-1"'
    },
    headers: {
      'x-rapidapi-key': '2a64351304msh7b9451590696c26p163edbjsna706b2a0b552',
      'x-rapidapi-host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  })


module.exports = router;

