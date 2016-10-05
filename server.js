
var route = require('koa-route');
var koa = require('koa');
var app = koa();

var data = {};

var routes = {
	index: function *() {
		this.body = "Hello World!";
	},

	save: function *(key, value) {
		data[key] = value;
		this.body = key + ", " + value + " saved!";
	},

	list: function *() {
		var keys = Object.keys(data);
		var text = "Data:\n";
		text += keys.map(function(key) {
			return key + ", " + data[key];
		});
		this.body = text;
	}

}

app.use(route.get('/', routes.index));
app.use(route.post('/save/:key/:value', routes.save));
app.use(route.get('/list', routes.list));

app.listen(3000);