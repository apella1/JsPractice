const humus = (factor) => {
    const ingredient = (amount, unit, name) => { 
        let ingredientAmount = amount * factor;

        if (ingredientAmount > 1) {
            unit += 's'
        }
        console.log(`${ingredientAmount} ${unit} of ${name}.`);
    }
    
    ingredient(2, 'kg', 'manure')
    ingredient(3, 'can', 'water')
}

console.log(humus(2))


/** class Humus {
    constructor(factor) {
        this.factor = factor;
    }
    
    ingredient = (amount, unit, name) => {
        let ingredientAmount = amount * this.factor;

        if (ingredientAmount > 1) {
            unit += 's'
        }

        console.log(`${ingredientAmount} ${unit} of ${name}.`);
    }

    ingredient(2, 'kg', 'manure')
    ingredient(3, 'can', 'water')

}
**/

// functions as values - contrasting function values to the function bindings
