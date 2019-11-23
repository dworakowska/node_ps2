const https = require('https');

https.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole', (resp) => {
    let data = ''

    resp.on('data', (chunk) => {
        console.log(chunk);
        data += chunk;
    });

    resp.on('end', () => {
        console.log(JSON.parse(data)[0].balance);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});