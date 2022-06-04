const path = './functions/config/config.json';
const { fork } = require("child_process");
const fs = require("fs");

const child = fork('agent-core/index.js');
// En cas de fermeture du NODE ---
child.on("close", function(code) {
    console.log("Alerte - Module arrêté || Code: " + code);
});