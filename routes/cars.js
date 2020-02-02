const express = require("express");
const router = express.Router();

const Car = require("../models/cars");


router.get('/',(req,res)=>{

    const cars = Car.find()

    cars
    .then( data =>{
        res.status(200).send(data)
    }).catch(err => {
        res.send(err)
    })
})


router.post('/',(req,res)=>{

    const {brand} = req.body

    const post = new Car({
        brand
    })

    post
    .save()
    .then(data =>{
        res.json(data)
    }).catch(err => res.send(err))

})

module.exports= router