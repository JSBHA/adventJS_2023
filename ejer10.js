function createChristmasTree(ornaments, height) {
  let tree = ""; // Cadena para almacenar el árbol completo
  let ornamentCount = 0; //Recorrer los adornos cíclicamente

  //Bucle para construir cada nivel del árbol
  for (let i = 1; i <= height; i++) {
    let row = ""; // Cadena para almacenar la línea actual
    let numOrnaments = i; // Número de adornos en la línea actual
    let spaces = " ".repeat(height - i); // Espacios a la izquierda para centrar
    tree += spaces;

    // Añadir adornos a la línea
    for (let j = 0; j < numOrnaments; j++) {
      row += ornaments[ornamentCount] + " ";
      ornamentCount = (ornamentCount + 1) % ornaments.length; // Ciclo de adornos
    }
    //Eliminar el espacio final y añadir la línea al árbol
    tree += row.slice(0, -1) + "\n";
  }

  // Añadir el tronco, centrado
  let trunk = " ".repeat(height - 1);
  tree += trunk + "|\n";

  return tree;
}

let arbol1 = createChristmasTree("123", 5);
console.log(arbol1);
let arbol2 = createChristmasTree("*@o", 3);
console.log(arbol2);
