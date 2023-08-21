//require,exports,module,__dirname,__filename
// console.log(__dirname)
// console.log(__filename)
// console.log(module)
// console.log(exports)
/*let names = ['navya','sree']
let grade = [100,99]
exports = names
console.log(module)
console.log(exports)*/// this is just assigning names to export in module we can see its empty

let names = ['navya','sree']
let grade = [100,99]
//module.exports = names
//module.exports=grade//this willl replace above one so we use module.exports.name and module.exports.grade
module.exports.names=names
module.exports.grade=grade// we can just use exports.grade and name
exports.data=[1,2,3]
exports.data='navya'//will replace above one
console.log(module)
