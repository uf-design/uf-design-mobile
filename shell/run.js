/**
|--------------------------------------------------
| run native service
|--------------------------------------------------
*/
const shell = require('shelljs')
if (!shell.which('react-native') || !shell.which('node')) {
    shell.echo('Please install node and react-native cli...')
    shell.exit(1)
}
shell.cd('rn/UFDesign')
console.log(process.platform)
if (process.platform == 'wind32') {
    shell.exec('react-native run-android')
} else if (process.platform == 'linux') {
    shell.exec('react-native run-android')
} else if (process.platform == 'darwin') {
    shell.exec('react-native run-ios --simulator "iPhone 6s"')
}
shell.exit(1)
