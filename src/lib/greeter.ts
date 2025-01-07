import { Person } from '../types.js';

export function greet(person: Person): string {
  return `Hello ${person.firstName} ${person.lastName}!`;
}
