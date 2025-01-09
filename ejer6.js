function maxDistance(movements) {

    let position  = 0;
    let distance = 0;

    for ( let movement of movements){       
         if (movement === '>'){
            position ++;
        } else if (movement === '<'){
            position --;
        } else if (movement === '*'){
            distance ++;
        }
    }
    
    return Math.abs(position) + distance
  }

  const movements = '>>*<'
  const movements2 = '<<<>'
  const movements3 = '>***>'

  console.log(maxDistance(movements));  // 2
  console.log(maxDistance(movements2));  // 2
  console.log(maxDistance(movements3));  // 5