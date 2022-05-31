// jshint esversion: 6
'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('test');
    }    
};

const {border, background} = options.colors;
console.log(border);  

console.log(Object.keys(options).length);

// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for(let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
        
//     } else { 
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }
// }

delete options.name;
console.log(options);
options.makeTest();
// console.log(Object.keys(options));

const {width, colors} = options;
console.log(width, colors);

// delete(options.name);
// console.log(options);

for (let key in options) {
    console.log(` Свойство ${key} имеет значение ${options[key]} `);
}



let object = {
    name: 'Davron',
    surname: 'Gaziev',
    fathername: 'Tokhirjonovich',
    parameters: {
        age: 35,
        height: 178,
        weight: 65
    }
};

console.log(Object.keys(object).length);