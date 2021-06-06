let cat = 'kitty'
//注意：CommonJS中使用exports导出，搭配require使用
//ES6中使用export导出，搭配import使用
exports.cat = cat   //将cat导出

exports.add = (a, b) => a + b
