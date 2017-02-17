'use strict';
var gulp = require('gulp');
var through = require('through2');
var ext_replace = require('gulp-ext-replace');
var fs = require('fs');
var path = require('path');
var rename = require("gulp-rename");
var phantom = require('phantom');
var connect = require('gulp-connect');
var template = fs.readFileSync("layout/index.html").toString();

var templatePlugin = function() {
  return through.obj(
  function (file, encoding, done) {
    var content = file.contents.toString();
    var mergedContent = template.replace('<!-- MD FILE INSERT -->', content);

    file.contents = new Buffer(mergedContent);
    console.log(file.path);

    this.push(file);
    return done();
  })
};

gulp.task('assets', function() {
  return gulp.src('layout/*/**')
    .pipe(gulp.dest('exports/layout'));
})

gulp.task('html', function(){
  return gulp.src('content/*/**.md')
    .pipe(templatePlugin()) // This is what places the markdown into the html layout
    .pipe(rename(function (path) {
      path.dirname += "/" + path.basename;
      path.basename = "index";
      path.extname = ".html"
    }))
    .pipe(gulp.dest('exports'))
    .pipe(connect.reload());
});

var phantom = require("phantom");
var _ph, _page, _outObj;

phantom.create().then(ph => {
    _ph = ph;
    return _ph.createPage();
}).then(page => {
    _page = page;
    _page.property('paperSize', {
        width: '297mm',
        height: '210mm',
        margin: '0mm'
    });
    return _page.open('https://stackoverflow.com/');
}).then(status => {
    _page.render('test.pdf');
    return _page.property('content')
}).then(content => {
    _page.close();
    _ph.exit();
}).catch(e => console.log(e));

// gulp.task('pdf', function(){
//   return gulp.src('client/templates/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('build/html'))
// });

gulp.task('connect', function() {
  return connect.server({
    root: 'exports',
    livereload: true,
    port: 8000
  });
});

gulp.task('watch', function () {
  return gulp.watch(['./content/*/**', './layout/*/**'], ['build']);
});

gulp.task('reload', function() {
  return gulp.src("").pipe(connect.reload());
});

gulp.task('default', ['build']);
gulp.task('build', ['assets', 'html']);
gulp.task('serve', ['build', 'connect', 'watch']);