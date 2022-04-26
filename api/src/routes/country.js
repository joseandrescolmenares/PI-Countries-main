const Router = require('express');
const router = Router();


router.get('/countrys', (req, res) =>{
    res.status(200).send('holaa')
})

module.exports = router;