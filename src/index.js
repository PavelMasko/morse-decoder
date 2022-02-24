const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const strArray = expr.split('**********');
    const slisedArray = strArray.map(elem => {
        const letterArray = [];
        for (let i = 0; i < elem.length; i = i + 10) {
            const letter = elem.slice(i, i + 10);
            const convertedLetter = letter.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');
            const decodedLetter = MORSE_TABLE[convertedLetter];
            letterArray.push(decodedLetter);
        }
        return letterArray;
    });

    return slisedArray.map(elem => {
        return elem.join('')
    }).join(' ')
}

module.exports = {
    decode
}