const { exec } = require("child_process");

// FUNCTION PULL
function CloneCore() {
    exec('cd agent-core && git clone', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

function CloneFork() {
    exec('cd modules/agent-fork && git clone https://github.com/BissiGIT/agent-fork.git', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

function CloneWebsite() {
    exec('cd modules/agent-website && git clone https://github.com/BissiGIT/agent-website.git', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

function Test() {
    exec('dir', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

module.exports = { CloneCore, CloneFork, CloneWebsite, Test }