var koa = require('koa'),
    serve = require('koa-static'),
    router = require('koa-router'),
    bodyParser = require('koa-bodyparser'),
    session = require('koa-session');

var app = koa();
var root = './dist/www',
    opts = {};

app.keys = ['some secret hurr hurr hurr'];
app.use(bodyParser());
app.use(session({key: 'ASP.NET_SessionID'}, app));
app.use(router(app));
app.use(serve(root, opts));

app.post('/Home/Login', function *(next) {
    var body = this.request.body,
        success = (body.email === 'foo' && body.password === 'bar');
    this.session.signed = success;
    this.response.body = (success) ?
                        '{"Success":"true"}' :
                        '{"Success":"false"}';
    yield next;
});

app.get('/Home/Logout', function *(next) {
    this.session = null;
    this.response.body = '{"Signed":"false"}';
    yield next;
});

app.get('/Home/Admin', function *(next) {
    this.response.body = '{"Signed":"'+this.session.signed+'"}';
    yield next;
});

app.listen(3000);
