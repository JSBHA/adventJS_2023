function maxDistance(movements) {
  // Inicializamos la posición en 0 (comienza en el origen)
  let position = 0;

  // Inicializamos la distancia máxima en 0
  let distance = 0;

  // Iteramos a través de cada movimiento en la secuencia de movimientos
  for (let movement of movements) {
    // Si el movimiento es '>', movemos hacia la derecha
    if (movement === ">") {
      position++; // Aumentamos la posición en 1 (derecha)
    }

    // Si el movimiento es '<', movemos hacia la izquierda
    else if (movement === "<") {
      position--; // Disminuimos la posición en 1 (izquierda)
    }

    // Si el movimiento es '*', incrementamos la distancia máxima alcanzada
    else if (movement === "*") {
      distance++; // Aumentamos el contador de distancia máxima
    }
  }

  // Retornamos la distancia máxima absoluta (posición) más la distancia alcanzada por '*'
  return Math.abs(position) + distance;
}

const movements = ">>*<";
const movements2 = "<<<>";
const movements3 = ">***>";

console.log(maxDistance(movements)); // 2
console.log(maxDistance(movements2)); // 2
console.log(maxDistance(movements3)); // 5
