var koa = require('koa'),
    serve = require('koa-static'),
    router = require('koa-router'),
    bodyParser = require('koa-bodyparser');

var app = koa();
var root = './dist/www',
    opts = {};

app.use(bodyParser());
app.use(router(app));
app.use(serve(root, opts));

app.post('/Home/Login', function *(next) {
    var body = this.request.body,
        success = (body.email === 'foo' && body.password === 'bar');
    this.response.body = (success) ?
                        '{"Success":"true"}' :
                        '{"Success":"false"}';
    yield next;
});

app.get('/Home/Logout', function *(next) {
    this.response.body = '{"Signed":"false"}';
    yield next;
});

app.listen(3000);
