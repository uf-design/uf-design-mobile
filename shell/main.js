/**
|--------------------------------------------------
| main process
|--------------------------------------------------
*/
const path = require('path')
const shell = require('shelljs')
module.exports = function (dir) {
    const fr = path.join(dir, 'components/*'),
        to = path.join(dir, 'rn/UFDesign/dist/components')

    shell.echo('change...', fr, '-', to)
    shell.cp('-Ru', fr, to)
    shell.exit(1)
}