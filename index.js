'use strict';

const stream = require('stream');
const repl = require('repl');

(async function () {

    const writable = new stream.Writable({
        write: function (chunk, encoding, next) {
            process.stdout.write(chunk.toString());
            next();
        }
    });

    repl.start({
        prompt: 'node> ',
        useColors: true,
        input: process.stdin,
        output: writable,
    });
    
})();
