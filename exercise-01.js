/*
  JS Code Kata - Functions - Exercise 01
  Goal 1: call the run function to run the program
  Goal 2: commit the change and push the result back to your github fork
  Next: Start Exercise 02
*/

let anna = { name: 'Anna', age: 36 }
let beata = { name: 'Beata', age: 28 }
let carrie = { name: 'Carrie', age: 31 }

let people = [anna, beata, carrie]
let names = people.map(person => person.name)

function run() {
  console.log('>', anna.name, 'is', 'friends', 'with', carrie.name)
  console.log('>', beata.name, 'is', 'co-workers', 'with', carrie.name)
  console.log('>', carrie.name, 'is', 'family', 'with', beata.name)

  console.log('I know the names of', names)
}

run(people.map);
