const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    newString = String(expr);
    let symbol = '';
    let final = '';
    let sign = '';
    let morse = '';
    
    for(let a = 0; a < newString.length + 1; a++)
    {
        if ((a == 0) || !(a % 10 == 0)){
            symbol = symbol + newString[a];
        }
        else
        {
                for (let b = 0; b < symbol.length + 1; b++)
                {
                if ((b == 0) || !(b % 2 == 0)){
                    sign = sign + symbol[b];
                }
                else
                {
                    if (sign == '10')
                    {
                        morse = morse + '.';
                    }
                    else if (sign == '11')
                    {
                        morse = morse + '-';
                    }
                    sign = symbol[b];
                }
            }
            for(let el in MORSE_TABLE)
            {
                if(el == morse)
                {
                    final = final + MORSE_TABLE[el];
                }
            }
            if (symbol[2] == '*')
            {
                final = final + ' ';
            }
            symbol = newString[a];
            morse = '';   
            sign = ''; 
            }
    }
    return final;
}

module.exports = {
    decode
}
