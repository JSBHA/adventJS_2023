function findNaughtyStep(original, modified) {
  if (original === modified) return "";

  // Original sea mayor que el modificado
  if (original.length > modified.length) {
    return [...original].find((v, i) => modified[i] !== v);
  }

  // Modificado sea mayor que el original

  if (original.length < modified.length) {
    return [...modified].find((v, i) => original[i] !== v);
  }
}

let original = "abcd";
let modified = "abcde";
findNaughtyStep(original, modified); // 'e'

original = "stepfor";
modified = "stepor";
console.log(findNaughtyStep(original, modified)); // 'f'

original = "abacde";
modified = "abcde";
findNaughtyStep(original, modified);

original = "xxxxx";
modified = "xxxx";
findNaughtyStep(original, modified);