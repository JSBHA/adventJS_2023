function manufacture(gifts, materials) {
  const result = [];

  for (const gift of gifts) {
    let availableMaterials = materials;

    //Suponemos que podemos fabricar el regalo
    let canBeManufactured = true;

    // Intentamos "usar" cada letra del regalo
    for (const char of gift) {
      const index = availableMaterials.indexOf(char);

      // Si la letra no está disponible, no se puede fabricar el regalo
      if (index === -1) {
        canBeManufactured = false;
        break;
      }
    }
    // Si podemos fabricarlo, lo añadimos al resultado
    if (canBeManufactured) {
      result.push(gift);
    }
  }
  return result;
}

const gifts = ["coroso", "puzzle"];
const materials = "ocrs";
console.log(manufacture(gifts, materials));

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'
console.log(manufacture(gifts1, materials1));

