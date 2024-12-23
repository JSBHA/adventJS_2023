function findFirstRepeated(gifts) {

    const giftsId = {}; // Se crea un onjeto vacio para almacenar los ID
    let repite = -1 // Variable para detectar el primero que se repita 
     
    // Se rrecore la longitud de los regalos 
    for ( let i = 0; i < gifts.length; i++) {
      const id  = gifts[i]; // Se optiene el id del regalo en la posición actual

    // Si el ID ya existe en el objeto giftsId, significa que es el primer repetido
      if (giftsId[id] !== undefined) { 
         // Se guarda el ID repetido en la variable repite y se sale del bucle
        repite = id
        break
      }else
     // Si el ID no ha sido encontrado antes, se agrega al objeto giftsId con valor 1
        giftsId[id]= 1
      
      }
       // Se retorna el primer ID repetido encontrado o -1 si no hay repetidos
        return repite
        
  }

  const giftIds = [2, 1, 3, 5, 3, 2];
  const firstRepeatedId = findFirstRepeated(giftIds);

 const giftIds2 = [1, 2, 3, 4];
 const firstRepeatedId2 = findFirstRepeated(giftIds2);

 
const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)