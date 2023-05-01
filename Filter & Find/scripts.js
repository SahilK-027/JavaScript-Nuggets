const employees = [
    {name: "sk",age: 20,post: "developer"},
    {name: "ak",age: 18,post: "debugger"},
    {name: "jk",age: 21,post: "tester"},
    {name: "pk",age: 30,post: "manager"},
]
/** ==========================================================================================
 * *                     FILTER
 * ! returns a new array, can manipulate then size of new array (unlike map), returns based on condition
========================================================================================== */
console.log("FILTER\n");
const youngEmployees = employees.filter((person)=>{
    return person.age <= 20;
})
console.log(youngEmployees);

const developers = employees.filter((person)=>{
    return person.post === "developer"
})
console.log(developers);

// No match
const leads = employees.filter((person)=>{
    return person.post === "load"
})
console.log(leads);



/** =======================================================================================
 * *                     FIND
 * ! Find - return single object, returns first match, if no match found it returns undefined
========================================================================================= */
console.log("\n\n\nFIND\n");
const youngEmployee = employees.find((person)=>{
    return person.age <= 20;
})
console.log(youngEmployee);

const developer = employees.find((person)=>{
    return person.post === "developer"
})
console.log(developer);

// No match
const lead = employees.find((person)=>{
    return person.post === "load"
})
console.log(lead);