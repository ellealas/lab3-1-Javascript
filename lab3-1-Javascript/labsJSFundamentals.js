//What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0);       // "10"
console.log("" - 1 + 0);       // -1
console.log(true + false);     // 1
console.log(!true);            // false
console.log(6 / "3");          // 2
console.log("2" * "3");        // 6
console.log(4 + 5 + "px");     // "9px"
console.log("$" + (4 + 5));    // "$9"
console.log(("4") - 2);        // 2
console.log("4px" - 2);        // NaN (not a number)
console.log("-9" + 5);         // "-9 5" (Since one of the operands is a string ("-9"), JavaScript treats the operation as string concatenation rather than numerical addition.)
console.log("-9" - 5);         // -14
console.log(null + 1);         // 1 (null is coerced into the number 0)
console.log(undefined + 1);    // NaN (perform an arithmetic operation with undefined and a number, the result will be NaN (Not a Number).)
console.log(undefined == null);// true
console.log(undefined === null);// false
console.log((" \t \n") - 2);    // -2


//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
// let three = 3;
// let four = 4;
// let thirty = 30;

// //what is the value of the following expressions?
// let addition = three + four //7
// console.log(addition)

// let multiplication = three * four //12
// console.log(multiplication)

// let division = three / four //0.75
// console.log(division)

// let subtraction = three - four //-1
// console.log(subtraction)

// let lessThan1 = three < four //true
// console.log(lessThan1)

// let lessThan2 = thirty < four //false
// console.log(lessThan2)

//---------------------------------------------------------------------
// or using Number()/parseInt() function 
//is used to convert the string values to numbers


let three = "3";
let four = "4";
let thirty = "30";

let addition = parseInt(three) + parseInt(four);
console.log(addition);

let multiplication = parseInt(three) * parseInt(four);
console.log(multiplication);

let division = Number(three) / Number(four);
console.log(division);

let subtraction = Number(three) - Number(four);
console.log(subtraction);

let lessThan1 = parseInt(three) < parseInt(four);
console.log(lessThan1);

let lessThan2 = parseInt(thirty) < parseInt(four);
console.log(lessThan2);



//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true') //is falsy value
if ("0") console.log('#2 zero is true')// is truthy value
if (null) console.log('null is true')// is falsy value
if (-1) console.log('negative is true')// is truthy value
if (1) console.log('positive is true')// is truthy value

//in JavaScript, values that are considered falsy include

//  0
//  null
//  undefined
//  an empty string ("")
//  NaN 
//  false
 
//  All other values are considered truthy!!


//if the statement will evaluates as true, the corresponding console.log message will be printed






//What does the ‘+=’ do?
//+= operator is a shorthand assignment operator for concatenating or adding values and assigning the result to the left-hand variable. Here it appends the string 'less than 10' to the existing value of the result variable.

let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
console.log(result)



// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. 

let c = 8, d = 8;
let result2 = `${c} + ${d} is ${c + d < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(result2);







// Rewrite the following function using: 
// function getGreeting(name) {
//     return 'Hello ' + name + '!';
//     }



// a) function expression syntax (allow you to define a function and assign it to a variable)
  const getGreeting = function(name) {
    return 'Hello ' + name + '!';
  };
  console.log(getGreeting('Rochelle'));



//b) arrow function syntax 
  const getGreeting2 = (name) => {
    return 'Hello ' + name + '!';
  };
  console.log(getGreeting2('Rochelle'));





//6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. 

//-------------------------------------------------------------------------
// const westley = {
//     name: 'Westley',
//     numFingers: 5
//     }
//     const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
//     }
//     const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Purple',
//     greeting(person) {
//     let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
//     console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase(person) {
//         if (person.numFingers === 6) {
//           return "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.";
//         } else {
//           return "Nice to meet you.";
//         }
//       }
//     };
//     inigo.greeting(westley)
//     inigo.greeting(rugen)
//---------------------------------------------------------------------------

    // c) Update getCatchPhrase to use 
    //arrow function syntax 
    //and a conditional operator (condition ? valueIfTrue : valueIfFalse)

    const westley = {
        name: 'Westley',
        numFingers: 5
      };
      
      const rugen = {
        name: 'Count Rugen',
        numFingers: 6
      };
      
      const inigo = {
        firstName: 'Inigo',
        lastName: 'Purple',
        
        greeting(person) {
          const greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
          console.log(greeting + this.getCatchPhrase(person));
        },
        
        getCatchPhrase: (person) => (person.numFingers === 6)
          ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
          : "Nice to meet you."
      };
      
      inigo.greeting(westley);
      inigo.greeting(rugen);







      
// The following object represents a basketball game and keeps track of the score as the game progresses.

// const basketballGame = {
//   score: 0,
//   freeThrow() {
//   this.score++;
//   },
//   basket() {
//   this.score += 2;
//   },
//   threePointer() {
//   this.score += 3;
//   },
//   halfTime() {
//   console.log('Halftime score is '+this.score);
//   }
//   }
  //modify each of the above object methods to enable function chaining as below:
  // basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();



// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log('Halftime score is ' + this.score + ', fouls: ' + this.fouls);
    return this;
  },
  fullTime() {
    console.log('Full-time score is ' + this.score + ', fouls: ' + this.fouls);
    return this;
  }
};

basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime().foul().fullTime();


// d) Test your object by chaining all the method calls together in different combinations.

// basketballGame.basket().freeThrow().foul().threePointer().halfTime().foul().freeThrow().fullTime();









// 8. The object below represents a single city.
const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney'
};


// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.

function printObjectProperties(obj) {
  for (let property in obj) {
    console.log(property + ':', obj[property]);
  }
}

printObjectProperties(sydney);



// b) Create a new object for a different city with different properties and call your function again with the new object.

const melbourne = {
  name: 'Melbourne',
  population: 5_000_000,
  state: 'VIC',
  founded: '30 August 1835',
  timezone: 'Australia/Melbourne'
};

function printObjectProperties(obj) {
  for (let property in obj) {
    console.log(property + ':', obj[property]);
  }
}

printObjectProperties(melbourne);



// Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)

let teamSports = ['netball', 'soccer', 'basketball']; //assigned array of sports
let moreSports = teamSports; // moreSports variable is assigned the VALUE of teamSports. BOTH variables now reference the same array

moreSports.push('tennis', 'badminton');  //push() method adds sports at the end of the array
moreSports.unshift('swimming', 'cricket'); //unshift() adds sports at the beginning of the array

console.log(teamSports);
console.log(moreSports);


// b) Create a new dog2 variable equal to dog1 and give it a new value

let dog1 = 'Golden Retriever';
let dog2 = dog1;

dog2 = 'Labrador Retriever';

console.log(dog1); // Output is Golden Retriever
console.log(dog2); // Output is Labrador Retriever



// c) Create a new cat2 variable equal to cat1 and change its name property

let cat1 = {
  name: 'Snow',
};

let cat2 = cat1;

cat2.name = 'Whiskers';

console.log(cat1.name); // Output is Whiskers
console.log(cat2.name); // Output is Whiskers



//Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?

//TEAM SPORTS CODE
// teamSports array has indeed changed. Since moreSports is referencing the same array, 
// any modifications made to moreSports will affect the original array as well. Objects 
// (arrays are objects) are stored by reference in JavaScript, so any changes made to the 
// shared array will be visible through both variables.

//DOG CODE
// When dog2 is assigned the value of dog1 (let dog2 = dog1;), both dog1 and dog2 will reference the same string value 'Golden Retriever' ( note: they are still they are independent variables)
// When dog2 is then assigned a new value (dog2 = 'Labrador Retriever';), a new string value 'Labrador Retriever' is created and assigned to dog2. (note: This operation does not modify the original value of dog1)
// As a result, after the assignment, dog1 still holds the original value 'Golden Retriever', while dog2 now holds the new value 'Labrador Retriever'. They have separate copies of the string value, and modifying one variable does not affect the other.

//CAT CODE
// The output of console.log(cat1.name) and console.log(cat2.name) will both be 'Whiskers'
// The reason for this is that both cat1 and cat2 are referencing the same object in memory. When you assign cat1 to cat2 
// (let cat2 = cat1;), you are not creating a new copy of the object. Instead, cat2 is simply a new variable that points to 
// the same object as cat1.
// As a result, when you modify the name property of the shared object through cat2, the change is also reflected when accessing 
// the name property through cat1. This is because both variables are referencing the same underlying object, and changes made to 
// the object through one variable are visible through the other variable




// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  this.canDrive = function() {
    return this.age >= 16;
  };
}

let person1 = new Person('Elle', 20);
let person2 = new Person('Rebecca', 30);

console.log(person1);
console.log(person2);

console.log('Can person1 drive?', person1.canDrive()); 
console.log('Can person2 drive?', person2.canDrive());



//Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.
//Add a canDrive method to  the class that returns true if the person is old enough to drive.

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}

let personOne = new PersonClass('John', 20);
let personTwo = new PersonClass('Jane', 30);
let personThree = new PersonClass('Jim', 2);

console.log(personOne);
console.log(personTwo);
console.log(personThree);

console.log('Can personOne drive?', personOne.canDrive()); 
console.log('Can personTwo drive?', personTwo.canDrive()); 
console.log('Can personThree drive?', personThree.canDrive()); 
