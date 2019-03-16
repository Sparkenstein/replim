'use strict';

const term = require('terminal-kit').terminal;
const userInput = require('./lib/userInput');
const repl = require('repl');

(async function () {
    function myEval(cmd, context, filename, callback) {
        // console.log('eval', context);
        callback(null, eval(cmd));
    }
    function myWriter(output) {
        console.log('->', output);
        return term.green("==", output);
    }

    try {
        repl.start({
            prompt: 'node> ',
            useColors: true,
            writer: myWriter,
            // eval: myEval
        });

        // server
        // for await (const line of userInput(term)) {
        //     vm.run(`\n${line}\n`);
        // }
    } catch (e) {
        console.error(e);
    }
    // process.exit();
})();
