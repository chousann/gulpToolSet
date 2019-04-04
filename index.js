var gulptoolset = require('./gulptoolset');
exports.PackageName = function() {
  console.log("I am gulptoolset package");
  return "gulptoolset";
}

exports.replace = gulptoolset.replace;