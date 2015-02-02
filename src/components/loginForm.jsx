var React = require('react'),
    UserStore = require('../stores/user');


var LoginForm = React.createClass({
    onSubmit: function(e){
        e.preventDefault();
        console.log('form submit!')
    },
    render: function(){
        return (
<form method="POST" action="/Home/Login" onSubmit={onSubmit}>
    <div>
        <label>Email</label>
        <input type="text" name="email" />
    </div>
    <div>
        <label>Password</label>
        <input type="password" name="password" />
    </div>
    <div>
        <input type="submit" value="Sign In" />
    </div>
</form>
        );
    }
});
module.exports = LoginForm;
