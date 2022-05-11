const Router = require('express');
const router = Router();
const {dbInfo, countryId,} = require('../controllers/country')


router.get('/', async(req, res) =>{
    const {name} = req.query;
    res.status(200).send(await dbInfo(name));
})


router.get("/:id", async(req, res) =>{
    const {id} = req.params;
    res.status(200).json(await countryId(id))
})





module.exports = router;