const { Router } = require('express');

const router = Router();

const Lesson = require('../models/lessons')

const faker = require('faker');


router.get('/api/lessons', async (req, res) => {
    const lessons = await Lesson.find();
    res.json({ lessons });

});

router.get('/api/lessons/create', async (req, res) => {

    await Lesson.create({
        Name: faker.hacker.ingverb(),
        Description: faker.lorem.sentences(),
        Icon: faker.image.animals()
    })

    res.json({ message: "lessons created" })
})

router.get('/api/lessons/delete-all', async (req, res) => {
    await Lesson.remove(
        {}
    )
    res.json('All data removed');
})

module.exports = router;