var Pet = {
  words: '...',
  speak: function(say){
    console.log(say + ' ' + this.words)
  }
}

// Pet.speak('Speak')

var Dog = {
  words: 'Wang'
}

Pet.speak.call(Dog, 'speak')
