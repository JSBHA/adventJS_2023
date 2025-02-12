function cyberReindeer(road, time) {
  // Convertir la carretera a un array de caracteres
  let arrRoad = road.split("");
  // Encontrar la posición inicial del trineo
  let posSled = arrRoad.indexOf("S");
  let result = [];
  let lastChar = ".";

  // Almacenar el estado inicial de la carretera (tiempo 0)
  result.push(arrRoad.join(""));

  // Simular el paso del tiempo
  for (let t = 1; t <= time - 1; t++) {
    // Abrir las barreras después de 5 unidades de tiempo
    if (t === 5) {
      arrRoad = arrRoad.join("").replaceAll("|", "*").split("");
    }

    // Mover el trineo si no hay barrera cerrada
    if (arrRoad[posSled + 1] === "." || arrRoad[posSled + 1] === "*") {
      [arrRoad[posSled], lastChar] = [lastChar, arrRoad[posSled + 1]];
      arrRoad[posSled + 1] = "S";
      posSled++;
    }

    // Almacenar el estado actualizado de la carretera
    result.push(arrRoad.join(""));
  }

  return result;
}

// Ejemplo de uso
const road = "S..|...|..";
const time = 10;
console.log(cyberReindeer(road, time));
