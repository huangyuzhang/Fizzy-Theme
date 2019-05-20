# Fizzy Theme

[![demo](https://img.shields.io/badge/Demo-online-yellow.svg)](https://fizzy.cc/)
[![Ghost version](https://img.shields.io/badge/Ghost->=2.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Release](https://img.shields.io/github/release/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/)
[![GitHub forks](https://img.shields.io/github/forks/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/network)
[![GitHub stars](https://img.shields.io/github/stars/huangyuzhang/Fizzy-Theme.svg?style=social&label=Star)](https://github.com/huangyuzhang/Fizzy-Theme/stargazers)

A tasty blogging theme for Ghost :ghost:.

[中文文档](https://github.com/huangyuzhang/Fizzy-Theme/blob/master/README-zh.md)

![](./fizzy-theme-screenshot.png)

## :wrench: Installation

Download the latest [release](https://github.com/huangyuzhang/fizzy-theme/releases/) and upload the zip file at your Ghost admin > Setting > Design.

## :movie_camera: Demo

My blog [Fizzy.cc](https://fizzy.cc) is currently using this theme.

Use this [issue](https://github.com/huangyuzhang/Fizzy-Theme/issues/20) to add your site with Fizzy Theme.

## :tropical_drink: Features and Usage

### i18n
You can change the theme's language by configure in Ghost Admin -> General -> "Publication Language". Also, you need to copy the `en.json` file within the `locales` folder, and rename it to your language, e.g. `es.json`. Then modify the translations within it. Finally, if you changed the json file after you upload or update the Fizzy theme, you need to restart the ghost to refresh the `json` file.

Please help us to translate Fizzy into your language by Pull Request.

### Internal tags
- **Carousel**: Use internal tag `#carousel`(slug:`hash-carousel`) to add posts into carousel in home page. (improving)
- **No Index**: Use internal tag `#noindex`(slug:`hash-noindex`) to exclude posts from listing in home page. 
> limitation: hiding posts with `#noindex` tag, but the number of posts displayed for that page will change as well.

### Custom Templates
- **tag-archive**: You can use the tag archive template if you need one page to list all tags.([demo](https://fizzy.cc/tag/))
- **full-width**: full width post.([demo](https://fizzy.cc/fizzy-theme/))
- **post-with-Toc**: TOC-enabled post, details in [#TOC](#toc). ([demo](https://fizzy.cc/fizzy-theme/))
- **report**: special layout for academic report (todo)

### :speech_balloon: Comment System
Due to Ghost itself doesn't have a comment system, we need to use third party solutions for this. Some options are: [DISQUS][disqus], [Gitalk][gitalk] and [Valine][valine]. By default, Fizzy has DISQUS integrated. Skip the following if you do not need the comment system.

#### DISQUS
Insert the following code into Ghost Admin -> Code injection: `Site Header`, and modify the link with yours.
```javascript
<script>
    var disqus_link = 'https://YOURLINK.disqus.com/embed.js'; // change it with your DISQUS js link
</script>
```
If you want to change the comment system, you need to modify the code in `partial/post_comment.hbs`.

###  Code Highlight
Prism.js is used for syntax highlighting, the default languages and plugins used by Fizzy theme are:
  - **Languages**: Markup (e.g. HTML), CSS, C-like, JavasSript, Bash, Ruby, Git, JSON, Markdown, SQL, Python, R
  - **Plugins**: line-numbers, toolbar, show-language.

To customize this yourself, open [customize Prismjs][custom-prism] and choose the languages you need. Then download the js and css files to overwrite the `prism.js` and `prism.css` files in `assets` folder.

### TOC
There are two ways to control the TOC of a post:
1. insert the following code into `Post Header` for a single post or `Site Header` for the whole site;
    ```javascript
    <script>
        var show_toc = true; // enable TOC (default: false)
    </script>
    ```
2. Use custom post template `Post With Toc` to enable TOC. 
> **Prioty**: `template` > `Post Header` > `Site Header`

### LaTeX support
Use `$`(inline) or `$$` to cover commands to render for LaTeX commands. ([examples](https://fizzy.cc/latex/#2.code))

### Components
- **Navigation**: You can modify `partials/navigation.hbs` to customize your dropdown menu, or delete the section if not needed.
- **Badge**: inclue `class="badge <color>"` to use badge (HTML only).([demo](https://fizzy.cc/fizzy-theme/#badge))
- **Posts per page**: change the number of `"posts_per_page": 8` in `package.json`

## :memo: Changelog

See [CHANGELOG.md](https://github.com/huangyuzhang/Fizzy-Theme/blob/master/CHANGELOG.md)

## :sunglasses: Author

- Yuzhang Huang (Simon)

## :battery: Dependencies

- [Bulma][bulma] - CSS Framework
- [Prismjs][prismjs] - A lightweight syntax highlighter
- [JQuery][jquery] - A well-known JavaSript library (for tocify only now)
- [jQuery.tocify.js][tocify] - Table of Content generator (also JQuery-UI)
- [KaTeX][katex] - A faster LaTeX equation rendering library. (since v0.3.0)

## :bug: Bug Report & :dart: Features Request
If you find a bug, thinking about something to be improved or even want new features, please feel free to post an issue and label appropriately. 

Alternatively if you are familiar with them development, you could start to contribute to this project.

## :bulb: Contributing

1. Fork it (maybe star this too?)
2. Create your feature branch (`git checkout -b feature-fooBar`)
3. Commit your changes (`git commit -am 'Add something'`)
4. Push to the branch (`git push origin feature-fooBar`)
5. Create a new Pull Request

## :lock_with_ink_pen: License 

This project is licensed under the MIT License.

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