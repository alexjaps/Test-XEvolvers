/* Code a program that prints de unset numbers in a binary number */
function unsetBinaries(decimalNumber = 16)
{
  var cont = 0;
  var binaryString = "";
  while(decimalNumber >= 1)
  {
    if(decimalNumber % 2 == 0)
    {
      binaryString +="0";
      cont++;
    }else{
      binaryString +="1";
    }
    decimalNumber = Math.trunc(decimalNumber/2);
  }

  if(binaryString.length < 16)
    {
      var len = 16 - binaryString.length;
      for(var i=0; i<len;i++)
      {
        cont++;
      }
    }
  return cont;
}

//console.log(unsetBinaries(656535)); // return 0
//console.log(unsetBinaries(12547)); // return 11

/* Code a program that prints the numbers from 1 to 100. 
But for multiples of 3 prints "Fizz" instead of the number, 
for the multiples of 5 prints "Buzz" instead of the number, 
for multiples of both three and five prints “FizzBuzz” 
and code it considering extensibility (meaning you can easily add more multipliers). 
*/

function checkMultiplesOf()
  {
    var numbers = [];
    var multiples = [[3,5,"Fizzbuzz"],[3,"Fizz"]];
      
    //multiples.push([2,4,"Fizzbuzz"]); // structure to add new multiples of two values multiples.push([val1,val2, "message"])
      
    //multiples.push([4,"Fizz"]); // structure to add new multiplies of one value : multiples.push([val,"message"])
    multiples.push([5,"buzz"]);
    for(var x=1; x<=100; x++)
    {
        var printed = false;
        for(y in multiples){
            if(multiples[y].length == 3){
                if(x%multiples[y][0]==0 && x%multiples[y][1]==0){
                    numbers.push(multiples[y][2]);
                    printed = true;
                    break;
                }
            }else if(multiples[y].length==2){
                if(x%multiples[y][0]==0){
                    numbers.push(multiples[y][1]);
                    printed = true;
                    break;
                }
            }
          
        }
        if(!printed) numbers.push(x);
    }
    return numbers;
  }
  //console.log(checkMultiplesOf());


 /*
   Code a function that receives a birth year as a parameter 
   and returns the age of the user, you need to throw an exception
   in case of incorrect inputs (negative numbers, not numbers, 
   ages outside the human lifespan, etc.) 
     */
      function whatsMyAge(birthdate)
      {
        var today = new Date();
        var yyyy = today.getFullYear();
        var averageAge = 80;
        var age = yyyy - birthdate;
          
        if(birthdate < 0)
        {
          return("BIRTHDATE MUST NOT BE LESS OR EQUAL TO 0");
        }
          
        if(age >=averageAge)
        {
          return("THIS DATE EXCEEDS AVERAGE LIFESPAN");
        }
       
        if(isNaN(birthdate))
        {
          return("BIRTHDATE IS NOT NUMERIC");
        }
        
        if(birthdate >= yyyy){
            return("BIRTHDATE MUST BE LESS TO CURRENT YEAR");
        }
        return "You have "+ age +" years old";
      }
      //console.log(whatsMyAge(1996))


/*
Code a function that receives 2 sorted arrays as parameter 
and merge them into a 3rd sorted array do not use any built-in 
sort method since the input arrays are already sorted
*/
function orderArray(arr1 = [4,5,7,9,10,34], arr2 = [1,3,6,8,32,33])
  {
      var auxarray = [];
      var sortarray = [];
      var added = false;
      if(arr1[0] < arr2[0]){
          return newArray(arr1,arr2);
      }else{
          return newArray(arr2,arr1);
      }
      
      function newArray(array1,array2){
          for(x in array1){
              auxarray.push(array1[x]);
          }
          for(y in array2){
              auxarray.push(array2[y]);
          }
          var increment = auxarray.length / 2;
          while (increment > 0) {
            for (i = increment; i < auxarray.length; i++) {
                var j = i;
                var temp = auxarray[i];
                while (j >= increment && auxarray[j-increment] > temp) {
                    auxarray[j] = auxarray[j-increment];
                    j = j - increment;
                }
                auxarray[j] = temp;
            }
           if (increment == 2) {
                increment = 1;
            } else {
                increment = parseInt(increment*5 / 11);
            }
        }
          for(x in auxarray){ if(auxarray[x]!= undefined){ sortarray.push(auxarray[x]); } }
          return sortarray;
      }  
      
  }

//console.log(orderArray());
