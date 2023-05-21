const getData = (callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        if (req.status === 200 && req.readyState === 4) {
            callback(undefined, req.responseText);
        }
        else if(req.readyState === 4){
            callback("ERROR", undefined);
        }
    })
    req.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    req.send();
}


console.log("1");
console.log("2");
getData((error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});
console.log("3");
console.log("4");

/**
 * Value	State	                Description
    0	    UNSENT	                Client has been created. open() not called yet.
    1	    OPENED	                open() has been called.
    2	    HEADERS_RECEIVED	    send() has been called, and headers and status are available.
    3	    LOADING	                Downloading; responseText holds partial data.
    4	    DONE	                The operation is complete.
 */
