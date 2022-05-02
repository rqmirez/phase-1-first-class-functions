function receivesAFunction(callback){
   return callback()
}

function returnsANamedFunction(){
    const newFunction = () => console.log('named function')
    return newFunction
}

function returnsAnAnonymousFunction(){
  return function(){
  }
}