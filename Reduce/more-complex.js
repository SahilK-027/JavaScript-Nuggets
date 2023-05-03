// Reduce objects

// Cart examples
const cart = [
    {
        title: 'Samsung s20',
        price: 599.99,
        amount: 1
    },
    {
        title: 'iphone 14',
        price: 1000.00,
        amount: 3
    },
    {
        title: 'pixel 6',
        price: 425.00,
        amount: 2
    },
    {
        title: 'Sony Xperia Pro-I',
        price: 1500.00,
        amount: 4
    },
    {
        title: 'Oneplus 10 pro',
        price: 469.00,
        amount: 1
    },
]

let total = cart.reduce((total, cartItem) => {
    // Count items
    total.totalItems += cartItem.amount;
    // Sum up the price
    total.cartTotalPrice += cartItem.price * cartItem.amount;
    return total;
}, {
    totalItems: 0,
    cartTotalPrice: 0
})
console.log(total);


// Fetching API Data
const url = "http://api.github.com/users/sahilk-027/repos?per_page=100";
const fetchRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.reduce((total, repo) => {
        const language = repo.language;
        if (language) {
            if (total[language]) {
                total[language] += 1;
            }
            else {
                total[language] = 1;
            }
        }
        return total;
    }, {})
    console.log(newData);
}
fetchRepos();
