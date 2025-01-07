import { Person } from './types.js';
import { greet } from './lib/greeter.js';

const person: Person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(greet(person));
