// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

if (mantra.toLowerCase().includes("b")) {
  return "Includes letter 'B'"
} else {
  return "Does not include letter 'B'"
}

// 1b. Write the code that determines if there is an 'x' in mantra.

if (mantra.toLowerCase().includes("x")) {
  return "Includes letter 'X'"
} else {
  return "Does not include letter 'X'"
}

// 1c. Write the code that determines if there is a 'v' in mantra.

if (mantra.toLowerCase().includes("v")) {
  return "Includes letter 'V'"
} else {
  return "Does not include letter 'V'"
}

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

const letterChecker = (string, letter) => {
  if (string.toLowerCase().includes(letter.toLowerCase())) {
    return `The string \"${string}\" includes the letter \"${letter.toLowerCase()}\".`
  } else {
    return `The string \"${string}\" does not include the letter \"${letter.toLowerCase()}\".`
  }
}

console.log(letterChecker("Hello, dear teachers!", "d")) // -> returns "The string "Hello, my dear teacehrs!" includes the letter "d"."

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

const lengthChecker = (str1, str2) => {
  if (str1.length === str2.length) {
    return "The two strings have the same number of characters."
  } else if (str1.length > str2.length) {
    return `${str1} is the longer string passed.`
  } else if (str1.length < str2.length) {
    return `${str2} is the longer string passed.`
  } else {
    return "Something went wrong."
  }
}

console.log(lengthChecker(myDog, myCat));

//attempted with ternary operator -- logic tree is limited in outcomes//

const lengthChecker2 = (str1, str2) => {
  return (str1.length > str2.length ? `${str1} is the longer string` : `${str2} is longer than or equal to ${str1}`)
}


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

const arrayCreator = (str1, str2) => {
  let newArray = []
  newArray.push(str1, str2)
  return newArray
}

console.log(arrayCreator(myDog, myCat));


// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

const stringCreator = (...strings) => {
  return strings.join(" ").toLowerCase()
}

console.log(stringCreator(myDog, myCat));

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

for (var i = 0; i < myMessage.length; i++) {
  console.log(myMessage[i])
}

// 3b. Write the code that logs each letter of the message using map.

var letterLog = myMessage.split("").map((value) => value)
console.log(letterLog);

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

var i = 0;

while (i < myMessage.length) {
  console.log(myMessage[i]);
  i++
} //also returns myMessage.length at the end?

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

myMessage.split("").forEach(function(value, index) {
  console.log(myMessage[index]);
}); //also returns undefined?


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
var vowels = ["a", "e", "i", "o", "u"] //and sometimes "y"

const vowelKiller = (string) => {
  let noVowels = ""
  for (var i = 0; i < testString.length; i++) {
    if (vowels.includes(string[i].toLowerCase()) === false) {
      noVowels += string[i]
    } else {
      continue
    }
  }
  return noVowels
}

console.log(vowelKiller(testString));

// or

var vowelFilter = testString.split("").filter((letter) => vowels.includes(letter.toLowerCase()) === false).join("")
console.log(vowelFilter);


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

const vowelKiller2 = (string) => {
  let noVowels = ""
  for (var i = 0; i < testString.length; i++) {
    if (typeof string !== "string") {
      return "error message here"
    } else if (vowels.includes(string[i].toLowerCase()) === false) {
      noVowels += string[i]
    } else {
      continue
    }
  }
  return noVowels
}
console.log(vowelKiller2(testString));



// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var catsOnly = toonimals.filter((value) => value.animal === "cat")
console.log(catsOnly);

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

var namesOfNonCats = toonimals.filter((value) => value.animal !== "cat").map((value) => value.name)
console.log(namesOfNonCats);

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const toonimalNames = (array) => {
  for (i = 0; i < array.length; i++) {
    console.log(`${array[i].name} is a ${array[i].animal}.`)
  }
}
//tried return keyword inside for loop, but that ended the loop after 1 iteration ("Itchy is a mouse.")

var introduceToonimals = toonimals.map((value) => `${value.name} is a ${value.animal}.`).join("\n")
console.log(introduceToonimals);
