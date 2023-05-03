const staff = [
    {name: 'sk', salary: 2000},
    {name: 'ak', salary: 1000},
    {name: 'jk', salary: 800},
    {name: 'pk', salary: 3000},
];

const monthlySalaryTotal = staff.reduce((total, person)=>{
    total += person.salary;
    return total;
}, 0) // This zero indicates the total will be initially 0

console.log(monthlySalaryTotal);