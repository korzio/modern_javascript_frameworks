var obj = {
  a: function (){ console.log(this) },
  prop: 1
}

obj.a.prop = 2
obj.a() // ?
var fn = obj.a
fn() // ?