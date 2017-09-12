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

console.log(unsetBinaries(12547));

/* Code a program that prints the numbers from 1 to 100. 
But for multiples of 3 prints "Fizz" instead of the number, 
for the multiples of 5 prints "Buzz" instead of the number, 
for multiples of both three and five prints “FizzBuzz” 
and code it considering extensibility (meaning you can easily add more multipliers). 
*/

function checkMultiplesOf(multiple1 = 3, multiple2 = 5) //DEFAULT MULTIPLES SEARCHED ARE 3 and 5
  {
    for(var x=1; x<=100; x++)
    {
      if(x%multiple1 == 0 && x%multiple2 == 0)
       console.log("FizzBuzz " + x)
      else
      {
        if(x%multiple1 == 0)
          console.log("Fizz " + x)
        else
        {
           if(x%multiple2 == 0)
            console.log("Buzz " + x)
           else
            console.log(x)
        }
      }
    }
  }
  checkMultiplesOf(3,7);


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

    if(age>=averageAge)
    {
      alert("THIS DATE EXCEEDS AVERAGE LIFESPAN")
      return;
    }
    if(birthdate < 0)
    {
      alert("BIRTHDATE MUST NOT BE LESS OR EQUAL TO 0")
      return;
    }
    if(isNaN(birthdate))
    {
      alert("BIRTHDATE IS NOT NUMERIC")
      return;
    }

    return age;
  }
  console.log(whatsMyAge(1996))


/*
Code a function that receives 2 sorted arrays as parameter 
and merge them into a 3rd sorted array do not use any built-in 
sort method since the input arrays are already sorted
*/
  function orderArray(arr1 = [4,5,7,9,10,34], arr2 = [1,3,6,8,32,33])
  {

    function sort(a)
    {
      var aux;
      do {
          aux = false;
          for (var i=0; i < a.length-1; i++) {
              if (a[i] > a[i+1]) {
                  var temp = a[i];
                  a[i] = a[i+1];
                  a[i+1] = temp;
                  aux = true;
              }
          }
      } while (aux);
    }
    var arr3 = [];

    for(x=0; x<arr1.length; x++){
      arr3.push(arr1[x]);
    }
    for(x=0; x<arr2.length; x++){
      arr3.push(arr2[x]);
    }
    sort(arr3);
    return arr3;
  }
  console.log(orderArray());