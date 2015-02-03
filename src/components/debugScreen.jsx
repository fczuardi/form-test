var React = require('react'),
    UserStore = require('../stores/user');


var DebugScreen = React.createClass({
    getInitialState: function() {
        return {
            debugText: ''
        };
    },

    getAdminURL: function(){

    },

    logout: function(){
        UserStore.logout();
    },

    render: function(){
        return (
<div>
    <button onClick={this.getAdminURL}>
        Test Admin URL
    </button>
    <textarea value={this.state.debugText} />
    <br />
    <button onClick={this.logout}>
        Test Logout URL
    </button>
</div>
        );
    }
});
module.exports = DebugScreen;
