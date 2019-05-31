# The Fizzy Theme 汽水主题

[![demo](https://img.shields.io/badge/Demo-online-yellow.svg)](https://fizzy.cc/)
[![Ghost version](https://img.shields.io/badge/Ghost->=2.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Release](https://img.shields.io/github/release/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/)
[![GitHub forks](https://img.shields.io/github/forks/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/network)
[![GitHub stars](https://img.shields.io/github/stars/huangyuzhang/Fizzy-Theme.svg?style=social&label=Star)](https://github.com/huangyuzhang/Fizzy-Theme/stargazers)

做一个有味道的 Ghost :ghost:博客主题

要充分使用本主题支持的功能，请仔细阅读本文档的教程。

[English Doc](./README.md)

![](./fizzy-theme-screenshot.png)

## :wrench: 安装

下载[最新版本](https://github.com/huangyuzhang/fizzy-theme/releases/)后在 Ghost 后台 Setting > Design 处上传 zip 文件。

## :movie_camera: 演示站点

我的博客 [fizzy.cc](https://fizzy.cc) 正在使用本主题哦.

如果你也在使用Fizzy主题，欢迎通过此[issue](https://github.com/huangyuzhang/Fizzy-Theme/issues/20)来添加你的站点。

## :tropical_drink: 特性及使用介绍

### Logo
如果你只上传了 **site icon**，网站的导航栏会展示：**site icon** + 网站名称 + 一个**main color** 为颜色的点，比如：
<img src="https://user-images.githubusercontent.com/40261916/58709309-cd666280-83b1-11e9-8253-1a2ceeca56d1.png" height="36px"> <img src="https://user-images.githubusercontent.com/40261916/58709326-d6573400-83b1-11e9-9c69-71274926322b.png" height="36px"/>

如果上传了**网站logo**，那么导航栏只会展示**网站logo**。

> 注意：由于导航栏是浅色背景，因此建议使用深色或彩色的logo。

### 多语言支持
你可以在 Ghost 后台 -> General -> "Publication Language" 更换主题展示的语言。简体中文已经翻译，直接配置里写`zh_CN`即可。如果要创建其他语言，请复制`locales`文件夹中的`en.json`并重命名为目标语言, 如西班牙语：`es.json`，并打开文件翻译内容。如果在上传或更新Fizzy主题后你修改过了`json`文件，那么需要通过重启Ghost使`json`生效。

请帮助我们翻译Fizzy主题到其他语言，并通过Pull Request来提交。

### 内部标签
内部标签以`#`开头，添加后将自动显示为内部标签。内部标签不会在前台显示，目前本主题支持的内部标签有：
- **首页幻灯片**: 为文章加入 `#carousel`(slug:`hash-carousel`) 来添加到首页顶部的幻灯片中（见：[展示橱窗](#展示橱窗)）。
- **不在列表展示**: 包含 `#noindex`(slug:`hash-noindex`) 标签的文章将不在首页的文章列表中展示。 
> 限制: 使用 `#noindex` 隐藏一篇文章后，首页的文章展示数量也会因此减少一个。

### 展示橱窗
展示橱窗可以用作文章的展示。橱窗仅在首页显示。在Ghost后台 Code injection -> `Site Header` 中加入以下代码来启用展示橱窗：

```javascript
<script>
  var show_showcase = true; //default: false
</script>
```

橱窗左侧的幻灯片自动抓取内部标签 `#carousel`。右侧自动抓取两篇推荐文章（featured post）。

![image](https://user-images.githubusercontent.com/40261916/58421728-a396fe00-8088-11e9-9c1b-12c765a7ed94.png)

### 自定义模板
在编辑文章或页面时，点击右上角齿轮图标⚙，在底部找到 `Template` 来更换模板。
- **标签目录**: 使用模板 `Tag Archive` 来为标签添加一个目录页。([demo](https://fizzy.cc/tag/))。
- **文章归档**: 使用模板 `Post Archive` 来为所有文章按照时间添加一个归档目录。([demo](https://fizzy.cc/archive/))
- **全宽**: 使用模板 `Full Width` 来使用全宽的文章模板。([demo](https://fizzy.cc/fizzy-theme/))。
- **启用目录**: 使用模板 `Post With Toc` 来启用文章的目录抓取功能，详见[#内页目录](#内页目录)。 ([demo](https://fizzy.cc/fizzy-theme/))
- **报告**: 为学术报告定制的页面 (计划中)

### 自定义CSS
修改 `assets/css/custom.css` 文件中的css变量来修改主题的颜色。

### 自定义底部文字
默认情况下网站底部会显示**站点描述**（Ghost后台 -> General）。如果你想要自定义底部文字，在 Ghost后台 -> Code injection -> `Site Header` 中添加以下代码并自定义：

```javascript
<script>
  var footer_text = "修改成你的自定义底部文字，可以包含HTML代码，但需要注意引号的使用";
</script>
```

### 评论系统
因为 Ghost 目前不包含评论系统，我们需要通过第三方工具或库来实现评论系统。

推荐的解决方案有：[DISQUS][disqus]（海外友好）, [Gitalk][gitalk]（基于GitHub Issues）以及 [Valine][valine]（基于LeanCloud）。目前Fizzy 内置了 Gitalk 和 DISQUS 的支持。

**评论功能默认是被禁用的**。如果你想要启用评论功能，首先在 Ghost后台的 Code injection -> `Site Header` 处添加以下代码来启用评论功能。另外，你可以在特定的文章页面 Code injection -> `Post Header` 处添加以下代码来单独控制该文章的评论功能。完成后在下方提供的评论系统中选择一种按照教程进行配置。

```javascript
<script>
  var show_comment = true; //default: false
</script>
```

#### Gitalk 设置 (推荐)
Gitalk 是一个基于 Github issue 来管理评论的工具。默认根据用户浏览器的语言来展示界面语言。
1. 注册一个新的 **GitHub Application**
2. 为你的网站创建一个新的 **Github Repository**
3. 在Ghost后台 -> Code injection: `Site Footer` 中插入以下代码，并修改为你的信息（来自上面两步）：

```javascript
<script>
const gitalk = new Gitalk({
  clientID: 'GitHub Application Client ID',
  clientSecret: 'GitHub Application Client Secret',
  repo: 'GitHub repo',
  owner: 'GitHub repo owner',
  admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
});
gitalk.render('gitalk-container');
</script>
```
> 更多配置请参考[这里](https://github.com/gitalk/gitalk/blob/master/readme-cn.md#%E4%BD%BF%E7%94%A8).


#### DISQUS 设置
在Ghost后台 -> Code injection: `Site Header` 中插入以下代码，并修改为你的js路径。
```javascript
<script>
    var disqus_link = 'https://YOURLINK.disqus.com/embed.js';
</script>
```

如果你想要更换到其他的评论系统，则需要修改 `partial/post_comment.hbs` 中的代码。


### 代码高亮
Fizzy 主题使用了 Prism.js 作为代码高亮解决方案，Fizzy主题默认使用的语言和插件有：
  - **支持的语言**: 标记语言（如 HTML）, CSS, C-like, JavasSript, Bash, Ruby, Git, JSON, Markdown, SQL, Python, R
  - **使用的插件**: line-numbers, toolbar, show-language.

访问 [自定义Prismjs][custom-prism] 来勾选你需要的语言。然后下载 js 和 css 文件以替换 `assets` 目录中的对应文件： `prism.js` 和 `prism.css`。

### 内页目录
目前 Fizzy 主题支持两种控制文章内章节目录的方法：
1. 在  `Post Header`（单篇文章） 或者 `Site Header`（全站） 中插入如下代码（Code injection）：
    ```javascript
    <script>
        var show_toc = true; // 启用 TOC (默认: false)
    </script>
    ```
2. 使用自定义模板 `Post With Toc` 来启用章节目录。
> **优先级**: 自定义模板 > 文章 `Post Header` > 站点 `Site Header`

### 即时搜索
如果需要开启即时搜索，首先在Ghost后台添加一个自定义 Integration，并记录下 **Content API Key** 和 **API URL**。
然后在 Code injection -> `Site Header`中加入以下代码并自定义：
```javascript
<script>
  var show_search = true; // 默认:false
  var search_key = '这里填写刚才获得的 Content API Key';
  var search_url = '这里填写刚才获得的 API URL'; // 一般情况下这个就是你的站点url
</script>
```

### LaTeX公式
使用 `$`（行内公式）或 `$$` 来包裹LaTeX公式以便主题渲染成公式。 ([示例](https://fizzy.cc/latex/))

### 其他内容
- **导航**: 修改 `partials/navigation.hbs` 来自定义下来菜单，如果不需要也可以将相应代码删除。
- **徽章**: 使用 `class="badge <color>"` 来使用徽章 (仅支持 HTML 块).([demo](https://fizzy.cc/fizzy-theme/#badge))
- **每页文章数**: 在 `package.json` 中修改 `"posts_per_page": 8` 的数字来修改每页展示的文章数量。

## :memo: 版本更新日志

查看完整版本更新日志： [CHANGELOD.md](./CHANGELOG.md)

## :sunglasses: 作者及贡献者

- 黄玉章 (Simon)

## :battery: 依赖

- [Bulma][bulma] - CSS 框架
- [Prismjs][prismjs] - 一个轻量的代码高亮工具
- [JQuery][jquery] - 一个知名的 JavaSript 库 (因为使用 tocify 引入)
- [jQuery.tocify.js][tocify] - 一个根据文章内标题生成目录的工具 (引入 JQuery-UI)
- [KaTeX][katex] - 一个渲染非常快速的 LaTeX 数学公式显示引擎 (since v0.3.0)
- [Gitalk][gitalk] - 一个基于 Github issued 的评论系统 (since v0.3.0)
- [ghost-search][ghost-search] - 一个基于 Ghost Content API 的搜索引擎 (since v1.0.0)

## :bug: 报告问题 & :dart: 改进建议
如果各位在使用过程中发现BUG，有功能或节目的修改建议或者想要主题支持一些新的功能，请前往issue页面提交并正确选择label。

或者，你也可以直接对此项目贡献代码。 

## :bulb: 贡献代码

1. Fork 本项目（请大佬点个赞支持作者）
2. 创建新的功能分支，如 `git checkout -b feature-fooBar`
3. 提交并注释修改，如 `git commit -am 'Add something'`
4. 同步到远程仓库，如 `git push origin feature-fooBar`
5. 创建一个 Pull Request


## :lock_with_ink_pen: 开源协议

本项目使用 MIT 开源协议。

[bulma]: https://bulma.io/
[prismjs]: https://prismjs.com/
[jquery]: https://jquery.com/
[tocify]: http://gregfranko.com/jquery.tocify.js/
[mathjax]: https://www.mathjax.org/
[katex]: https://katex.org/
[disqus]: https://disqus.com/
[gitalk]: https://github.com/gitalk/gitalk
[valine]: https://github.com/xCss/Valine
[custom-prism]: https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+ruby+git+json+markdown+sql+python+r&plugins=line-numbers+toolbar+show-language
[ghost-search]: https://github.com/HauntedThemes/ghost-search