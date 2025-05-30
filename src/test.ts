// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// const duplicateCount = (text: string): number => {
//   const lowercaseText = text.toLowerCase();

//   const charCount = new Map<string, number>();
//   for (const char of lowercaseText) {
//     if (charCount.has(char)) {
//       charCount.set(char, charCount.get(char)! + 1);
//     }
//   }

//   return Array.from(charCount.values()).filter((count) => count > 1).length;
// };

// console.log(duplicateCount('abcde')); // 0
// console.log(duplicateCount('aabbcde')); // 2

console.log('Hello, world!'); // 2
