'use strict';

const autoComplete = [
    'const',
    'let',
    'var',
    'function',
    'console'
];

const history = [];

async function* userInput(term) {
    while (true) {
        term('\njs> ');
        try {
            const ip = await term.inputField(
                {
                    history,
                    autoComplete,
                    autoCompleteMenu: false,
                    autoCompleteHint: true
                }
            ).promise;
            if (!ip) {
                return;
            }
            yield ip;
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = userInput;
