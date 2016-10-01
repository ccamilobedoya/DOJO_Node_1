var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
// los metodos no llevan () porque se estan guardando, no invocando
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

// router.route = metodo que esta dentro de la var router, que es la del archivo ./router
server.start(router.route, handle);