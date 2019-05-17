# Fizzy Theme

[![demo](https://img.shields.io/badge/Demo-online-yellow.svg)](https://fizzy.cc/)
[![Ghost version](https://img.shields.io/badge/Ghost->=2.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Release](https://img.shields.io/github/release/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/)
[![GitHub forks](https://img.shields.io/github/forks/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/network)
[![GitHub stars](https://img.shields.io/github/stars/huangyuzhang/Fizzy-Theme.svg?style=social&label=Star)](https://github.com/huangyuzhang/Fizzy-Theme/stargazers)

做一个有味道的Ghost博客主题

[English Doc](https://github.com/huangyuzhang/Fizzy-Theme/blob/master/README.md)

![](./fizzy-theme-screenshot.png)


## 安装

下载[最新版本](https://github.com/huangyuzhang/fizzy-theme/releases/)后在 Ghost 后台 Setting > Design 处上传 zip 文件。

## 演示站点

我的博客 [fizzy.cc](https://fizzy.cc) 正在使用本主题哦.

如果你也在使用Fizzy主题，欢迎通过PR来添加你的站点，格式如下：
`- [站点名称](yourwebsitelink)`

## 特性及使用介绍

### 内部标签
- **首页幻灯片**: 为文章加入 `#carousel`(slug:`hash-carousel`) 来添加到首页顶部的幻灯片中（改进中）。
- **不在列表展示**: 包含 `#noindex`(slug:`hash-noindex`) 标签的文章将不在首页的文章列表中展示。 
> 限制: 使用 `#noindex` 隐藏一篇文章后，首页的文章展示数量也会因此减少一个。

### 自定义模板
- **标签目录**: 使用模板 `Tag Archive` 来为标签添加一个目录页。([demo](https://fizzy.cc/tag/))。
- **全宽**: 使用模板 `Full Width` 来使用全宽的文章模板。([demo](https://fizzy.cc/fizzy-theme/))。
- **启用目录**: 使用模板 `Post With Toc` 来启用文章的目录抓取功能，详见[#目录](#目录)。 ([demo](https://fizzy.cc/fizzy-theme/))
- **报告**: 为学术报告定制的页面 (计划中)

### 评论系统
因为 Ghost 目前不包含评论系统，我们需要通过第三方工具或库来实现评论系统。

推荐的解决方案有：[DISQUS][disqus]（海外友好）, [Gitalk][gitalk]（基于GitHub Issues）以及 [Valine][valine]（基于LeanCloud）。目前Fizzy 内置了 DISQUS 的支持。

#### DISQUS 设置
在Ghost后台 -> Code injection: `Site Header` 中插入一下代码，并修改为你的js路径。
```javascript
<script>
    var disqus_link = 'https://YOURLINK.disqus.com/embed.js';
</script>
```

如果你想要更换到其他的评论系统，则需要修改 `partial/post_comment.hbs` 中的代码。


### 代码高亮
Fizzy 主题使用了 Prism.js 作为代码高亮解决方案。
  - **支持的语言**: 标记语言（如 HTML）, CSS, C-like, JavasSript, Bash, Ruby, Git, JSON, Markdown, SQL, Python, R
  - **使用的插件**: line-numbers, toolbar, show-language.

如果要添加其他语言，根据提示修改 `default.hbs` 底部的代码来添加其他语言。

或者你也可以在 Prism 官网根据你的需要定制你的 `prism.js` 和 `prism.css` 来替换 `assets` 目录中的对应文件。

### 目录
目前 Fizzy 主题支持两种控制文章内章节目录的方法：
1. 在  `Post Header`（单篇文章） 或者 `Site Header`（全站） 中插入如下代码（Code injection）：
    ```javascript
    <script>
        var show_toc = true; // 启用 TOC (默认: false)
    </script>
    ```
2. 使用自定义模板 `Post With Toc` 来启用章节目录。
> **优先级**: 自定义模板 > 文章 `Post Header` > 站点 `Site Header`

### 其他内容
- **导航**: 修改 `partials/navigation.hbs` 来自定义下来菜单，如果不需要也可以将相应代码删除。
- **徽章**: 使用 `class="badge <color>"` 来使用徽章 (仅支持 HTML 块).([demo](https://fizzy.cc/fizzy-theme/#badge))
- **每页文章数**: 在 `package.json` 中修改 `"posts_per_page": 8` 的数字来修改每页展示的文章数量。

## 版本更新日志

查看完整版本更新日志： [CHANGELOD.md](https://github.com/huangyuzhang/Fizzy-Theme/blob/master/CHANGELOG.md)

## 作者

- 黄玉章 (Simon)

## 依赖

- [Bulma][bulma] - CSS 框架
- [Prismjs][prismjs] - 一个轻量的代码高亮工具
- [JQuery][jquery] - 一个知名的 JavaSript 库 (因为使用 tocify 引入)
- [jQuery.tocify.js][tocify] - 一个根据文章内标题生成目录的工具 (引入 JQuery-UI)
- [KaTeX][katex] - 一个渲染非常快速的 LaTeX 数学公式显示引擎 (since v0.3.0)

## 报告问题 & 改进建议
如果各位在使用过程中发现BUG，有功能或节目的修改建议或者想要主题支持一些新的功能，请前往issue页面提交并正确选择label。

或者，你也可以直接对此项目贡献代码。 

## 如何贡献代码

1. Fork 本项目（请大佬点个赞支持作者）
2. 创建新的功能分支，如 `git checkout -b feature-fooBar`
3. 提交并注释修改，如 `git commit -am 'Add something'`
4. 同步到远程仓库，如 `git push origin feature-fooBar`
5. 创建一个 Pull Request


## 开源协议

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