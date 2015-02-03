var EventEmitter = require('eventemitter3').EventEmitter,
    assign = require('object-assign'),
    $ = require('jquery');
var CHANGE_EVENT = 'change';

var _user = {
        signedIn: false,
        debug: ''
    };

function makeLogin(formElement){
    var form = $(formElement);
    $.post( form.attr('action'), form.serialize() )
        .done(function(data){
            var dataObj = JSON.parse(data);
            _user.signedIn = (dataObj.Success === 'true') ? true : false;
            UserStore.emitChange();
        });
    return false;
}

function logout(){
    var signed = _user.signedIn;
    _user.signedIn = false;
    UserStore.emitChange();
    $.get('/Home/Logout')
        .done(function(data){
            console.log('logout response:');
            console.log(data);
        })
        .fail(function(){
            console.log('logout failed');
            _user.signedIn = signed;
            UserStore.emitChange();
        });
}

function getUserState(){
    return _user;
}

function debugAPI(url){
    $.get(url)
        .done(function(data){
            _user.debug = data;
            UserStore.emitChange();
        })
        .fail(function(){
            console.log('GET failed');
            _user.debug = 'error';
            UserStore.emitChange();
        });
}

var UserStore = assign({}, EventEmitter.prototype,{
    makeLogin: makeLogin,
    logout: logout,
    getUserState: getUserState,
    debugAPI: debugAPI,
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }
});

module.exports = UserStore;
