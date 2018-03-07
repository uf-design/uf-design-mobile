/**
|--------------------------------------------------
| deploy npm
|--------------------------------------------------
*/
const shell = require('shelljs'),
      path = require('path')
const sp = __dirname.substring(0, __dirname.length - 'shell'.length - 1)

let fr = path.join(sp, 'components/*'),
to = path.join(sp, 'npm/lib')

shell.echo('start cp fn...')
shell.cp('-Ru', fr, to)
// shell.exit(1)    
