function createChristmasTree(ornaments, height) {
    let tree = '';
    let ornamentsLength = ornaments.length;
  
    for (let i = 1; i <= height; i++) {
      let row = '';
  
      // Construir cada fila utilizando los adornos de forma cíclica
      for (let j = 0; j < i; j++) {
        row += ornaments[j % ornamentsLength] + ' ';
      }
      
      row = row.trim();  // Eliminar el espacio final extra
      let spaces = ' '.repeat(height - i);  // Espacios a la izquierda para centrar
      tree += spaces + row + '\n';
    }
  
    // Añadir el tronco, centrado
    tree += ' '.repeat(height - 1) + '|\n';
    
    return tree;
  }
  

let arbol1 = createChristmasTree("123", 4);
console.log(arbol1);
let arbol2 = createChristmasTree("*@o", 3);
console.log(arbol2);
