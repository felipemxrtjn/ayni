'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'AyniAdmin',
      root: 'app'
    }))
    .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});
gulp.task('ayni-dependencies', function(){    
  return gulp.src([
          path.join(conf.paths.src, './../dependencies/oidc-client.js'),
          path.join(conf.paths.src, './../dependencies/jquery.js'),
          path.join(conf.paths.src, './../configprod/ayniconfig.js')          
         ])           
        .pipe(gulp.dest(conf.paths.dist + '/scripts/'));
});

gulp.task('html', ['inject', 'partials', 'ayni-dependencies'], function () {
  var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false }); 

  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/partials'),
    addRootSlash: false
  };

  var partialsInjectAuthFile = gulp.src([
    path.join(conf.paths.dist, '/scripts/oidc-client.js'),
    path.join(conf.paths.dist, '/scripts/jquery.js')    
    ], { read: false });

  var partialsInjectAuthOptions = {
    starttag: '<!-- inject:authentication -->',
    ignorePath: conf.paths.dist,
    addRootSlash: false 
  };

  var configInjectFile =  gulp.src([   
      path.join(conf.paths.dist, '/scripts/appconfig.js')
    ], { read: false });    


  var htmlFilter = $.filter('*.html', { restore: true, dot:true});
  var jsFilter = $.filter('**/*.js', { restore: true, dot:true});
  var cssFilter = $.filter('**/*.css', { restore: true, dot:true});
  var assets;
  
  //
  //.pipe($.inject(partialsInjectAuthFile, partialsInjectAuthOptions))
  //.pipe($.inject(configInjectFile, { starttag: '<!-- inject:configuration -->', ignorePath: conf.paths.dist, addRootSlash: false }))
  return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))    
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))    
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.ngAnnotate())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe($.sourcemaps.init())
    .pipe($.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
    .pipe($.minifyCss({ processImport: false }))
    .pipe($.sourcemaps.write('maps'))
    .pipe(cssFilter.restore)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
    .pipe(htmlFilter.restore)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
  });

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});

gulp.task('other', ['copyVendorImages'], function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss,md}'),
    path.join(conf.paths.tmp, '/serve/**/assets/img/theme/vendor/**/*')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('clean', function () {
  return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

gulp.task('build', ['html', 'fonts', 'other']);
