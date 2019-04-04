var gulp = require('gulp');
//var exreplace = require('gulp-ex-replace');

gulp.task('default', function () {
  // 将你的默认的任务代码放在这
  console.log('hello gulp');
});

gulp.task('firstTask', function () {
  // 将你的默认的任务代码放在这
  console.log('gulp firstTask');
});

function replace(file,srcStr,destStr) {
  console.log(file + ':' + srcStr + 'replace with' + destStr);
  // gulp.src(file)
  //   .pipe(exreplace(srcStr,destStr))
  //   .pipe(gulp.dest(file));
}

module.exports = {
  replace
 }