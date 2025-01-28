/* 
    child process is a node module used to create a sub process within a script
    you can perform different tasks with your script by just using some methods
*/

const cp = require('child_process')

// cp.execSync('calc') // to run a particular command

// cp.execSync('start brave www.facebook.com') // start brave --> for opening brave , then give url of site you want to open

console.log("output -: "+ cp.execSync('node randomJokes.js')) // open a file