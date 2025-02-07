// const members = [
//     {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
//     {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
// ];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
// function Employee(firstName, lastName, email, birthdate, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.birthdate = birthdate;
//     this.salary = salary;
//   }

  // Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
  //   return new Employee(firstName, lastName, email, birthdate, salary);
  // };

  // Employee.prototype.editEmployee = function(updates) {
  //   Object.assign(this, updates);
  // };

  // // Usage example:
  // const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  // console.log(bill);

  // bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  // console.log(bill);


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
class Employee {
  constructor (firstName, lastName, email, birthdate){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.birthdate = birthdate;
    }

    getEmployees() {
      return {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          birthdate: this.birthdate,
          salary: this.salary
      };
    }
}

  Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
    return new Employee(firstName, lastName, email, birthdate, salary);
  }

    Employee.prototype.editEmployee = function(updates) {
    Object.assign(this, updates);
  };


// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
const sophia = new Employee("Sophia", "Mai", "sophia.ma13@utexas.edu", "2003-06-15");

// 3. After step 2, console log your const and then try to console.log parts of the object
console.log(sophia);

// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
const employeeArray = [
  Employee.addEmployee("Erik", "Hu", "sophia.ma13@utexas.edu", "2000-01-15"),
  Employee.addEmployee("Joe", "Maa", "JMaa@utexas.edu", "1994-08-03"),
  Employee.addEmployee("Robert", "Lee", "RobLee@utexas.edu", "1996-05-17")
]

// console.log(employeeArray);
// console.log(employeeArray[0]);
// console.log(employeeArray[2]);

// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) 
//    and a method to editEmployee
//    Test your methods using JS
// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

  //get the table from the dom
  const tableBody = document.querySelector("#employeeTable tbody");
  // Clear existing rows in the table
  tableBody.innerHTML = "";
  // Populate the table
  employeeArray.forEach(employees => {
    // Use getFullDetails() to fetch employee data
    const details = employees.getEmployees();
  //   console.log(details) ;
    // Create a new row
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${details.firstName}</td>
    <td>${details.lastName}</td>
    <td>${details.email}</td>
    <td>${details.birthdate}</td>
  `;
  // Append the row to the table
  tableBody.appendChild(row);
  })



//2. CALLBACKS
// Simulates 1.5-sec delay
function sendInvoice(clientName, callback) {
  console.log(`Sending invoice...`);
  setTimeout(() => {
    // Returns "Invoice sent to [clientName]"
    callback(`Invoice sent to ${clientName}`);
  }, 1500); // Simulate 1.5-sec processing time
}

//Usage
sendInvoice("Soph", (confirmation) => {
  console.log('Delivery Success:', confirmation); 
});


//3. PROMISES
// Resolves if orderTotal < $5000
// Rejects if orderTotal ≥ $5000 (requires manager approval)

function verifyPayment(orderTotal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderTotal < 5000 ? resolve(`Payment of $${orderTotal} approved.`)
                        : reject(`Payment of $${orderTotal} requires manager approval.`);
    }, 1000);
    })
  }

  //test with 3000 & 6000
  verifyPayment(3000)
  .then(console.log)
  .catch(console.error);


  verifyPayment(6000)
  .then(console.log)
  .catch(console.error);


  //4. AWAIT

async function processRefund(requestId) {
  try {
    // Simulates 1-sec refund verification
    console.log(`Verifying refund request #${requestId}...`);
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    // Simulates 2-sec payment reversal
    console.log(`Reversing payment for request #${requestId}...`);
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-sec payment reversal

    // Returns "Refund complete for request #X"
    console.log(`Refund complete for request #${requestId}`);
  } catch (error) {
    console.log(`Error processing refund for request #${requestId}`);
  }
}

processRefund("CUST-12345");


