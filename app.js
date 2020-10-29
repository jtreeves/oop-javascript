const car = {
    make: 'Toyota',
    model: 'Corolla',
    color: 'silver',
    start: function() {
        return 'Outta here...';
    },
    stop: function() {
        return 'Push the brakes';
    }
};

// Not useful to have these defined in the general scope
// function start() {
//     return 'Outta here...';
// };

// function stop() {
//     return 'Push the brakes';
// };

console.log(car.start());

const employee = {
    name: 'Jackson Reeves',
    role: 'Software Engineer',
    salary: 100000
};

function salaryIncrease(salary) {
    return salary * 1.1;
};

console.log(salaryIncrease(employee.salary));

employee.salary = salaryIncrease(employee.salary);

console.log(employee);

function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

const appleCEO = new Human('Tim', 'Cook');
const teslaCEO = new Human('Elon', 'Musk');
const amazonCEO = new Human('Jeff', 'Bezos');

const me = new Human('Jackson', 'Reeves');

console.log(me.firstName)
// output: 'Jackson'

const brother = new Human('Graham', 'Reeves')

console.log(brother.firstName)
// output: 'Graham'

function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
};

const myCar = new Car('Toyota', 'Corolla', 'silver');
const fancyCar = new Car('BMW', '3 Series', 'red');
const oldCar = new Car('Honda', 'Civic', 'black');
console.log(myCar);
console.log(fancyCar);
console.log(oldCar);