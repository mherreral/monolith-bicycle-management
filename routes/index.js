var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const bicicletaController = require("../controllers/bicicleta");

router.get("/bicicletas", bicicletaController.list);

router.get("/bicicletas/:id/show", bicicletaController.show);

router.get("/bicicletas/create", bicicletaController.create_get);

router.post("/bicicletas/create", bicicletaController.create_post);

router.get("/bicicletas/:id/update", bicicletaController.update_get);

router.post("/bicicletas/:id/update", bicicletaController.update_post);

router.post("/bicicletas/:id/delete", bicicletaController.delete);

module.exports = router;