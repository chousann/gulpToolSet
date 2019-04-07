var gulp = require('gulp');
var exreplace = require('gulp-ex-replace');
function replace(file, srcStr, destStr) {
  var stream = gulp.src(file,{allowEmpty:true});
  if(stream =='undefined' || stream == null){
    console.log('file does not exist');
    return;
  }
  console.log(stream.pipe(exreplace(srcStr, destStr)));
}

module.exports = {
  replace
}