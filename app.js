//# homework
//5-10-15 gSchool homework


//***FIBONACCI

function fib(i){
var v1 = 1;
var v2 = 1;
var v3 = v1 + v2;
console.log(v1);
console.log(v2);

while(v3 < i){
    console.log(v3);
    v1 = v2;
    v2 = v3;
    v3 = v1 + v2;
}
  }
fib(42);

//***


//*** PRIME NUMBER FUNCTION

function prime(i){
  var c = 2;
  var result = true;
  while(c < i){
  if( i%c === 0){
    result = false;
    break;
  }
  c++;
 }
  return result;
}
console.log(prime(17));

//***


//***LOG ALL LOOP

var arr1 = [1,2,3,4,5];
function a1(arr){
  var count = 0;
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
a1(arr1);

//***

//***SUM LOOP

var arr = [1,2,3];
var sum = 0;
var count = 0;
while(count < arr.length){
     sum = arr[count] + sum;
     count++;

}
 console.log(sum);

 //***

//*** SUBTRACT LOOP

var arr = [10,10,10];
var sum = 0;
var count = 0;
while(count < arr.length){
     sum = sum - arr[count];
     count++;
}
console.log(sum);

//***

//*** LARGEST LOOP

var arr = [1,9,7];
var count = 0;
var large = arr[0];

while(count < arr.length){
  if(arr[count] > large){
    large = arr[count];
    }
  count++;
}
console.log(large);

//***

//*** SMALLEST LOOP

var arr = [20,19,40];
var count = 0;
var small = arr[0];

while(count < arr.length){
  if(arr[count]< small ){
    small = arr[count];

  }
  count++;
}
console.log(small);

// ***

//*** AVERAGE LOOP

var arr = [10,20,30];
var count = 0;
var sum = 0;

while(count < arr.length){
     sum = sum + arr[count];
     count++;
}
var average = sum / arr.length;
console.log(average);

//***




/*SUMMARY OF 'YOU DONT KNOW JS'


In ‘You don’t know JS’ they start off by going over the definition of what an expression and a statement is. For example “a = b * 2;” is a statement with four expressions within it.

Also , the went over what the different properties mean , for example ,
a += 2 means the same as a = a + 2. As well && meaning and and || meaning or.

They also showed us how to convert a string to a number “converting between types."
EXAMPLE:
var a = "42";
var b = Number( a );

console.log( a );   // "42"
console.log( b );   // 42

Coercion is a way to change the types of values.

They also went over the importance of commenting throughout your code for the human reader of that code.

Also we went over if and else statements.

The chapter showed a way to count as well , using a break .
EXAMPLE:
var i = 0;

// a `while..true` loop would run forever, right?Not with a break
while (true) {
    // stop the loop?
    if ((i <= 9) === false) {
        break;
    }

    console.log( i );
    i = i + 1;
}

Then I did the exercise and came up with this-

const threshold = 200;
const phone = 99.99;
const accessory = 9.99;
const taxamt = 0.08;
var amt = 0;
var bank = Number(prompt('Hey, how much money in the bank?','Input Amount'));

function tax(number){
   return number * taxamt;
}

function format(fm){
   return '$' + fm.toFixed(2);
}

while(bank >= amt){
    amt = amt + phone;
   if(amt <= threshold)
   amt = amt + accessory;
   if(amt > bank){
       alert('Sorry Buddy, Nope');
   }
}

var sum = amt + tax(amt);
console.log(amt);
console.log(tax(amt));
console.log('Final Cost ' + format(sum));   */
