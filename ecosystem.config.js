module.exports = {
  apps: [
    {
      "name": "uf-design-rn",  // 应用名称
      "script": "app.js",  // 实际启动脚本
      "cwd": "./",  // 当前工作路径
      "watch": [  // 监控目录
        "components"
      ],
      "ignore_watch": [ 
        "node_modules",
        "docs",
        "rn",
        "res",
        "shell"
      ],
      "watch_options": {
        "followSymlinks": false
      },
      "error_file": "logs/app-err.log",
      "out_file": "logs/app-out.log",
      "merge_logs": true,
      "log_date_format": "YYYY-MM-DD HH:mm Z",
      "env": {
        "NODE_ENV": "dev"  // 环境参数
      }
    }
  ]
}