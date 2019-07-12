### 各配置项的用处

1. babel-polyfill babel-plugin-transform-runtime 解决浏览器兼容性问题
2. css-loader style-loader  编译CSS
3. postcss-loader 自动添加前缀，需新建 `postcss.config.js` 配置
4. mini-css-extract-plugin 抽取CSS到独立文件
5. html-webpack-plugin 复制并压缩Html文件
6. clean-webpack-plugin 打包前清理源目录文件，自动判断哪些不需要就删除
7. file-loader 静态资源处理
8. webpack-dev-server development模式下启动服务器并实时刷新

### Notes
1. path.join():方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
2. path.resolve:方法会把一个路径或路径片段的序列解析为一个绝对路径
3. 热更新原理：
    1.启动阶段：
      (1)文件通过webpack-complier编译后，将生成的文件传递给bundle-server，
        bundle-server开启一个服务来支持文件通过类似localhsot:8080的方式在browser访问
      (2)HMR-Server在生成的文件中注入一个HMR-Runtime运行时，
        用来和brwoser建立连接通信，以便在文件更新时通知browser
    2.文件更新阶段
      (1)文件通过webpack-complier编译后，将更新的内容传递给HMR-Server。
      (2)HMR和HMR-Runtime通信，将更新的内容通常以json的形式传递，
        HMR-Runtime局部更新bundle.js的文件内容。
4. cacheDirectory是loader的一个特定的选项，默认值是false。指定的目录(use: 'babel-loader?cacheDirectory=cacheLoader')将用来缓存loader的执行结果，减少webpack构建时Babel重新编译过程。如果设置一个空值(use: 'babel-loader?cacheDirectory') 或true(use: 'babel-loader?cacheDirectory=true') 将使用默认的缓存目录(node_modules/.cache/babel-loader)，如果在任何根目录下都没有找到 node_modules 目录，将会降级回退到操作系统默认的临时文件目录。
