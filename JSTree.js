/* var arr = ["bananas", "cranberries", "apples"];
arr.sort((a, b)=> a.localeCompare(b));
console.log(arr); */

const sayHello = (name) => {
    return name ? `Hello, ${name}!` : "Hello there!"; // TODO: return the correct value
  };
console.log(sayHello("Kobe"));

let person = {
    firstName: "Steven",
    lastName: "Schpiro",
    email: "shancock@allthingsjavascript.com",
    type: {
        type1: "admin",
        type2: "user"
    },
    active: true,
    address: {
        street: {
            street1: "100 N. Main",
            street2: "Apt 5"
        }, 
        city: "Lehi",
        zip: 10001
    }
};
var tree = {
    a: 1,
    b: 1,
    c: {
        a: 1,
        b: 1
    }
} //returns true
var tree2 = {
    a: 1,
    b: 1,
    c: {
        a: 1,
        b: 2
    }
} //returns false

const isObject = (val)=>{
    if(val ===null) return false;
    return (typeof val ==='object');
}
const iterateObject = (obj)=>{
    for(let val in obj){
        if(isObject(obj[val])){
            if(isObject(obj[val])){
                iterateObject(obj[val]);
            }
        } else{
            console.log(val, obj[val]);
        }
        
    }
};
console.log(iterateObject(person));


const treeisEqual = (tree) =>{
    for(let val in tree){
        if(isObject(tree[val])){
            treeisEqual(tree[val]);
        } else{
            console.log(val, tree[val]);
        }
    }
}
console.log(treeisEqual(tree));