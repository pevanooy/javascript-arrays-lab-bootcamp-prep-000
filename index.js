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
 kittens = [kittens, ...name]
 return kittens
}
function prependKitten(name){
  kittens = [...name, kittens]
  return kittens
}
function removeLastKitten(){

}
function  removeFirstKitten(){

}
