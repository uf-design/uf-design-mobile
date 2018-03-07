/**
|--------------------------------------------------
| pub npm
|--------------------------------------------------
*/
const shell = require('shelljs')

if(shell.which('node')) {
    shell.cd('npm')
    shell.exec('npm publish')
    
}