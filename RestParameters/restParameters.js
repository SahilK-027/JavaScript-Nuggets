const printAll = (...numbers) =>{
    numbers.map((num, idx)=>{
        console.log(`idx: ${idx} num: ${num}`);
    })
    console.log();
}

printAll();
printAll(1);
printAll(1,2,3);
printAll(1,2,3,4,5,6,7);
