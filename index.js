const term = require('terminal-kit').terminal;
const { VM } = require('vm2');

(async function () {

    async function* userInput(){
        console.log("inside generator");
        while(true) {
            const ip = await term.inputField(
                { history: history, autoComplete: autoComplete, autoCompleteMenu: false, autoCompleteHint: true }
            ).promise;
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
    ];

    term('js> ');
    const ip = userInput()
    if (ip.next()) {
        const input = await ip.next();
        console.log(input)
        // const op = vm.run(`${input}`);
        // term.green(`\n${input}\n`);    
    }
    process.exit();
})();