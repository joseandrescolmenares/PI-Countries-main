const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const country = require('./country')

const router = Router();

router.get("/countrys", country)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
