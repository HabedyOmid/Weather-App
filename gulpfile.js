// node.js Packages / Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// Paths
var paths = {
  src: {
    root: 'assets',
    css: 'assets/css/*.css',
    js: 'assets/js/*.js',
    scss: 'assets/scss/**/*.scss',
    imgs: 'assets/imgs/**/*.+(png|jpg|gif|svg)'
  },
  dist: {
    root: 'public',
    css: 'public/css',
    js: 'public/js',
    imgs: 'public/imgs'
  }
};

// Compile SCSS
gulp.task('sass', () => {
  return gulp
    .src(paths.src.scss)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.src.root + '/css'))
    .pipe(browserSync.stream());
});

// Minify + Combine CSS
gulp.task('css', () => {
  return gulp
    .src(paths.src.css)
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(paths.dist.css));
});

// Minify + Combine JS
gulp.task('js', () => {
  return gulp
    .src(paths.src.js)
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
});

// Compress (JPEG, PNG, GIF, SVG, JPG)
gulp.task('img', () => {
  return gulp
    .src(paths.src.imgs)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest(paths.dist.imgs));
});

// Prepare all assets for production
gulp.task('build', gulp.series('sass', 'css', 'js', 'img'));

// Watch (SASS, CSS, JS) reload browser on change
gulp.task('watch', () => {
  gulp.watch(paths.src.scss, gulp.series('sass'));
  gulp.watch(paths.src.css, gulp.series('css'));
  gulp.watch(paths.src.js, gulp.series('js'));
});
