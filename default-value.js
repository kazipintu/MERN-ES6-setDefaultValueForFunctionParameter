{
  function addition(num1, num2) {
    const total = num1 + num2;
    //console.log(num1, num2);
    //console.log(total);

  }
  const result = addition(15, 2);

}

// PROBLEM:- total is coming as Not any Number (NaN)
{
  function addition(num1, num2) {
    const total = num1 + num2;
    console.log(num1, num2);
    console.log(total);

  }
  const result = addition(15,);

}

//SOLUTION:-

/* ~ OPTION-3: "EC6 latest System" to solve the problem ~  */
{
  function addition(num1, num2 = 0) {
    // setting default value of num2 = 0, now num2 can be executable by any value assigned in it
    console.log(num1, num2);
    const total = num1 + num2;
    console.log(total);

  }
  const result = addition(15, 5);

}


/* ~ OPTION-2: Old System to solve the problem ~  */
{
  function addition(num1, num2) {
    console.log(num1, num2);

    num2 = num2 || 0;
    const total = num1 + num2;
    console.log(num1, num2);
    console.log(total);

  }
  const result = addition(15,);

}


/* ~ OPTION-1: Older System to solve the problem ~  */
{
  function addition(num1, num2) {
    console.log(num1, num2);

    if (num2 == undefined) {
      num2 = 0;
    }
    const total = num1 + num2;
    console.log(num1, num2);
    console.log(total);

  }
  const result = addition(15,);

}