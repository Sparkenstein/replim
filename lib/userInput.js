'use strict';

var autoComplete = [
    'const',
    'let',
    'var',
    'function',
    'console'
];

var history = [];

async function* userInput(term) {
    while (true) {
        term('js> ');
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
    }
}

module.exports = userInput;
