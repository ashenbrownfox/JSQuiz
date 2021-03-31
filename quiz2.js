const array1 = [{name: "foo"}, {name: "bar"}, {name: "barz"}, {name: "barz"}];

const array2 = new Array(array1.length).fill({});

const array3 = array1.map((obj, idx)=>({
    ...obj,
    position: idx,
}));

const array4= array1.slice();
array4.forEach((obj, idx)=>{
    obj.position = idx;
});

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);