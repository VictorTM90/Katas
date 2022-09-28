/*KATA 7Kyu*/

/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */


function reverseWords(str) {
  let newStr = ""
   separar str en palabras y convertirlo en array
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

      /*Lot of junior developer can be stuck when they need to change the access permission to a file or a directory in an Unix-like operating systems.

To do that they can use the chmod command and with some magic trick they can change the permissionof a file or a directory. For more information about the chmod command you can take a look at the wikipedia page.

chmod provides two types of syntax that can be used for changing permissions. An absolute form using octal to denote which permissions bits are set e.g: 766. Your goal in this kata is to define the octal you need to use in order to set yout permission correctly.

Here is the list of the permission you can set with the octal representation of this one.

User
read (4)
write (2)
execute (1)
Group
read (4)
write (2)
execute (1)
Other
read (4)
write (2)
execute (1)
The method take a hash in argument this one can have a maximum of 3 keys (owner,group,other). Each key will have a 3 chars string to represent the permission, for example the string rw- say that the user want the permission read, write without the execute. If a key is missing set the permission to ---

Note: chmod allow you to set some special flags too (setuid, setgid, sticky bit) but to keep some simplicity for this kata we will ignore this <one className=""></one> */

// MY SOLUTION

function chmodCalculator(perm) {
  const {user, group, other} = perm 
  
  let response = ""
  let countUser = 0
  let countGroup = 0
  let countOther = 0
 
  if (!user) {
     response += "0"
  } else if (!group) {
     response += "0"
  } else if (!other) {
     response += "0"
  }
  
 if (user){ 
  for (let i= 0; i<user.length; i++){
    if(user[i] === "r"){
     countUser += 4
    } else if (user[i] === "w"){
       countUser += 2
    } else if (user[i] === "x"){
      countUser += 1
    }else if (user[i] === "-"){
     countUser += 0
    }
  }

 } 
  if (group){
    for (let i= 0; i<group.length; i++){
    
      if(group[i] === "r"){
       countGroup +=4
    } else if (group[i] === "w"){
       countGroup += 2
    } else if (group[i] === "x"){
       countGroup += 1
    } else if (group[i] === "-"){
       countGroup += 0
    } 
  }
  } 
  
  if (other){
    for (let i= 0; i<other.length; i++){
    if(other[i] === "r"){
      countOther +=4
    } else if (other[i] === "w"){
       countOther += 2
    } else if (other[i] === "x"){
       countOther += 1
    } else if (other[i] === "-"){
      countOther += 0
    } 
  }
  }
  
  response = `${countUser}${countGroup}${countOther}`
 
  return response
}

// SOLUTION TOP => 
function chmodCalculator(perm) {
   let octal = p => !p ? 0 : 
  // evalua la condición y lo multiplica por el booolean que será 1 o 0 según si es TRUE O FALSE. 
   4 * +(p[0] === 'r')+ 
   2 * +(p[1] === 'w')+ 
   1 * +(p[2] === 'x')
  
  
 
 return '' + octal(perm.user) + octal(perm.group) + octal(perm.other); 
 
} 


/* Well met with Fibonacci bigger brother, AKA Tribonacci.

 As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

 So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

 [1, 1 ,1, 3, 5, 9, 17, 31, ...]
 But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

 [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
 Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

 Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

 If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

 [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)] */

 //My Solution: 

 function tribonacci(signature,n){
  
  if(n===0) return [];
  if(n===1) return [signature[0]]
  if(n===2) return signature.slice(0,2)
  if(n===3) return signature
  
  let result=[...signature];

  for( let i = 2; i<n-1; i++ ) {
    let suma = result[i-2] + result[i-1] + result[i]
    result.push(suma)
  }
  
  return result
}