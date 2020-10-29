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