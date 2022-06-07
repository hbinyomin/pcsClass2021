/*export default () => console.log('foo');
export function bar() { console.log('bar'); }

import foo from 'myModule';
import { bar } from 'myModule';*/

/*module.exports.foo = () => console.log('foo');
exports.bar = () => console.log('bar');

module.exports = {
  foo: () => console.log('foo'),
  bar: () => console.log('bar')
};

exports = {
  foo: () => console.log('foo'),
  bar: () => console.log('bar')
};

exports = module.exports = {
  foo: () => console.log('foo'),
  bar: () => console.log('bar')
};*/

/*let x = 5;
y = x;
y = 7;*/

function cantBeUsedOutside() {
  console.log('In cant be used outside');
}

/*exports.sayHello = () => console.log('Hello');
exports.sayGoodbye = () => {
  console.log('Goodbye');
  cantBeUsedOutside();
};*/

module.exports = {
  sayHello: () => console.log('Hello'),
  sayGoodbye: () => {
    console.log('Goodbye');
    cantBeUsedOutside();
  }
};

const P = require('./Person');
const joe = new P('Joe', 130);
joe.sayName();
joe.sayAge();
