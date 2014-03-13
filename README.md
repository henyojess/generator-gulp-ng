This is a yeoman generator for an angularjs project that follows the [Best Practice Recommendations for Angular App Structure][1].

It takes advantage of the gulp build tool and makes use of bower and npm for dependency management.

-----

#### DIRECTORY STRUCTURE ####

    app/
      components/
        app_service.js
        app_service_test.js
      main/
        main.html
        main_controller.js
        main_controller_test.js
      app.css
      app.js
      app_controller.js
      app_controller_test.js
      index.html
    bower_components/    
    node_modules/
    .bowerrc
    .gitignore
    README.md
    bower.json
    gulpgile.js
    package.json

-----

#### FEAUTURES ####
- follows the recommended best practice project structure for angularjs
- all js files in the app folder are concatenated into build/app.js
- all html files in the app folder except index.html are concatenated and compiled into a js file:build/templates.js and loaded into angular templateCache
- all css files in the app folder are concatenated into build/app.css
- all js files in the bower_components folder are concatenated into build/lib.js
- all css files in the bower_components folder are concatenated into build/lib.css
- index.html is copied to build/index.html
- a static server is run at port 9000 with livereload support
- when any html, js or css file in the build folder changes, they are autoreloaded on the browser

-----

#### Prerequisites ####
- node.js [http://nodejs.org/][2]
- npm [http://www.npmjs.org/][3]
- bower [http://bower.io/][4]
- gulp.js [http://gulpjs.com/][5]

-----

#### USAGE ####
1) npm install -g generator-gulp-ng

2) mkdir myApp && cd myApp && yo gulp-ng

3) gulp

4) open browser to http://localhost:9000

5) start hacking

----

#### Support ####
For questions and issues: [https://github.com/henyojess/generator-gulp-ng/issues][6]


  [1]: https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
  [2]: http://nodejs.org/
  [3]: http://www.npmjs.org/
  [4]: http://bower.io/
  [5]: http://gulpjs.com/
  [6]: https://github.com/henyojess/gulp-ng-seed/issues
