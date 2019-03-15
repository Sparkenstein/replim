'use strict';

const term = require('terminal-kit').terminal;
const { NodeVM } = require('vm2');
const userInput = require('./lib/userInput');

(async function () {
    const vm = new NodeVM({
        require: {
            external: true
        },
        console: 'inherit',
        sandbox: {
            term: term
        }
    });

    for await (const line of userInput(term)) {
        vm.run(`\n${line}\n`);
        // term.green(`\n${output}\n`);
    }
    process.exit();
})();
