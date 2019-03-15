'use strict';

const term = require('terminal-kit').terminal;
const { VM } = require('vm2');
const userInput = require('./lib/userInput');

(async function () {
    const vm = new VM();

    for await (const line of userInput(term)) {
        const output = vm.run(`${line}`);
        term.green(`\n${output}\n`);
    }
    process.exit();
})();
