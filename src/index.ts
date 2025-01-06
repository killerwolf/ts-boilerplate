import { greet } from './lib/greeter'
import { Person } from './types'

const person: Person = {
  firstName: 'Jane',
  lastName: 'Doe',
}

console.log(greet(`${person.firstName} ${person.lastName}`))
