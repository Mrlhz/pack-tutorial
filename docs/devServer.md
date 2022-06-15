## 开发中 Server(devServer)

- [devServer](https://www.webpackjs.com/configuration/dev-server/)
- [devserver-proxy](https://www.webpackjs.com/configuration/dev-server/#devserver-proxy)


### webpack跨域

> 前端单纯模拟数据
```js
devServer: {
  before(app){
    app.get('/some/path', function(req, res) {
      res.json({ custom: 'response' });
    });
  }
}
```

> 配置代理
```js
devServer: {
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      pathRewrite: {"^/api" : ""}
    }
  }
}
```

> 在服务端中启动webpack，端口用服务端端口
- [webpack-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware)

`yarn add webpack-dev-middleware -D`

```js
// webpack.config.js file
devServer: {}
```

```js
// server/index.js file

const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const config = require('../webpack.config')
const compiler = webpack(/** webpack options */ config )
const express = require('express')
const app = express()
 
const port = 3000

app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  })
)

app.get('/api', (req, res) => {
  res.json({ msg: 'hello world!' })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```
