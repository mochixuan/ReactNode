var person1 = require('./test2')
person1.name = 'w1';
person1.person.name = 'w2';
console.log(person1)
require('./test3')