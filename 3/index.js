const findlongestWord = function(string) {
    let str = string.split(" ");
    let logest = 0;
    let word = null;
    for (let i = 0; i<str.length; i+=1){
        if(longest < str[i].length){
            longest = str [i].length;
            word = str [i];
    }
  }
  return word;
};

/*
 * Вызовы функции для проверки роботоспособности твоей релизации.
 */
console.log(findlongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findlongestWord('Google do a roll')); // 'Google'

console.log(findlongestWord('May the force be with you')); // 'force'