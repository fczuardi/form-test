# form-test

A simple example of a login form in [React JS][reactjs] and a simple reference
of a cookie-based session manager backend.

## Requirements

- [io.js][iojs]

## Install

    git clone https://github.com/fczuardi/form-test.git
    cd form-test
    npm install

## Main Build task

Creates a ```/dist/www``` folder with the html and js files, bundled from the
```/src/components``` jsx components and ```/node_modules``` 3rd party
libraries.

    ./node_modules/gulp/bin/gulp.js

or simply

    gulp

If you have [Gulp][gulp] installed [globally][gulpglobalinstall].

### Other gulp tasks

Check the ```gulpfile.js``` file.

## Reference backend

If you want to test it with a reference web-server that serves the static files
and simulates responses for the ajax calls made by the front-end, you can run:

    npm start

[reactjs]: http://facebook.github.io/react/
[iojs]: https://iojs.org/
[gulp]: http://gulpjs.com/
[gulpglobalinstall]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally
