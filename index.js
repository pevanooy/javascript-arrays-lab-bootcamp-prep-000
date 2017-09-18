const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
 kittens.unshift(name)
 return kittens
}
function destructivelyRemoveLastKitten(){

}
function destructivelyRemoveFirstKitten(){

}
function appendKitten(name){
 var newkittens = [...kittens, name]
 return newkittens
}
function prependKitten(name){
  var newkittens = [name, ...kittens]
  return newkittens
}
function removeLastKitten(){

}
function  removeFirstKitten(){

}
