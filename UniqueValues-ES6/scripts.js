// How to do it?

/*
step 1: Map get all instances
step 2: Add it in Set
step 3: [...] The spread (...) operator
*/

const menu = [
    {
        name: "Burger",
        type: "Food"
    },
    {
        name: "Fries",
        type: "Food"
    },
    {
        name: "AppleJuice",
        type: "Juice"
    },
    {
        name: "TomatoSauce",
        type: "Sauce"
    },
    {
        name: "ChickenNuggets",
        type: "Food"
    },
    {
        name: "COCACOLA",
        type: "Juice"
    },
    {
        name: "Sweet N Sour",
        type: "Sauce"
    },
]

// Step 1:
const categories1 = menu.map( (item)=>{
    return item.type;
});

// Step 2:
const categories2 = new Set(menu.map( (item)=>{
    return item.type;
}));

// Step 3:
const categories3 = [...new Set(menu.map( (item)=>{
    return item.type;
}))];

console.log(categories3);