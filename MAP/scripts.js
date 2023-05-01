// MAP
const employees = [
    {
        name: "sk",
        age: 20,
        post: "developer"
    },
    {
        name: "ak",
        age: 18,
        post: "debugger"
    },
    {
        name: "pk",
        age: 20,
        post: "tester"
    },
    {
        name: "jk",
        age: 30,
        post: "manager"
    },
];
const posts = employees.map((employee)=>{
    return employee.post;
})

const person = employees.map((employee)=>{
    return {
        fistName: employee.name,
        age: employee.age
    }
})
console.log(posts);
console.log(person);

/**
 * Mapping in HTML document
 */

const names = employees.map((employee)=>{
    return  `<h1> ${employee.name} </h1>`;
})
let container = document.getElementById('result');
// container.innerHTML = names; // With this line we are getting separator as comma
container.innerHTML = names.join(''); // With this line we are getting separator as an empty string