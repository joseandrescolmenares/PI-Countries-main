const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const country = require('./country')
const activity = require('./activiti')
const router = Router();

router.use("/countrys", country)
router.use('/activity', activity)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;
