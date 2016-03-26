
// https://github.com/cognitom/symbols-for-sketch
// https://github.com/nfroidure/gulp-iconfont/
// https://github.com/backflip/gulp-iconfont-css

// Install NodeJS
// > sudo npm install -g gulp
// > npm install
// > gulp
// > npm list --depth=0


var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var iconfontCss = require('gulp-iconfont-css');

var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'HippoIcons';
var className = 'hippoicon';


gulp.task('generate-icons', function(){

  return gulp.src(['src/*.svg'])

  .pipe(iconfontCss({
    cssClass : className,
    fontName: fontName,
    path: 'css-templates/_icons.css',
    targetPath: '../../css/'+className+'.css', // to generate css file
    fontPath: '../fonts/' + className + '/'    // to add font url on css file
  }))

  .pipe(iconfont({
      fontName: fontName,
      prependUnicode: true, // recommended option 
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available 
      timestamp: runTimestamp, // recommended to get consistent builds when watching files 
    }))

  .pipe(gulp.dest('dist/fonts/' + className + '/'));

});

gulp.task('minify-css', ['generate-icons'], function(){

  return gulp.src(['dist/css/*.css'])
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'));

});

gulp.task('default', ['minify-css']);

