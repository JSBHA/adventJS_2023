function adjustLights(lights) {
    let changeRed = 0; // Contador para el patrón que empieza con 🔴
    let changeGreed = 0; // Contador para el patrón que empieza con 🟢
  
    //Recorrer el array de luces
    for (let i = 0; i < lights.length; i++){
      // Determinar el color esperado para el patrón 1 y patrón 2
      let changePattern = (i % 2 === 0) ? '🔴' :  '🟢'
      let changePattern1 = (i % 2 === 0) ? '🟢' :  '🔴'
  
      //Comparar y contar los cambios necesarios
      if (lights[i] !== changePattern){
        changeRed++;// Incrementar el contador para el patrón 1
      }
      // Incrementar el contador para el patrón 2
      if (lights[i] !== changePattern1){
        changeGreed++
      } 
    }
     //Devolver el menor de los dos contadores (el patrón que requiere menos cambios)
    return Math.min(changeRed, changeGreed);
  }

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])); // 1
console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])); // 1
console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])); // 2
console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])); // 0
console.log(adjustLights(["🔴", "🔴", "🔴"]));
