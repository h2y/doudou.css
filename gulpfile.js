const gulp = require('gulp'),
      $    = require('gulp-load-plugins')();


const cleanCssSettings = {
    //https://github.com/jakubpawlowicz/clean-css#constructor-options
    level: {
        1: {
            specialComments: 0
        },
        2: {
            all: true
        }
    }
};

const buildHeaderString = ()=>{
    let timeStr = new Date().toUTCString();
    return `/*! doudou.css | ${timeStr} | GPL-v3 | github.com/hzy/doudou.css */\n`;
};


////////////////////////////////////////////////////////////////////////////////

//default
gulp.task('default', function() {
    return gulp.src('lib/main.less')

    .pipe($.less())
    .pipe($.autoprefixer({
        browsers: ['> 5%']
    }))

    .pipe($.rename('doudou.css'))
    .pipe(gulp.dest('dist'))

    .pipe($.sourcemaps.init())
    .pipe($.cleanCss(cleanCssSettings))
    .pipe($.header(buildHeaderString()))
    .pipe($.sourcemaps.write('.'))

    .pipe($.rename('doudou.min.css'))
    .pipe(gulp.dest('dist'));
});


//watch
gulp.task('watch', ['default'], function() {
    gulp.watch('lib/**/*', ['default']);
});
