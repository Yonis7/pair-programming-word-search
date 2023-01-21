// const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true;
//     }

const wordSearch = (letters, word) => { 

  const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    } 

  let transposed = transpose(letters)
    const verticalJoin = transposed.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false
}

const transpose = function (letters) {
    let array = [];
    
  
    for (let row = 0; row < letters[0].length; row++) {
        let arrayT = [];
        // array.push(matrix[row])
        //console.log(matrix[row])
        for (let col = 0; col < letters.length; col++) {
          console.log(letters[col])
          arrayT.push(letters[col][row]);
          // console.log(array)
        }
  
        array.push(arrayT);
        
    }
    
    
    // console.log(array)
  
    return array;
  };

module.exports = wordSearch