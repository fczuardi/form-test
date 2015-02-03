var React = require('react'),
    UserStore = require('../stores/user');


var DebugScreen = React.createClass({
    getInitialState: function() {
        return {
            debugText: ''
        };
    },

    getAdminURL: function(){
        UserStore.debugAPI('/Home/Admin');
    },

    logout: function(){
        UserStore.logout();
    },

    onUserChange: function(){
        var user = UserStore.getUserState();
        this.setState({
            debugText: user.debug
        });
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
    <button onClick={this.getAdminURL}>
        Test Admin URL
    </button>
    <textarea readOnly value={this.state.debugText} />
    <br />
    <button onClick={this.logout}>
        Test Logout URL
    </button>
</div>
        );
    }
});
module.exports = DebugScreen;
