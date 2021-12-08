const { Router } = require('express');

const router = Router();

router.get('/api/lessons', (req, res)=>{
    res.json('Lesson list');
});

router.get('/api/create', (req, res)=>{
    res.json({message: "5 lessons created"})
})

module.exports = router;