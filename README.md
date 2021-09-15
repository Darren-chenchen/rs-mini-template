# 项目模板默认是采用 ts 语法

# 新建项目

```
npm i -g rs-mini-cli
rs-mini-cli init 项目名
```

# 新建 js 组件模板

```
rs-mini-cli js 文件名 文件路径
rs-mini-cli js test /src/pages

```

# 新建 ts 组件模板

```
rs-mini-cli ts 文件名 文件路径
rs-mini-cli ts test /src/pages

```

# 新建模块

```
 rs-mini-cli module 模块名 模块上层路径
 rs-mini-cli module test src/pages
```

# 运行事例程序,具体查看 package.json

```
npm run example
```

# 代码基本规范

- 每个 VUE 文件中必须提供 CSS 默认根样式，且该样式命名与 VUE 文件名保持一致, 并且禁止使用 id 调整样式

- 合理部局，并对 HTML 片段进行说明

- 所有自定义的 html 标签，不允许使用驼峰，默认采用分隔符。

- 监听事件处理统一采用`doXXX``，且事件名称应快可能短，例如：select, save, cancel, confirm

- 颜色值，特别是主题色，需要使用 color.scss 中的常量。在 class 中可以设置 `class="rs-color-primary"`,背景色 `class="rs-bg-primary"`

- 凡是能够知道变量类型的不允许使用 any，例如：已知 shop 类型为 string，则不允许定义为 any。

- ts 文件的代码编写先后顺序，从上到下： 属性、计算属性、生命周期、方法名

## 项目模板主要结构

```

├── src ---------------------------------------------工作目录
│ ├── static --------------------------------------站内静态资源
│ │ ├── example ---------------------------------演示程序图片
│ ├── components ----------------------------------全局组件库
│ │ └── rscss
│ │ └── rs-icon -----------------------------iconfont 资源
│ │ └── color.scss --------------------------颜色值变量
│ │ └── common.scss -------------------------全局的 css
│ ├── model ---------------------------------------网络层数据模型，要求采用 ts
│ ├── network -------------------------------------网络请求 API，要求采用 ts
│ │ └── TestApi.ts ----------------------------- 每个模块对应的接口封装
│ ├── pages ---------------------------------------界面模块
│ │ ├── example ---------------------------------演示模块
│ │ ├── ... ------------------------------------ 其他模块
│ ├── pagesChart ----------------------------------演示图表模块（分包）
│ │ ├── components ------------------------------图表的封装
│ │ ├── ... ------------------------------------ 其他分包页面
│ ├── router --------------------------------------界面路由
│ │ ├── modules ---------------------------------项目中涉及的路由放在这个文件夹下
│ │ ├── build.js --------------------------------动态把 modules 中的路由编译到 pages.json 中
│ │ ├── index.js --------------------------------对应 pages.json 中全局的一些配置
│ ├── router_example ------------------------------演示程序界面路由
│ ├── store ---------------------------------------vuex 跨页面传参
│ ├── utils ---------------------------------------工具包
│ ├── App.vue -------------------------------------主界面入口
│ ├── main.ts -------------------------------------主界面挂载
├── .prettierrc -------------------------------------prettier 配置文件
├── config.sh ---------------------------------------小程序正式和测试的 appid 配置文件
├── router_config.sh --------------------------------动态配置相关的脚本，将路由编译到 pages.json 中
├── start-dev.sh ------------------------------------自动化发布小程序测试环境脚本
├── start-pro.sh ------------------------------------自动化发布小程序正式环境脚本
```

# ts 中的 Nullable

```
// 示例，服务器返回的res.data可能是空值，使用Nullable修饰，外部接受时就会提示该返回值可能为空，从而避免空值报错
static test(page: number, pagesize: number): Promise<Nullable<BaseResponse<any>>> {
    let body = {}
    return fly.post(``, body, {}).then(res => {
      return res.data
    })
}
```

# 项目模板中的部分文件介绍

### `config.sh start-dev.sh start-pro.sh`

用于自动化打包使用。主要目的就是把 config.sh 中配置的 appid，写到微信小程序目录下的 project.config.json 中。
自动化打包也可借助微信 miniprogram-ci 上传，详情查看 [miniprogram-ci](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)

### `.prettierrc` 格式化代码配置文件

在保存代码时，prettier 会按照指定的规范格式化代码，保持统一风格。如果不生效，需要检查 vscode 的配置项是否有以下配置。

```
"prettier.requireConfig": true,
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

### `router_config.sh`

动态创建 router 脚本，通过 node 脚本，把对应的页面动态写入 pages.json 中。

### 分包的注意事项

如果使用分包，manifest.json 中需要配置 `"optimization": { "subPackages": true }`,详情见 https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization。
