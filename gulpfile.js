"use strict";
const gulp = require("gulp");
const webpack = require ("webpack-stream");
const browsersync = require("browser-sync");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');



// var paths = {
//   html: {
//     src: 'src/*.html',
//     dest: 'dist'
//   },
//   scripts: {
//     src: 'src/js/**/*.js',
//     dest: 'dist/js'
//   },
//   css: {
//     src: 'src/assets/css/*.css',
//     dest: 'dist/assets/css'
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
    src: 'src/js/**/*.js',
    dest: '/Applications/MAMP/htdocs/broo/js'
  },
  css: {
    src: 'src/assets/css/*.css',
    dest: '/Applications/MAMP/htdocs/broo/assets/css'
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
  return gulp.src("src/js/main.js")
                .pipe(webpack({
                  mode: 'development',
                  output: {
                    filename: 'script.js',
                  },
                  watch: false,
                  devtool: "source-map",
                  module: {
                    rules: [
                      {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                          loader: 'babel-loader',
                          options: {
                            presets: [['@babel/preset-env', {
                                debug: true,
                                corejs: 3,
                                useBuiltIns: "usage"
                            }]]
                          }
                        }
                      }
                    ]
                  }
                }))
                .pipe(gulp.dest(paths.scripts.dest));
}

function css() {
  return gulp.src(paths.css.src)
		.pipe(autoprefixer({
			cascade: false
		}))
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(paths.css.dest));
}

function assets() {
  return gulp.src(paths.assets.src)
                .pipe(gulp.dest(paths.assets.dest))
                .pipe(browsersync.stream());
}



function watch() { 
  gulp.watch(paths.html.src, html); 
  gulp.watch(paths.scripts.src, scripts); 
  gulp.watch(paths.css.src, css); 
  gulp.watch(paths.assets.src, assets);
} 

var build =  gulp.parallel(html,scripts,css,assets);

exports.html = html;
exports.scripts = scripts;
exports.assets = assets;
exports.css = css;
exports.watch = watch;
exports.default = build;
