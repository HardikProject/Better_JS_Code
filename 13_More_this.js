// console.log(this);

const logGreeting = function() {
    console.log(this);
  };
  
  const test = {
    name: "test",
    testFunc: function() {
      this.name = "Scott";
      console.log(this);
    },
    testFuncTwo: () => {
      console.log(this, "arrow func");
    },
    testFuncThree: function() {
      ["hi", "hello"].map(() => {
        console.log(this);
      });
    },
    testFuncFour: function() {
      ["hi", "hello"].map(logGreeting.bind(this));
    }
  };
  
  function team(name) {
    this.name = name;
    console.log(this);
  }
  
  const button = document.getElementById("new-colors");
  button.addEventListener("click", function() {
    this.innerText = "Clicked!";
  });
  
  // test.testFunc();
  // test.testFuncTwo();
  test.testFuncThree();
  test.testFuncFour();
  // team();
  // const wings = new team("Red Wings");


  // for to work this in arrow fuction it must greater or equal to level 2 down

  // access this outside we have to use .bind(this) method
  