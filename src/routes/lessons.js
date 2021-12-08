const { Router } = require('express');

const router = Router();

const Lesson = require('../models/lessons')

const faker = require('faker');


router.get('/api/lessons', async (req, res)=>{
    const lessons = await Lesson.find();
    res.json(lessons);
    
});

router.get('/api/lessons/create', async (req, res)=>{
    for (let i = 0; i < 5; i++){
        await Lesson.create({
            Name: faker.name.firstName(),
            Description: faker.vehicle.vehicle(),
            Icon: faker.image.avatar()
        })
    }
    res.json({message: "5 lessons created"})
})

module.exports = router;