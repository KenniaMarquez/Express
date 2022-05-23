var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test page. */
router.get('/prueba', function(req, res, next){
  res.render('prueba', { title: 'Descripcion'});
  
});


router.get('/info', function(req, res, next){
  res.render('info', { title: 'Informacion Academica'});
  
});

router.get('/contacto', function(req, res, next){
res.render('contacto', { title: 'Contacto'});
  
});


module.exports = router;
