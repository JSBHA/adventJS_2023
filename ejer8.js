function organizeGifts(gifts) {
  let result = "";
  let regex = /(\d+)([a-z])/g;
  let match;

  while ((match = regex.exec(gifts)) !== null) {
    let quantity = parseInt(match[1]);
    let giftType = match[2];

    let boxes = Math.floor(quantity / 10); // Número de cajas (cada una tiene 10)
    let remainingGifts = quantity % 10; // Los regalos que no forman una caja completa
    let palets = Math.floor(boxes / 5); // Palets (cada uno tiene 5 cajas)
    let remainingBoxes = boxes % 5; // Las cajas que quedan fuera de los palets

    // Agregar los palets de forma
    if (palets > 0) {
      result += `[${giftType}]`.repeat(palets); // Añadir palets
    }
    // Agregar las cajas restantes, separadas de forma individual
    if (remainingBoxes > 0) {
      for (let i = 0; i < remainingBoxes; i++) {
        result += `{${giftType}}`; // Añadimos cajas separadas
      }
    }

    // Agregar los regalos restantes
    if (remainingGifts > 0) {
      result += `(${giftType.repeat(remainingGifts)})`;
    }
  }

  return result;
}

const result1 = organizeGifts("76a11b");
console.log(result1);
