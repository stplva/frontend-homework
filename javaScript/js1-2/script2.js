var list = [];

for (var i = 0; i < 5; i++) {
  list[i] = prompt('Enter 5 names to create a list:');
}
console.log('List:', list);
console.log('Your list of names is ready! Now enter your userName.');

var userName = prompt("Now enter your userName:");

console.log('Your name:', userName);

var text = 'You are not registered.';

for (var i = 0; i < list.length; i++) {
  if (userName == list[i]) {
    text = (userName + ', you have successfully logged in!');
  }
}

alert(text);
