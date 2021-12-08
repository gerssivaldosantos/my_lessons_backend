const { Router } = require('express');

const router = Router();

router.get('/api/lessons', (req, res)=>{
    res.json('Lesson list');
});


module.exports = router;