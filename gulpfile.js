"use strict";
const gulp = require("gulp");
const browsersync = require("browser-sync");


// var paths = {
//   html: {
//     src: 'src/*.html',
//     dest: 'dist'
//   },
//   scripts: {
//     src: 'src/js/*.js',
//     dest: 'dist/js'
//   },
//   assets: {
//     src: 'src/assets/**/*.*',
//     dest: 'dist/assets'
//   }
// };

var paths = {
  html: {
    src: 'src/*.html',
    dest: '/Applications/MAMP/htdocs/broo'
  },
  scripts: {
    src: 'src/js/*/*.js',
    dest: '/Applications/MAMP/htdocs/broo/js'
  },
  assets: {
    src: 'src/assets/**/*.*',
    dest: '/Applications/MAMP/htdocs/broo/assets'
  }
};

function html() {
  return gulp.src(paths.html.src)
                .pipe(gulp.dest(paths.html.dest))
                .pipe(browsersync.stream());
}

function scripts() {
  return gulp.src(paths.scripts.src)
                .pipe(gulp.dest(paths.scripts.dest))
                .pipe(browsersync.stream());
}

function assets() {
  return gulp.src(paths.assets.src)
                .pipe(gulp.dest(paths.assets.dest))
                .pipe(browsersync.stream());
}

function watch() { 
  gulp.watch(paths.html.src, html); 
  gulp.watch(paths.scripts.src, scripts); 
  gulp.watch(paths.assets.src, assets);
} 

var build =  gulp.parallel(html,scripts, assets);

exports.html = html;
exports.scripts = scripts;
exports.assets = assets;
exports.watch = watch;
exports.default = build;
