const newArray = ["hi", "hardik", "newItem", "spread"];
const [a, b, ...c] = newArray;
// const a = newArray[0];
// const b = newArray[1];
console.log(a);  
console.log(b);  
console.log(c);  // c is become array

// const person = {
//   name: "Hardik",
//   age: 19,
//   job: "Web Dev"
// };

// const makePerson = (name, age, job) => {
//   return {
//     name: name,
//     age: age,
//     job: job
//   };
// };

const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  };
};

const dev = makePerson("hardik", 19, "web dev");
// X const name = dev.name;
// X const devName = dev.name;
const { name, ...rest } = dev;

// this.props.names
// const { names } = this.props;
// ...this.props

console.log(name, rest);
