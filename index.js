const term = require('terminal-kit').terminal;
const { VM } = require('vm2');

(async function () {

    async function* userInput(){
        while(true) {
            term('js> ');
            const ip = await term.inputField(
                { history: history, autoComplete: autoComplete, autoCompleteMenu: false, autoCompleteHint: true }
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
    ];

    for await (const line of userInput()) {
        term.green(`\n${line}\n`)
    }
    process.exit();
    
    function terminate() {
        term.grabInput( false ) ;
        setTimeout( function() { process.exit() } , 100 ) ;
    }
    
    term.on( 'key' , function( name , matches , data ) {
        console.log( "'key' event:" , name ) ;
        if ( name === 'CTRL_C' ) { terminate() ; }
    } ) ;
})();