var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var qunit = require('gulp-qunit');
var taskListing = require('gulp-task-listing');



/**
 * gulp jshint
 * Will run jshint js files (excluding libs)
 */
gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
	.pipe(jshint())
 	.pipe(jshint.reporter('default'))
 	.pipe(jshint.reporter('fail'))
	.on("error", notify.onError('jshint failed check terminal'));

 });

/**
 * gulp test
 * Will run QUnit tests
 */
gulp.task('test', function() {
    return gulp.src('./test/index.html')
    .pipe(qunit())
    .on("error", notify.onError('Test failed check terminal'));
});


/**
 * gulp prod
 * Will create bundle.min.js uglified in js/build folder.
 * If jshint and tests pass
 */
gulp.task('prod', ['jshint', 'test'], function() {
	return gulp.src(['./js/lib/*js', './js/*.js'])
	.pipe(concat('bundle.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./js/build'));
});

/**
 * gulp develop
 * Will create bundle.js with sourcemaps in js/build
 */
gulp.task('develop', function() {
  	return gulp.src(['./js/lib/*js', './js/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./js/build'))
		.pipe(notify('bundle.js build'));
});

/**
 * Will list all available tasks
 */
gulp.task('help', taskListing);


/**
 * gulp default
 * run it with:
 * $  gulp
 * Will watch all js files and run develop on change.
 */
gulp.task('default', function() {
	 gulp.watch('./js/*.js', ['prod']);
});
