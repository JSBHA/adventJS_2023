function decode(message) {

    let result = []; // Este resultado se usará para almacenar las subcadenas dentro de paréntesis
    let current = ''; // Esto mantiene la subcadena que estamos procesando actualmente

     // Iteramos sobre cada carácter del mensaje
    for (let char of message) {

        // Si encontramos un parentesis de apertura 
        if (char === '('){
            //Apilamos el contenido actual y comenzamos una nueva subcadena
            result.push(current);
            current = '' ; // Reiniciamos la subcadena actual para lo que esté dentro del paréntesis

         // Si encontramos un parentesis de cierre 
        }else if (char === ')'){
            current = current.split('').reverse().join('');
            let top = result.pop();  // Sacamos el último bloque de la pila
            current = current + top; // Concatenamos el bloque anterior con el contenido procesado                             
        }else{
            current += char // Si es un carácter normal, lo añadimos al bloque actual
        }
        
    } 
    return current
  }

  const a = decode('hola (odnum)')
  const b = decode('(olleh) (dlrow)!')
  const c = decode('sa(u(cla)atn)s')