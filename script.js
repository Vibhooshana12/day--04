//1. Do the below programs in anonymous funnction & IIFE
//Anonymous Function and IIFE Function
//Anonymous
console.log("****ANONYMOUS FUNCTION AND IIFE FUNCTION ****")

//a.Print odd numbers in an array
var odd = function(arr){
var res = []
for (var i = 0; i < arr.length;i++)
{
   if(arr[i] % 2!== 0)
   {
       res.push(arr[i])
   } 
}
return res;
}
console.log("a.Odd numbers:",odd([6,3,7,48,9,0,0]))

//IIFE
var odd = (function(arr) {
    var res=[]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0)
            res.push(arr[i]);
    }
    console.log(res)
})([5, 3, 7, 48, 9, 0, 0]);

//Anonymous
//b. Convert all the strings to title caps in a string array.
var Titlecaps = function(arr) 
{  
    arr = arr.toLowerCase().split(" ")

    for(var i=0 ; i< arr.length; i++)
        { 
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
    return arr.join(' ')
}
console.log("b.Title caps:",Titlecaps("be positive Always"));

//IIFE
var titlecaps= (function(arr) {
    arr = arr.toLowerCase().split(" ")

    for(var i=0 ; i< arr.length; i++)
        { 
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
    console.log("titlecaps:",arr.join(' '))
})("be positive Always");

//Anonymous
//c. Sum of all numbers in an array
var total = function(arr){
    var sum = 0;
    for (var i = 0; i < arr.length;i++)
    {
         sum += arr[i]
    }
    return sum;
    }
    console.log("c.Sum of numbers:",total([8,903,8,47,180]))

//IIFE
var Total= (function(arr) {
    var sum = 0;
    for (var i in arr)
    {
         sum += arr[i]
    }
    console.log("total:",sum)
})([8,903,8,47,180]);

//Anonymous
//Return all the prime numbers in an array
var Prime_nos = function(arr){
    var res = []
    for ( var i =0; i< arr.length; i++)
        {
            if(arr[i]<=1)
                {
                    continue;
                }
            else if(arr[i] % 2 === 0 || arr[i] % 3 === 0)
                {
                    continue;
                }
            else
            {
               res.push(arr[i]);
            }
        }
        return res       
}
console.log("d.Prime numbers:",Prime_nos([0,7,89,4,91,1,22,53,23]))

//IIFE
var prime= (function(arr) {
    var res = []
    for ( var i =0; i< arr.length; i++)
        {
            if(arr[i]<=1)
                {
                    continue;
                }
            else if(arr[i] % 2 === 0 || arr[i] % 3 === 0)
                {
                    continue;
                }
            else
            {
               res.push(arr[i]);
            }
        }
    console.log("prime:",res)
})([0,7,89,4,91,1,22,57,23,73]);

//Anonymous
// e.Return all the palindromes in an array
var is_Palindrome= function(arr) 
{ 
    var words = []
    var res =[]
    for(var i=0; i< arr.length;i++)
    {
        arr[i] =arr[i].toLowerCase() // changing the elements to lower case
        words.push(arr[i].split("").reverse().join("")) // reverse each element in the array
        if(arr[i]===words[i]) // checking the element is palindrome or not
            {
                res.push(arr[i])
            }   
    }
      return res
    }
console.log("e.Palindromes words:",is_Palindrome(["edit","radaR","Letter","1221","Noon","hello","delhi","343"]))

//IIFE
var palindrome= (function(arr) {
    var words = []
    var res =[]
    for(var i=0; i< arr.length;i++)
    {
        arr[i] =arr[i].toLowerCase() // changing the elements to lower case
        words.push(arr[i].split("").reverse().join("")) // reverse each element in the array
        if(arr[i]===words[i]) // checking the element is palindrome or not
            {
                res.push(arr[i])
            }   
    }
    console.log("palindrome:",res)
})(["edit","radaR","Letter","1221","Noon","hello","delhi","343"]);

//Anonymous
//f. Return median of two sorted arrays of the same size.
var Median = function(arr1,arr2)
{
      var res=[...arr1,...arr2]
      res.sort((a,b) => a-b);// sorting the merged array
      if (res.length % 2 === 0) // even length
        {
            var index = res.length / 2
            return ((res[index] + res[index-1])/2) // adding two middle elements to find median
        }
        else
        {
            return res[Math.floor(res.length/2)] // if the length is odd
        }
}
console.log("f.Median of array:",Median([2,14,27,32,50],[6,13,21,35,47]))


//IIFE
var median= (function(arr1,arr2) {
    var res=[...arr1,...arr2]
    res.sort((a,b) => a-b);// sorting the merged array
    if (res.length % 2 === 0) // even length
      {
          var index = res.length / 2
          console.log("Median:",((res[index] + res[index-1])/2)) // adding two middle elements to find median
      }
      else
      {
          console.log("Median:",res[Math.floor(res.length/2)] )// if the length is odd
      }

})([2,14,27,32,50],[6,13,21,35,47]);

//Anonymous
//g. Remove duplicates from an array
var Duplicates = function(arr)
{
    var res = [] // to store unique elements
    for(var i = 0;i < arr.length; i++)
        {
            if(res.indexOf(arr[i]) === -1) // indexof() searches the current element is already present in res array,if unique returns -1 
                {
                    res.push(arr[i]) // adding unique elements
                }
        }
        return res;
}
console.log("g.Remove Duplicates in array:",Duplicates([3,0,8,6,3,7,4,9,0,1]))

//IFFE
var duplicates= (function(arr) {
    var res = [] 
    for(var i = 0;i < arr.length; i++)
        {
            if(res.indexOf(arr[i]) === -1)
                {
                    res.push(arr[i])
                }
        }
        console.log("duplicates:",res);

})([3,0,8,6,3,7,4,9,0,1]);


//Anonymous
//h.Rotate an array by k times
var Rotating = function(arr,k)
{   
     k = k % arr.length;
     return arr = arr.slice(k).concat(arr.slice(0,k))
}
console.log("h.Rotaing k times the array:",Rotating([5,8,22,46,91],7))

// IIFE
var rotating= (function(arr,k) {
    k = k % arr.length;
    console.log("rotation:",arr = arr.slice(k).concat(arr.slice(0,k)))
})([5,8,22,46,91],7);

console.log("*************************************")

//Arrow function
//Do the below programs in arrow functions.
console.log("*****ARROW FUNCTION*****")

//a.Print odd numbers in an array
var oddnum = [6,31,7,48]
console.log("a.Oddnumbers:",oddnum.filter(ele=> ele % 2 != 0))

//b.Convert all the strings to title caps in a string array
var titleCaps = "stay sTrong".toLowerCase().split(" ")
var res = titleCaps.map(ele=> ele.charAt(0).toUpperCase() + ele.slice(1));
console.log("b.titlecaps:",res.join(' '))

//c.Sum of all numbers in an array
var total_sum=[8,903,8,47,180].reduce((acc,ele) => acc +ele,0);
console.log("c.Total sum of array:",total_sum)

//d.Return all the prime numbers in an array
var arr = [0,7,89,4,91,1,22,53,1021]
    arr = arr.filter(ele =>
    {
        for(var i= 2;i<= Math.sqrt(ele);i++)
            {
                if(ele % i ===0){
                    return false;
                }
                return true;
            }  
    });
    console.log("d.prime:",arr)

//e.Return all the palindromes in an array
var palindrome = ["RadaR","mom","iife","111","ride","nOOn"];
var words= palindrome.map(ele => ele.toLowerCase())
 words = words.filter(ele=> ele === ele.split("").reverse().join(""));
console.log("e.palindrome:", words);


