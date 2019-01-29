## Less安装
> create-react-app安装Less

#### create-react-app 脚手架中已经添加了 sass-loader 的支持，所以只需要安装 node-sass 插件即可

##### 安装 node-sass 插件
```
$ npm install node-sass --save
# 或者
# $ yarn add node-sass
```

####  npm run eject 展开webpack配置

> 由于 create-react-app 脚手架中并没有配置关于 less 文件的解析，所以我们需要自己进行配置。需要安装的插件 less， less-loader

```
npm install --save less less-loader
```

-----
> 运行完成之后，打开 config 目录下的 webpack.config.js 文件，找到 // style files regexes 注释位置，仿照其解析 sass 的规则，在下面添加两行代码

```
// 添加 less 解析规则
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

//找到 rules 属性配置，在其中添加 less 解析配置
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'less-loader'
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
    )
}
```

---
---
---
## 安装Ant-Design

#### 1. 安装包
```
npm install antd-mobile --save
```

#### 2. 修改index.html
> fastclick.js是解决移动端300ms延迟的方案。有些浏览器不支持promise，需要引入es6-promise支持.

```
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
</script>
```

#### 3. 安装 babel-plugin-import和react-app-rewired 插件
```
npm i --save babel-plugin-import
npm i react-app-rewired --save-dev
```

#### 4. 修改package.js
```
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

#### 5. 添加config-overrides.js
```
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
//     return config;
// };

const {
    override,
    fixBabelImports,
    addLessLoader,
} = require("customize-cra")

module.exports = override(
    fixBabelImports("babel-plugin-import", {
        libraryName: "antd-mobile",
        style: true
    }),
    addLessLoader({
        ident: 'postcss'
    })
);

```

#### 6. 安装customize-cra [Bug](https://github.com/timarney/react-app-rewired/issues/348)

```
npm install --save-dev customize-cra
```

