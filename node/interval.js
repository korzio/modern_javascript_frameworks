var a = setInterval(() => console.log(1), 1200)

setTimeout(() => {
  a.unref()
}, 4000)