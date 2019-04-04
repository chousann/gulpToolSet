function replace(file,srcStr,destStr) {
  console.log(file + ':' + srcStr + 'replace with' + destStr);
  // gulp.src(file)
  //   .pipe(exreplace(srcStr,destStr))
  //   .pipe(gulp.dest(file));
}

module.exports = {
  replace
 }