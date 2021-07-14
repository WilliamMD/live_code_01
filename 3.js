 let groups = [
    {
        name: "Twoosh",
        price: 500
    },
    {
        name: "Itsy",
        price: 175
    },
    {
        name: "GET7",
        price: 550,
    },
    {
        name: "Whitepink",
        price: 250
    },
    {
        name: "JYV",
        price: 300
    }
]

function hireGroup(groups, budget) {
    let performances = {};
    let countPerformances = 0;
    let stopLoop = false;

    while (stopLoop === false) {     
        for (let i = 0; i < groups.length; i++) {
            if (budget >= groups[i].price) {
                budget -= groups[i].price;
                
                countPerformances++;
                // performances = {test: countPerformances};
                performances["groups[i].name"] = countPerformances;
            } else {
                stopLoop = true;
            }
            countPerformances = 0;
        }

    }

    return console.log(`${performances}\nexchange: ${budget}`);
}

hireGroup(groups, 5350);