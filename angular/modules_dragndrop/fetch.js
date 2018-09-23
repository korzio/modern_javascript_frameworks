var myImage = document.querySelector('img')

var myRequest = new Request('flowers.jpg')

fetch(myRequest).then(function(response) {
  return response.blob()
}).then(function(response) {
  var objectURL = URL.createObjectURL(response)
  myImage.src = objectURL
})