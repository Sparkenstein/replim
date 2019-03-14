'use strict';

const term = require('terminal-kit').terminal;
const { VM } = require('vm2');

(async function () {
    async function* userInput() {
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

    const vm = new VM();

    var history = [];

    var autoComplete = [
        'const',
        'let',
        'var',
        'function',
        'console'
    ];

    for await (const line of userInput()) {
        const output = vm.run(`${line}`);
        term.green(`\n${output}\n`);
    }
    process.exit();
})();
