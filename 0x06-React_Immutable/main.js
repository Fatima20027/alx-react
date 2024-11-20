import { getImmutableObject } from './0-fromjs';

const obj = { name: "Tsuki", age: 25, hobbies: ["coding", "reading"] };
const immutableMap = getImmutableObject(obj);

console.log(immutableMap); // Outputs an Immutable.js Map
