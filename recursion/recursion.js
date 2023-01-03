const power = (base, exp) => {
    if (exp == 0) {
        return 1
    } else {
        return base * power(base, exp - 1)
    }
}

const powerFunc = (bs, exp) => {
    if (exp == 0) {
        return 1
    } else {
        return bs * powerFunc(bs, exp - 1)
    }
}