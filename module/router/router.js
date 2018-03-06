var app = require('../components/app')
var router = function(){
var hash = location.hash;
	hash = hash.replace(/^#\/?/, '');
	hash = hash.split('/')
var map = {
	list: true,
	home: true,
	detail: true,
	informat: true,
	login: true,
	regin: true
}
if (map[hash[0]]) {
	app.view = hash[0]
} else {
	app.view = 'home'
}
	app.$set(app, 'route', hash.slice(1))
	routes = hash.slice(1)
}
window.addEventListener('hashchange', router)
router();
