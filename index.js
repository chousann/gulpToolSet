var gulptoolset = require('./gulptoolset');
exports.PackageName = function() {
  console.log("I am gulptoolset package");
  return "gulptoolset";
}

console.log('exports:');
console.log(exports);
console.log('require:');
console.log(require);
console.log('module:');
console.log(module);
console.log(__dirname);
// 打印: /Users/mjr
console.log(__filename);
//gulptoolset.replace('gulpfile1.js', '1111', '2222');
exports.replace = gulptoolset.replace;