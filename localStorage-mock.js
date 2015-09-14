var localStorage = {}
var store = {}
localStorage.length = 0
var updateLength = function(n){
  localStorage.length = (n || Object.keys(store).length)
}
	
localStorage.key = function(n) {
  if(n >= localStorage.length) return -1
  return Object.keys(store)[n]
}
localStorage.getItem = function(selector) {
  return store[selector]
}
localStorage.setItem = function(key, value) {
  store[key] = value
  updateLength()
}
localStorage.removeItem = function(key) {
  delete store[key]
  updateLength()
}
localStorage.clear = function() {
  store = {}
  updateLength(0)
}
module.exports = localStorage
