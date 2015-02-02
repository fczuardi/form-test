var gulp = require('gulp'),
    del = require('del'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify');

gulp.task('clean', function (cb){
    del(['./dist/www/**'], cb);
});

gulp.task('bundle', function(){
    var bundler =  browserify({
        entries: ['./src/components/app.jsx'],
        transform: [reactify]
    });
    return bundler.bundle()
            .pipe(source('all.js'))
            .pipe(gulp.dest('./dist/www/js'));
});

gulp.task('html', function(){
    return gulp.src(['./src/html/*.html'])
            .pipe(gulp.dest('./dist/www'));
});

gulp.task('default', ['bundle', 'html']);
