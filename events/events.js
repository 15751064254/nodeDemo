var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
life.setMaxListeners(11);

function water(who){
  console.log('给' + who + '倒水');
}

life.on('求安慰', water);

life.on('求安慰', function(who){
  console.log('给' + who + '... 2');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 3');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 4');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 5');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 6');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 7');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 8');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 9');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 10');
});

life.on('求安慰', function(who){
  console.log('给' + who + '... 11');
});

life.on('求溺爱', function(who){
  console.log('给' + who + '... 12');
});

life.on('求溺爱', function(who){
  console.log('给' + who + '... 13');
});

life.removeListener('求安慰', water);
life.removeAllListeners('求安慰');

var hasConfortListener = life.emit('求安慰', '妹纸');
var hasLovedListener = life.emit('求溺爱', '妹纸');
var hasPlayedListener = life.emit('求玩坏', '妹纸和汉子');

console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life, '求安慰'));

console.log(life.listeners('求溺爱').length);

//console.log(hasConfortListener);
//console.log(hasLovedListener);
//console.log(hasPlayedListener);
