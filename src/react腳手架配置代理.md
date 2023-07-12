# react腳手架配置代理總結
## 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

說明：

1. 優點：配置簡單，前端請求資源時可以不加任何前缀。
2. 缺點：不能配置多個代理。
3. 工作方式：上述方式配置代理，當請求了3000不存在的資源時，那麼該請求會轉發给5000 （優先匹配前端資源）



## 方法二

1. 第一步：創建代理配置文件

   ```
   在src下創建配置文件：src/setupProxy.js
   ```

2. 編寫setupProxy.js配置具體代理規則：

   ```js
   const {createProxyMiddleware} = require('http-proxy-middleware');

    module.exports = function(app) {
      app.use(
        createProxyMiddleware('/api1', {  // 需要轉發的請求前綴（所有以/api1開頭的請求都會被轉發到5000端口）
          target: 'http://localhost:5000', // 轉發的目標地址（真實的伺服器地址，能夠返回數據的地址）
          changeOrigin: true, // 控制轉發請求頭中的host字段的值
          /*
            當changeOrigin設置為true時，伺服器收到的請求頭中的host為：localhost:5000
            當changeOrigin設置為false時，伺服器收到的請求頭中的host為：localhost:3000
            changeOrigin的默認值為false，但我們一般將changeOrigin值設為true
          */
          pathRewrite: {'^/api1': ''} // 去除請求前綴，確保將正常的請求地址發送給後端伺服器（必須配置）
        }),
        createProxyMiddleware('/api2', { 
          target: 'http://localhost:5001',
          changeOrigin: true,
          pathRewrite: {'^/api2': ''}
        })
      );
    };

   ```

說明：

優點：可以配置多個代理，可以靈活地控制請求是否走代理。
缺點：配置繁瑣，前端請求資源時必須加上代理的前綴。