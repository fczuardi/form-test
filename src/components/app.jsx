var React = require('react'),
    UserStore = require('../stores/user'),
    LoginForm = require('./loginForm.jsx'),
    DebugScreen = require('./debugScreen.jsx');


var initialScreen = (<LoginForm />),
    secondScreen = (<DebugScreen />);

var App = React.createClass({
    getInitialState: function() {
        return {
            currentScreen: initialScreen
        };
    },

    onUserChange: function(){
        console.log('Change listened');
        var user = UserStore.getUserState();
        console.log(user);
        if (user.signedIn){
            this.setState({
                currentScreen: secondScreen
            });
        }else{
            this.setState({
                currentScreen: initialScreen
            });
        }
    },

    componentDidMount: function() {
        UserStore.addChangeListener(this.onUserChange);
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this.onUserChange);
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
