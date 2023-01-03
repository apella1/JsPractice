function countBs(word) {
    for (let n of word) {
        let count = 0;
        if (n == 'B') {
            count += 1
            return count;
        }
    }
}

console.log(countBs('BooBsB'));

word = 'Jettison'

for (let n of word) {
    if (n == 'e') {
        let count = 0;
        count += 1;
        return count;
    }
}


const countChars = (wrd, chr) => {
    wrd.forEach(n => {
        if (n == chr) {
            let count = 0;
            count += 1;
            return count;
        }
    });
}


console.log(countChars('Carnival', 'a'));
