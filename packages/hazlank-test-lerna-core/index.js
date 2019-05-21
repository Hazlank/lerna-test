module.exports = {
  extendValue: function (x, y) {
    Object.assign(this, { x, y })
    return f =>  b(x, y + f)
  },
  count(x = 0, y = 0) {
    return x * y
  }
}

const b = function (x, y) {
 return class a {
  constructor() {
   this.c = x
  }
  b () {
    console.log(x, y)
  }
 }
}
