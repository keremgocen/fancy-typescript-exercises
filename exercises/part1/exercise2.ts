/**
 * concatMessages currently accepts 0..n arguments.
 * Change the signature, so that it requires at least one argument!
 */

// hint: overloading is the solution for this one
function concatMessages(message: string, ...rest: string[]): string;
function concatMessages(...messages: string[]) {
  return messages.join(", ");
}

// alternative solution
// function concatMessages(...messages: [string, ...string[]]) {
//   return messages.join(", ");
// }

// Correct invocations
concatMessages("Hello");
concatMessages("Hello", "World");

// These lines should all trigger compile errors:
concatMessages(); // Make sure this errors! at least one string is required
concatMessages("Hello", 42);
concatMessages(1, 2, 3);
