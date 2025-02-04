function drawGift(size, symbol) {
  if (size === 1) return "#\n";

  const base = size - 2; // La cantidad de símbolos que ocupan las caras del regalo

  // Parte superior
  const top = `${"#".repeat(size)}\n`;

  // Parte media (justo en el centro)
  const medio = `${"#".repeat(size)}${symbol.repeat(base)}#\n`;

  let arriba = ""; // Parte superior del regalo
  let abajo = []; // Parte inferior del regalo

  // Construir la parte superior del regalo
  for (let i = 0; i < base; i++) {
    // Construir cada parte de la línea de manera clara
    const symbolPart = symbol.repeat(base); // Parte con los símbolos repetidos
    const spaces = " ".repeat(base - i); // Espacios para centrar la línea
    const rightSymbols = symbol.repeat(i); // Símbolos en el lado derecho

    // Concatenamos la línea completa
    const temp = `#${symbolPart}#${rightSymbols}#`; // Combinamos todos los elementos

    // Concatenar la parte superior
    arriba += `${spaces}${temp}\n`;

    // Llenamos la parte inferior (de manera invertida)
    abajo[base - i - 1] = temp + "\n";
  }

  // Devolvemos el regalo completo
  const gift =
    " ".repeat(size - 1) + top + arriba + medio + abajo.join("") + top;
  return gift;
}
console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));
console.log(drawGift(1, "^"));
