var React = require('react'),
    UserStore = require('../stores/user'),
    LoginForm = require('./loginForm.jsx');


var App = React.createClass({
    getInitialState: function() {
        return {
            currentScreen: (<LoginForm />)
        }
    },
    render: function(){
        return (
            <div>
                {this.state.currentScreen}
            </div>
        );
    }
});
React.initializeTouchEvents(true);
React.render(<App />, document.body);
