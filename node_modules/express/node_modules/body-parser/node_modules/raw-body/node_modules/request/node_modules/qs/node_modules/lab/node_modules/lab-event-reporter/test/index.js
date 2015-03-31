'use strict';

var lab = exports.lab = require('lab').script();
var code = require('code');

var Reporter = require('../');

lab.experiment('EventReporter', function(){

  var reporter;

  lab.beforeEach(function(done){
    reporter = new Reporter();
    done();
  });

  lab.test('emits start on start', function(done){
    var notebook = { hello: 'world' };

    reporter.on('start', function(result){
      code.expect(result).to.equal(notebook);
      done();
    });

    reporter.start(notebook);
  });

  lab.test('emits test on test', function(done){
    var test = { hello: 'world' };

    reporter.on('test', function(result){
      code.expect(result).to.equal(test);
      done();
    });

    reporter.test(test);
  });

  lab.test('emits end on end', function(done){
    var notebook = { hello: 'world' };

    reporter.on('end', function(result){
      code.expect(result).to.equal(notebook);
      done();
    });

    reporter.end(notebook);
  });
});
