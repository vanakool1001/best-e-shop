/**
 * Returns an integer between min and max (inclusive).
 */
export function randomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

/**
 * Roll `count` dice, each with `sides` sides. Returns an array of rolls.
 */
export function rollDice(count = 1, sides = 6) {
  const rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(randomInt(1, sides));
  }
  return rolls;
}

/**
 * Roll dice and also compute the sum.
 */
export function rollDiceAndSum(count, sides) {
  const rolls = rollDice(count, sides);
  const sum = rolls.reduce((acc, n) => acc + n, 0);
  return { rolls, sum };
}
