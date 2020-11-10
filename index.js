const noble = require('noble');

noble.on('stateChange', (cb) => {
    if(cb == "poweredOn"){
        noble.startScanning([],true);
        noble.on('discover', (da)=>{
            if(da.advertisement.localName == "moto g(7) power"){
                console.log(da.rssi);
                console.log(da.advertisement);
            }
        });
    }
})
