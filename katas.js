/*KATA 7Kyu*/

/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */


function reverseWords(str) {
  let newStr = ""
  // separar str en palabras y convertirlo en array
  const splitWord = str.split(" ") 
  // Cada elemento del array separarlo, darle la vuelta y volverlo a juntar. Concatenar cada elemento para conseguir String
  splitWord.forEach(elem => newStr +=   " " + elem.split("").reverse().join("") )
 // devolver la string sin en el inicio
  return newStr.slice(1, newStr.length)
  }

 
 
 
  /* There is a bus moving in the city, and it takes and drop some people in each bus stop.

  You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
  
  Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
  
  Take a look on the test cases.
  
  Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
  
  The second value in the first integer array is 0, since the bus is empty in the first bus stop.*/

 
  // My Solution: 
  
  var number = function(busStops){
      let newHour =[]
      
       for (let i =0; i<busStops.length ; i++){
         for (let j=0; j<busStops[i].length; j++){
         newHour.push(busStops[i][j]-busStops[i][j+1])    
        }
      }
       
       let totalPerson = 0 
       newHour.forEach( elem => {
          if (elem){
            totalPerson += elem
          }
        })
       
       return Math.abs(totalPerson)
     }


      /* Given an array of integers.
       Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
       If the input is an empty array or is null, return an empty array.

       Example
       For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/


    //  My solution 
     function countPositivesSumNegatives(input) {
      let count = 0
      let totalNegativeNum = 0 
        
      if(!input || input.length == 0 ) return [] 
     
      input.forEach((num)=>{  
       num > 0 ? count ++ : totalNegativeNum += num
      })  
      return [count, totalNegativeNum];
    }



    /*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

      To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
      Input
      Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
      
      Output
      Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

      Example
      input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
      output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/

    // My solution
    function openOrSenior(data){
      let players = []
      for (let i= 0; i<data.length; i++){
       data[i][0] >= 55 && data[i][1] > 7  ? players.push("Senior") : players.push("Open")
      }
      return players
    }

    // KATA 6

//       I love Fibonacci numbers in general, but I must admit I love some more than others.
//       I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

//       For example:

//       nthFibo(4) == 2
//       Because 2 is the 4th number in the Fibonacci Sequence.

//       For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
    

      // MY SOLUTION 

      function nthFibo(n) {
        // first position in fibonacci 
       const fib =[0, 1]
       // calculate fibonacci
       for (let i= 2; i < n; i++){
         
         fib[i] = fib[i-2] + fib[i-1]
       }
       
        return fib[n-1]
      }

      