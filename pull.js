// FUNCTION PULL

function UpdateCore() {
    const gitPullOrClone = require('git-pull-or-clone')
    gitPullOrClone('git@github.com:feross/standard.git', '/core', (err) => {
        if (err) throw err
        console.log('SUCCESS!')
    })
}