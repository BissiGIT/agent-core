const axios = require('axios').default;
const fs = require("fs");
var PathUpdate = "./test/agent-website/update/";

function UpdateList() {
    axios.get('http://192.168.1.202:6102/notification')
        .then(function(response) {
            let updateData = response.data;
            let UDCount = Object.keys(updateData).length
            for (let i = 0; i < UDCount; i++) {
                let Module = Object.keys(updateData)[i];
                if (Module !== "agent-core") {
                    let rawdata = fs.readFileSync('./modules/' + Module + "/config.json");
                    let UpData = JSON.parse(rawdata);
                    if (UpData.build !== updateData[Module].build) {
                        var dataFork = {
                                update: true,
                                version: updateData[Module].version,
                                build: updateData[Module].build
                            }
                            // Conversion
                        const forkinfoJSON = JSON.stringify(dataFork);
                        const forkinfoObject = JSON.parse(forkinfoJSON);
                        // Converting js object into JSON string
                        // and writting to data.json file
                        const dataJSON = JSON.stringify(forkinfoObject);
                        // Ecriture du fichier
                        fs.writeFileSync(PathUpdate + Module + ".json", dataJSON);
                    } else {
                        var dataFork = {
                                update: false,
                                version: updateData[Module].version,
                                build: updateData[Module].build
                            }
                            // Conversion
                        const forkinfoJSON = JSON.stringify(dataFork);
                        const forkinfoObject = JSON.parse(forkinfoJSON);
                        // Converting js object into JSON string
                        // and writting to data.json file
                        const dataJSON = JSON.stringify(forkinfoObject);
                        // Ecriture du fichier
                        fs.writeFileSync(PathUpdate + Module + ".json", dataJSON);
                    }
                } else {
                    let rawdata = fs.readFileSync('./test/' + Module + "/config.json");
                    let UpData = JSON.parse(rawdata);
                    if (UpData.build !== updateData[Module].build) {
                        var dataFork = {
                                update: true,
                                version: updateData[Module].version,
                                build: updateData[Module].build
                            }
                            // Conversion
                        const forkinfoJSON = JSON.stringify(dataFork);
                        const forkinfoObject = JSON.parse(forkinfoJSON);
                        // Converting js object into JSON string
                        // and writting to data.json file
                        const dataJSON = JSON.stringify(forkinfoObject);
                        // Ecriture du fichier
                        fs.writeFileSync(PathUpdate + Module + ".json", dataJSON);
                    } else {
                        var dataFork = {
                                update: false,
                                version: updateData[Module].version,
                                build: updateData[Module].build
                            }
                            // Conversion
                        const forkinfoJSON = JSON.stringify(dataFork);
                        const forkinfoObject = JSON.parse(forkinfoJSON);
                        // Converting js object into JSON string
                        // and writting to data.json file
                        const dataJSON = JSON.stringify(forkinfoObject);
                        // Ecriture du fichier
                        fs.writeFileSync(PathUpdate + Module + ".json", dataJSON);
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