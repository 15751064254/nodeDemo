var globalVariable = 'This is globalVariable'

function globalFunction(){
  var localVariable = 'This is loval variable'

  console.log('Visit global/loval variable')
  console.log(globalVariable)
  console.log(localVariable)

  console.log('--------------------')
  globalVariable = 'This is changed variable'
  console.log(globalVariable)

  function localFunction(){
    var innerLocalVariable = 'This is inner local variable'

    console.log('--------------------')
    console.log('Visit global/local/innerLocal variable')
    console.log(globalVariable)
    console.log(localVariable)
    console.log(innerLocalVariable)
  }

//  console.log(innerLocalVariable)
  localFunction()
}

globalFunction()
