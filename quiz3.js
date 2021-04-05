const fooObj = {name: "foo"};
const barObj = {name: "bar"};

const getFoo = () => Promise.resolve(fooObj);
const getBar = () =>
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(barObj);

        },3000);
    });


    Promise.all([getFoo(), getBar()])
    .then((foo, bar)=>{
        console.log(fooObj, barObj);
        console.log(foo,bar);

        foo.isAnAlgoExpert = foo.name.includes("AlgoExpert");
        bar.isAnAlgoExpert = bar.name.includes("AlgoExpert");
        
        return [foo, bar];
        console.log(object);
    })
    .then(([foo,bar])=>{
        console.log(fooObj, barObj);
        console.log(foo,bar);
    })
    .catch(()=>{
        console.log("There was an error");
    })

    fooObj.name += " is an AlgoExper";
    barObj.name += " is a SystemsExpert";
    console.log(fooObj, barObj);