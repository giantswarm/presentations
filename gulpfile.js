'use strict';
var gulp = require('gulp');
var through = require('through2');
var ext_replace = require('gulp-ext-replace');
var fs = require('fs');
var path = require('path');
var rename = require("gulp-rename");
var phantom = require('phantom');

var template = fs.readFileSync("layout/index.html").toString();

var templatePlugin = through.obj(
  function (file, encoding, done) {
    var content = file.contents.toString();
    var mergedContent = template.replace('<!-- MD FILE INSERT -->', content);

    file.contents = new Buffer(mergedContent);
    console.log(file.path);

    this.push(file);
    return done();
});

gulp.task('html', function(){
  gulp.src('layout/*/**')
  .pipe(gulp.dest('exports/layout'));

  return gulp.src('content/*/**.md')
    .pipe(templatePlugin)
    .pipe(rename(function (path) {
      path.dirname += "/" + path.basename;
      path.extname = ".html"
    }))
    // .pipe(ext_replace('.html'))
    .pipe(gulp.dest('exports'))
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

gulp.task('default', [ 'html']);