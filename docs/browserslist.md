## Browserslist


> Browserslist 相关知识和配置。通过设置目标浏览器，可以让我们的代码更有针对性的输出兼容性代码（包括 CSS 前缀、JS 的 Polyfill 等），而不是无脑的全部兼容。

> Browserslist就是帮助我们来设置目标浏览器的工具。Browserslist 被广泛的应用到 Babel、postcss-preset-env、autoprefixer 等开发工具上。

> browserslist 实际上就是声明了一段浏览器的集合，我们的工具可以根据这段集合描述，针对性的输出兼容性代码。

### 配置

> Browserslist 的配置可以放在 `package.json`或`.browserslistrc`中。所有的工具都会主动查找 browserslist 的配置文件，根据 browserslist 配置找出对应的目标浏览器集合。

> 在package.json 中的配置是增加一个browserslist数组属性：

```json
{
    "browserslist": ["last 2 version", "> 1%", "maintained node versions", "not ie < 11"]
}
```

> .browerslistrc文件：

```sh
# 注释是这样写的，以#号开头
# 每行一个浏览器集合描述
last 2 version
> 1%
maintained node versions
not ie < 11
```

### 常见集合范围说明
范围 | 说明
---|---
last 2 versions	        | caniuse.com网站跟踪的最新两个版本，假如 iOS 12 是最新版本，那么向后兼容两个版本就是 iOS 11 和 iOS 12
> 1%	                | 全球超过 1%人使用的浏览器，类似> 5% in US则指代美国 5%以上用户
cover 99.5%	            | 覆盖 99.5%主流浏览器
chrome > 50 ie 6-8	    | 指定某个浏览器版本范围
unreleased versions	    | 说有浏览器的 beta 版本
not ie < 11	            | 排除 ie11 以下版本不兼容
since 2013 last 2 years	| 某时间范围发布的所有浏览器版本
maintained node versions |所有被 node 基金会维护的 node 版本
current node	         | 当前环境的 node 版本
dead	| 通过last 2 versions筛选的浏览器中，全球使用率低于0.5%且官方声明不在维护或者事实上已经两年没有再更新的版本
defaults	| 默认配置，> 0.5% last 2 versions Firefox ESR not dead


### 浏览器名称列表（大小写不敏感）

name | description
---|---
Android | 安卓 webview 浏览器
Baidu |  百度浏览器
BlackBerry / bb | 黑莓浏览器
Chrome | chrome 浏览器
ChromeAndroid/and_chr | chrome 安卓移动浏览器
Edge | 微软 Edge 浏览器
Electron  | Electron
Explorer/ie | ie 浏览器
ExplorerMobile/ie_mob | ie 移动浏览器
Firefox/ff | 火狐浏览器； *FirefoxAndroid/and_ff：火狐安卓浏览器
iOS/ios_saf | iOS Safari 浏览器
Node | nodejs
Opera | opera 浏览器
OperaMini/op_mini | operaMini 浏览器
OperaMobile/op_mob | opera 移动浏览器
QQAndroid/and_qq | QQ 安卓浏览器
Samsung | 三星浏览器
Safari | 桌面版本 Safari
UCAndroid/and_uc | UC 安卓浏览器


整个目标浏览器的集合是取并集，即满足上面的全部条件。
