var EventEmitter = require('eventemitter3').EventEmitter,
    assign = require('object-assign');
var CHANGE_EVENT = 'change';

function makeLogin(){
    return false;
}

var UserStore = assign({}, EventEmitter.prototype,{
    makeLogin: makeLogin,
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
