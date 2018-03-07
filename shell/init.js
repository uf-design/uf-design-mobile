/**
|--------------------------------------------------
| init dev
|--------------------------------------------------
*/
const shell = require('shelljs')
if(shell.which('node')) {
    shell.exec('npm i')
    shell.cd('rn/UFDesign')
    shell.exec('npm i')
}
shell.exit(1)