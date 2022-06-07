const path = './functions/config/config.json';
const { fork } = require("child_process");
const fs = require("fs");

function UpdateList() {
    axios.get('http://192.168.1.202:6102/notification')
        .then(function(response) {
            let updateData = response.data;
            let UDCount = Object.keys(updateData).length
            for (let i = 0; i < UDCount; i++) {
                let Module = Object.keys(updateData)[i];
                console.log(Module);
                if (Module !== "agent-core") {
                    let rawdata = fs.readFileSync('./modules/' + Module + ".json");
                    let UpData = JSON.parse(rawdata);
                    if (UpData.build == updateData[Module].build) {
                        console.log(updateData[Module].build);
                    }
                }
            }
        })
        .catch(function(error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.body);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
}

module.exports = { UpdateList }