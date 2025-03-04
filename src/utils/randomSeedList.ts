
/**
 * Generates a random seed string, which is a random number represented as a string, 
 * without the leading '0.' prefix that is added by the default `toString()` method.
 *
 * @returns A random seed string.
 */

export   function generateRandomSeed(): string {
    const randomNumber = Math.random();
    const randomSeed = randomNumber.toString().replace('0.', '');
    return randomSeed;
}