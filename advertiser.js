const bleno = require('bleno');

bleno.on('stateChange', (cb)=> {
    if(cb == "poweredOn"){
        bleno.startAdvertising('ThiS tHINg', ['1803']);
        console.log('advertising');
    }
})