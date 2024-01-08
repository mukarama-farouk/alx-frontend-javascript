export default function cleanSe(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input: set must be a Set and startString must be a string');
  }
  return Array.from(set)
    .filter(value => value !== null && value !== undefined && typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
