/**
 * Callback Hell
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. 
The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. 
It makes the code very difficult to understand and maintain. It is most frequently seen while working with Node.js. 
The code below shows an example of a callback hell.
*/

const getData = (resource, callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        if (req.status === 200 && req.readyState === 4) {
            const data = JSON.parse(req.responseText);
            callback(undefined, data);
        }
        else if (req.readyState === 4) {
            callback("ERROR", undefined);
        }
    })
    req.open('GET', resource);
    req.send();
}

// Callback hell
// First get data from mario.json => once done => then 
//       get data from pacman.json => once done => then 
//       get data from pinball.json
getData('./DATA/mario.json', (error, data) => {
    console.log(data);
    getData('./DATA/pacman.json', (error, data) => {
        console.log(data);
        getData('./DATA/pinball.json', (error, data) => {
            console.log(data);
        });
    });
});