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

    const replServer = repl.start({
        prompt: 'node> ',
        input: process.stdin,
        output: writable,
    });
    replServer.setupHistory('./logs');
    
})();
