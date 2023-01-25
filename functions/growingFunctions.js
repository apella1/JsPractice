const printFarmInventory = (cows, goats) => {
    let cowStr = String(cows);
    let goatStr = String(goats);
    
    while (cowStr.length < 3) {
        cowStr = '0' + cowStr;
    }
    console.log(`${cowStr} cows.`)

    while (goatStr.length < 3) {
        goatStr = '0' + goatStr;
    }
    console.log(`${goatStr} goats.`)
}

printFarmInventory(234, 56);


function printMultipleAnimals (number, label) {
    let numString = String(number);
    while (numString.length < 3) {
        numString = '0' + numString;
    }
    
    console.log(`${numString} ${label}.`)
    
}

const printInventory = (cows, sheep, pigs) => {
        printMultipleAnimals(cows, 'cows')
        printMultipleAnimals(sheep, 'sheep')
        printMultipleAnimals(pigs, 'pigs')
    }

printInventory(3, 88, 190);


function zeroPad(number, width) {
    let string = String(number);

    while (string.length < width) {
        string = '0' + string;
    }
    return string;
}

const printFarm = (camels, dogs, cats, ducks) => {
    console.log(`${zeroPad(camels, 3)} camels.`);
    console.log(`${zeroPad(dogs, 3)} dogs.`);
    console.log(`${zeroPad(cats, 3)} cats.`);
    console.log(`${zeroPad(ducks, 3)} ducks.`);
}

printFarm(2, 23, 778, 8992);
