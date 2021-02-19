# The Fizzy Theme 汽水主题

[![demo](https://img.shields.io/badge/Demo-online-yellow.svg)](https://fizzy.cc/)
[![Ghost version](https://img.shields.io/badge/Ghost->=3.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Release](https://img.shields.io/github/release/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/)
[![GitHub forks](https://img.shields.io/github/forks/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/network)
[![GitHub stars](https://img.shields.io/github/stars/huangyuzhang/Fizzy-Theme.svg?style=social&label=Star)](https://github.com/huangyuzhang/Fizzy-Theme/stargazers)

一个有滋味的 Ghost :ghost:博客主题

感谢所有给本项目小星星的朋友。要充分使用本主题支持的功能，请仔细阅读本文档哦。

[English Doc](./README.md)

![](https://user-images.githubusercontent.com/40261916/60045241-3e045480-96bc-11e9-9382-03789cd8a637.jpg)

## 🔧 安装

- [稳定版本](https://github.com/huangyuzhang/Fizzy-Theme/releases/latest/)
- [开发版本](https://github.com/huangyuzhang/Fizzy-Theme/tags/)

下载对应版本 `.zip` 压缩包后在 Ghost 后台 Setting > Design 处上传。

## 🎥 演示站点

我的博客 [fizzy.cc](https://fizzy.cc) 正在使用本主题哦.

如果你也在使用Fizzy主题，欢迎通过此[issue](https://github.com/huangyuzhang/Fizzy-Theme/issues/20)来添加你的站点。

## 🍹 特性及使用介绍

### Logo
如果你只上传了 **site icon**，网站的导航栏会展示：**site icon** + 网站名称 + 一个**main color** 为颜色的点，比如：
<img src="https://user-images.githubusercontent.com/40261916/58709309-cd666280-83b1-11e9-8253-1a2ceeca56d1.png" height="36px"> <img src="https://user-images.githubusercontent.com/40261916/58709326-d6573400-83b1-11e9-9c69-71274926322b.png" height="36px"/>

如果上传了**网站logo**，那么导航栏只会展示**网站logo**。

> 注意：由于导航栏是浅色背景，因此建议使用深色或彩色的logo。

### :earth_africa: 多语言支持
你可以在 Ghost 后台 -> General -> "Publication Language" 更换主题展示的语言。简体中文已经翻译，直接配置里写`zh_CN`即可。

|  代码   |   语言   | 翻译状态 | 译者 |
| :-----: | :------: | :------: | :--: |
|  `de`   | 德语  |   ✔️   |[Marek Schmidt](https://github.com/MSDev201)|
|  `en`   | 英语  |    ✔️    ||
| `fr` | 法语 |   ✔️   |[Lourys](https://github.com/Lourys)|
| `it` | 意大利语|   ✔️   |[Pyrox](https://github.com/Pyr0x1)|
| `pt_BR` | 葡萄牙语（巴西） |   ✔️   |[matheusvanzan](https://github.com/matheusvanzan)|
| `ta` | 泰米尔语 |   ✔️   | [MC Naveen](https://github.com/the-mcnaveen) |
| `tr` | 土耳其语 |   ✔️   |[talut](https://github.com/talut)|
| `zh_CN` | 简体中文 |    ✔️    ||

请帮助我们翻译主题语言。首先请fork本项目，然后复制`locales`文件夹中的`en.json`并重命名为目标语言, 如西班牙语：`es.json`，并打开文件翻译内容。测试之后请提交 Pull Request 到 `dev` 分支。

### 资源本地化
你可以修改CSS以及js文件的CDN来针对特定地区进行优化。可修改的文件有：
- `./default.hbs`
- `./partials/post/post_footer.hbs`
- `./partials/post/post_toc.hbs`

> 使用的 Google Fonts 已经做了本地化支持，在 `./default.hbs` 20行左右进行修改以启用。

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

![showcase](https://user-images.githubusercontent.com/40261916/60126667-65bfef00-9786-11e9-94e8-eaa4c2a4559f.jpg)

### 作者页面
你可以在Ghost后台 -> **Profile** 编辑作者的详情，如： **姓名**、**头像**、**背景图片**、**社交账号**、**地址**和**签名**。作者页面([demo](https://fizzy.cc/author/simon/))

### 标签页面
你可以在Ghost后台 -> **tags** 编辑标签的详情，如：**图片**和**描述**。标签页面([demo](https://fizzy.cc/tag/blogging/))

### 自定义模板
在编辑文章或页面时，点击右上角齿轮图标⚙，在底部找到 `Template` 来更换模板。
- **标签目录**：使用模板 `Tag Archive` 来为标签添加一个目录页。([demo](https://fizzy.cc/tag/))。
- **文章归档**：使用模板 `Post Archive` 来为所有文章按照时间添加一个归档目录。([demo](https://fizzy.cc/archive/))
- **全宽**：使用模板 `Full Width` 来使用全宽的文章模板。([demo](https://fizzy.cc/fizzy-theme/))。
- **启用目录**：使用模板 `Post With Toc` 来启用文章的目录抓取功能，详见[#内页目录](#内页目录)。 ([demo](https://fizzy.cc/fizzy-theme/))
- **推荐文章列表**：使用模板`Featured Posts Archive` 来使用推荐文章列表页面，页面标题和内容会被展示在顶部位置。 ([demo](https://fizzy.cc/featured/))

### 合集 Collection
若要使用 Ghost 的合集（Collection）功能，编辑 `routes.yaml`。之后修改 `home.hbs` 来自定义首页。完整配置请参阅：[Ghost文档 - Collections](https://docs.ghost.org/api/handlebars-themes/routing/collections/)

```yaml
routes:
  /: home # 首页模板：`home.hbs`

collections:
  /movie/: # 电影合集
    permalink: /movie/{slug}/
    template: movie # 使用模板 `movie.hbs`
    filter: tag:movie # 抓取标签为 movie 的文章
    data: tag.movie # 获取 movie 标签的内容以及meta数据
  /music/: # 音乐合集
    permalink: /music/{slug}/
    template: music # 使用模板 `music.hbs`
    filter: primary_tag:music # 抓取主标签为 music 的文章
    data: tag.music # 获取 music 标签的内容以及meta数据
```

> **注意**: 合集有一些已知的问题，如：[Ghost #10082](https://github.com/TryGhost/Ghost/issues/10082)。

### 自定义CSS变量
下载主题压缩文件并解压，修改 `assets/css/custom.css` 文件中的 CSS 变量来修改主题的颜色。之后将解压的所有文件打包成一个 `.zip` 压缩文件，上传到你的网站后台。

### 自定义底部文字
默认情况下网站底部会显示**站点描述**（Ghost后台 -> General）。如果你想要自定义底部文字，在 Ghost后台 -> Code injection -> `Site Header` 中添加以下代码并自定义：

```javascript
<script>
  var footer_text = "修改成你的自定义底部文字，可以包含HTML代码，但需要注意引号的使用";
</script>
```
> 你可以在 `footer_text` 中插入HTML内容，但是所有的引号都应该是单引号。例如：
> `var footer_text = "这是一个很<span style='color:red;font-weigh'>有趣</span>的网站 <i class='iconfont icon-heart'></i>";`

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

如果你想要更换到其他的评论系统，则需要修改 `partial/post/post_comment.hbs` 中的代码。


### 代码高亮
Fizzy 主题使用了 Prism.js 作为代码高亮解决方案，Fizzy主题默认使用的语言和插件有：
  - **支持的语言**: 标记语言（如 HTML）, CSS, C-like, JavasScript, Bash, Nginx, Ruby, Git, JSON, Markdown, SQL, Python, R
  - **使用的插件**: line-numbers, toolbar, show-language.

访问 [自定义Prismjs][custom-prism] 来勾选你需要的语言。然后下载 js 和 css 文件以替换 `assets` 目录中的对应文件： `prism.js` 和 `prism.css`。

#### 显示行号
![image](https://user-images.githubusercontent.com/40261916/60731259-0e1c4300-9f3f-11e9-93c8-a83fe5a878e8.png)
代码块默认不显示行号。在  `Post Header`（单篇文章） 或者 `Site Header`（全站） 中插入如下代码来让代码块显示行号:
```js
<script>
  var line_numbers = true; //默认: false
</script>
```

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

> **注意**： 默认情况下会展示文章中的 h2 和 h3 标题。如果你想要展示其他标题（比如 h1 或 h4），你需要修改 `partials/post/post_toc.hbs` 文件中的 `selectors`。 但是，一个页面应当只有一个 h1 标题， 即文章标题。

### 即时搜索
搜索功能使用 Ghost Content API。如果需要开启即时搜索，首先在Ghost后台添加一个自定义 Integration，并记录下 **Content API Key** 和 **API URL**。
然后在 Code injection -> `Site Header`中加入以下代码并自定义：
```javascript
<script>
  var show_search = true; // 默认:false
  var search_key = '引号内填写刚才获得的 Content API Key';
  var search_url = '引号内填写刚才获得的 API URL'; // 一般情况下这个就是你的站点url
</script>
```

### LaTeX公式
使用 `$`（行内公式）或 `$$` 来包裹LaTeX公式以便主题渲染成公式。 ([示例](https://fizzy.cc/latex/))

### 链接页面
你可以通过添加页面来展示与网站相关的站外链接，如“我的站点”、“友情链接”。Ghost于v2.30版本后支持了**书签卡**功能，可以在Ghost编辑器中输入 `/bookmark` 来插入书签链接。你可以用此方式为页面添加链接。（[示例](https://fizzy.cc/links/)）

### 其他设置
- **导航**：修改 `partials/navigation.hbs` 来自定义下来菜单，如果不需要也可以将相应代码删除。
- **徽章**：使用 `class="badge <color>"` 来使用徽章 (仅支持 HTML 块).([示例](https://fizzy.cc/fizzy-theme/#badge))
  - 支持的颜色: 黑白、红色、黄色、绿色、蓝色、紫色
![image](https://user-images.githubusercontent.com/40261916/64512639-70b40580-d319-11e9-9218-b1937c2e4b4f.png)
    > 注意: 使用 `class="badge"`来表示无色。
- **每页文章数**：在 `package.json` 中修改 `"posts_per_page": 8` 的数字来修改每页展示的文章数量。
- **表格**：若要让一个单元格中的内容不换行，取消 `assets/css/main.css` 中大约703行左右的注释 `/* white-space: nowrap; */`。
- **文章列表摘要**：由于中英文字数统计方式不同，如果网站语言为类中文语言，文章列表页面的摘要可能过长。有两种方法解决：
  1. 修改 `partials/list_card.hbs`约第56行，将`{{excerpt words="40"}}`改成`{{excerpt characters="30"}}`，数字为显示的字数。
  2. 编辑文章时为每篇文章自定义Excerpt，则会忽略截取的 word 或 character。

### 鸣谢按钮
如果你想要关闭导航栏右上角的 "Get Fizzy Theme" 按钮，请在站点 `Code Injection` 的 `Site Header` 中加入以下代码：

```javascript
<script>
  var fizzy_credit = false; // 默认:true
</script>
```
> 请勿移除页面底部的 "Using The Fizzy Theme" 及其链接。感谢支持！
---
## 📝 版本更新日志

查看完整版本更新日志： [CHANGELOG.md](./CHANGELOG.md)

## 🍻 贡献者

查看[贡献者列表][contributors]

## 🔋 依赖

- [Bulma][bulma] - CSS 框架
- [Prismjs][prismjs] - 一个轻量的代码高亮工具
- [JQuery][jquery] - 一个知名的 JavaScript 库 (因为使用 tocify 引入)
- [jQuery.tocify.js][tocify] - 一个根据文章内标题生成目录的工具 (引入 JQuery-UI)
- [KaTeX][katex] - 一个渲染非常快速的 LaTeX 数学公式显示引擎 (since v0.3.0)
- [Gitalk][gitalk] - 一个基于 Github issued 的评论系统 (since v0.3.0)
- [ghost-search][ghost-search] - 一个基于 Ghost Content API 的搜索引擎 (since v1.0.0)
- [iconfont][iconfont] - 一个免费的图标解决方案 (since v1.2.3)

## 📍 开发路线图
请访问我们的[路线图][roadmap]来了解本项目的未来开发计划。

## :bug: 报告问题 & :dart: 改进建议
如果各位在使用过程中发现BUG，有功能或节目的修改建议或者想要主题支持一些新的功能，请前往issue页面提交并正确选择label。

或者，你也可以直接对此项目贡献代码。 

## :bulb: 贡献代码

1. Fork 本项目（请大佬点个赞支持作者）
2. 创建新的功能分支，如 `git checkout -b feature-fooBar`
3. 提交并注释修改，如 `git commit -m 'Add something'`
4. 同步到远程仓库，如 `git push origin feature-fooBar`
5. 创建一个 Pull Request 到本项目的 `dev` 分支
6. 等待代码检查，在某些情况下可能需要进行修改


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
[custom-prism]: https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+ruby+git+json+markdown+nginx+sql+python+r&plugins=line-numbers+toolbar+show-language
[ghost-search]: https://github.com/HauntedThemes/ghost-search
[iconfont]:https://www.iconfont.cn
[contributors]: https://github.com/huangyuzhang/Fizzy-Theme/graphs/contributors
[roadmap]: https://github.com/huangyuzhang/Fizzy-Theme/projects/3
