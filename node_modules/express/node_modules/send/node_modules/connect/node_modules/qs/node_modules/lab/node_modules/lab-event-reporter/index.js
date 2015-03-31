'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function EventReporter(){
  EventEmitter.call(this);
}
util.inherits(EventReporter, EventEmitter);

EventReporter.prototype.start = function(notebook){
  this.emit('start', notebook);
};

EventReporter.prototype.test = function(test){
  this.emit('test', test);
};

EventReporter.prototype.end = function(notebook){
  this.emit('end', notebook);
};

module.exports = EventReporter;
