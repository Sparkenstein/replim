const term = require('terminal-kit').terminal;
const { VM } = require('vm2');

(async function () {
    
    const vm = new VM(); 

    var history = [];

    var autoComplete = [
        'const',
        'let',
        'var',
        'function',
    ];

    term('js> ');

    const input = await term.inputField(
        { history: history, autoComplete: autoComplete, autoCompleteMenu: false, autoCompleteHint: true }
    ).promise;
    const op = vm.run(`${input}`);
    term.green(`\n${op}\n`);
    process.exit();
})();