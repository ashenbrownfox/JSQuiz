const EXISTING_APPLICATIONS = {
    1000: [121, 400, 517],
    7182: [223, 501, 870, 9001],
};

const getApplicationEligibility = (candidateId, age, companyId) => {
    if (age < 18) {
        return `Candidate isn't old enough to apply.`;
    } else if (EXISTING_APPLICATIONS[companyId].includes(candidateId)){
        return "Candidate has laready applied.";
    } else {
        return "Candidate can apply.";
    }
};

const data = {
    person: {id: 517, age: 26, name: "Clement Mil"},
    company: {
        id: 7182,
        info: {
            field: "Advertising",
            headquarterLocation: "California",
            humanResourcesInfo: {
                hasJobOpenings: true,
                numberOfEmployees: 100000,
                recruiterNames: ["Foobar","Foozball"],
            },
        },
        name: "Google",
    },
    isLookingForJob: true,
    jobTitle: "Software Engineer",
};

const {
    person: {id: personId, age},
    company: {id: companyId},
    isLookingForJob,
} = data;

if (isLookingForJob && company.info.humanResourcesInfo.hasJobOpenings){
    console.log(getApplicationElgibility(personId, age, companyId));
} else{
    console.log(
        `Candidate isn't looking for job atm or company doesn't have oepnings.`
    );
}

console.log("Hi");
