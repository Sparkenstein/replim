'use strict';

const term = require('terminal-kit').terminal;
const { NodeVM } = require('vm2');
const userInput = require('./lib/userInput');
const stream = require('stream');

(async function () {
    const vmConsole = new console.Console({ stdout: new stream.PassThrough(), stderr: new stream.PassThrough() });

    const vm = new NodeVM({
        require: {
            external: true
        },
        console: 'inherit',
        sandbox: {
            term: term,
            vmConsole
        }
    });

    for await (const line of userInput(term)) {
        vm.run(`\nvmConsole("hello")\n`);
        // term.green(`\n${output}\n`);
    }
    process.exit();
})();
