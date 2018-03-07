module.exports = {
    openBrowser(cp, url) {
        let cmd
        if (process.platform == 'wind32') {
            cmd = 'start "%ProgramFiles%\Internet Explorer\iexplore.exe"';
          } else if (process.platform == 'linux') {
            cmd = 'xdg-open';
          } else if (process.platform == 'darwin') {
            cmd = 'open';
          }
          cp.exec(`${cmd} ${url}`)
    }
}