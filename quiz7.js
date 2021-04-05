const DEFAULT_PERSON_OBJECT = {
    name: "Unknown",
    location: "Unknown",
    interests: [],
};

const createPerson = (name, location, interests)=>{
    const person = {...DEFAULT_PERSON_OBJECT};
    if (!!name) person.name = name;
    if (!!location) person.location = location;
    if(!!interests) person.interests = interests;
    return person;
}

const setName = (person, name)=>{
    person.name = name;
}
const setLocation = (person, location)=>{
    person.location = location;
}
const addInterest = (person, interest)=>{
    person.interests.push(interest);
}

const elon = createPerson('Elon', 'Mars', ['Tesla', 'SpaceX']);
const jeff = createPerson('Jeff', undefined, undefined);
const bill = createPerson('Bill', undefined, ['Microsoft']);
const warren = createPerson('Warren Buffet', undefined, ['investing']);

addInterest(elon, 'Space');
addInterest(elon, 'Renewable Energy');

setLocation(jeff, 'seattle');
addInterest(jeff, 'Amazon');
addInterest(jeff, '$$$');

setLocation(bill, 'Earth');
addInterest(bill, 'Medicine');

setLocation(warren,'Nebraska');
addInterest(warren, "stonks")



console.log(elon, jeff, bill, warren);

