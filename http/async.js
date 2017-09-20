//var i = 0
//while(true){
//  i++
//}

//var c = 0
//
//function printIt(){
//  console.log(c)
//}
//
//function plus(callback){
//  setTimeout(function(){
//    c += 1
//    callback()
//  }, 1000)
//}
//
//plus(printIt)

var c = 0

function printlt(){
  console.log(c)
}

function plus(){
  setTimeout(function(){
    c += 1
  }, 1000)

//  c += 1
}

plus()
printlt()
