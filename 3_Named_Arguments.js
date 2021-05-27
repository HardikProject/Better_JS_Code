const makePerson = ({ firstName, age, lastName, job }) => {
    return {
      name: firstName + " " + lastName,
      age,
      job
    };
  };
  
  const dev = makePerson({
    firstName: "Hardik",
    lastName: "Prajapati",
    age: 19,
    job: "Web Dev"
  });
  
  console.log(dev);