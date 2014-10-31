// Load cha library.
var cha = require('cha');
var gulp = require('../');

cha.in('autoprefixer', gulp('gulp-autoprefixer'))
    .in('less', gulp('gulp-less'))
    .in('reader', require('task-reader'))
    .in('writer', require('task-writer'))

cha()
    .reader(__dirname + '/fixtures/foo.less')
    .less()
    .autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    })
    .writer(__dirname + '/fixtures/foo.css')
