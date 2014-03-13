/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('gulp-ng generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('gulp-ng:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'app/app.css',
      'app/app.js',
      'app/app_controller.js',
      'app/app_controller_test.js',
      'app/index.html',
      'app/components/app_service.js',
      'app/components/app_service_test.js',
      'app/main/main.html',
      'app/main/main_controller.js',
      'app/main/main_controller_test.js',
      '.bowerrc',
      'bower.json',
      'gulpfile.js',
      'package.json'
    ];
    
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
