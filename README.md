# Fizzy Theme

[![demo](https://img.shields.io/badge/Demo-online-yellow.svg)](https://fizzy.cc/)
[![Ghost version](https://img.shields.io/badge/Ghost->=2.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Release](https://img.shields.io/github/release/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/)
[![GitHub forks](https://img.shields.io/github/forks/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/network)
[![GitHub stars](https://img.shields.io/github/stars/huangyuzhang/Fizzy-Theme.svg?style=social&label=Star)](https://github.com/huangyuzhang/Fizzy-Theme/stargazers)

A tasty blogging theme for Ghost.

[中文文档](https://github.com/huangyuzhang/Fizzy-Theme/blob/master/README-zh.md)

![](./fizzy-theme-screenshot.png)

## Installation

Download the latest [release](https://github.com/huangyuzhang/fizzy-theme/releases/) and upload the zip file at your Ghost admin > Setting > Design.

## Demo

The [fizzy.cc](https://fizzy.cc) is currently using this theme.

(Use Pull Request to add your site with Fizzy Theme)

## Features and Usage

### Internal tags
- **Carousel**: Use internal tag `#carousel`(slug:`hash-carousel`) to add posts into carousel in home page. (in development)
- **No Index**: Use internal tag `#noindex`(slug:`hash-noindex`) to exclude posts from listing in home page. 
> limitation: hiding posts with `#noindex` tag, but the number of posts displayed for that page will change as well.

### Custom Templates
- **tag-archive**: You can use the tag archive template if you need one page to list all tags.([demo](https://fizzy.cc/tag/))
- **full-width**: full width post.([demo](https://fizzy.cc/fizzy-theme/))
- **post-with-Toc**: TOC-enabled post, details in [#TOC](#toc). ([demo](https://fizzy.cc/fizzy-theme/))
- **report**: special layout for academic report (todo)

### Comment System
Due to Ghost itself doesn't have a comment system, we need to use third party solutions for this. Some options are: [DISQUS][disqus], [Gitalk][gitalk] and [Valine][valine]. By default, Fizzy has DISQUS integrated.
- **DISQUS**: change `https://fizzycc.disqus.com/embed.js` with your own link in `/partial/post_comment.hbs`.

If you want to change the comment system, you need to modify the code in `partial/post_comment.hbs`.

### Code Highlight
Prism.js is used for syntax highlighting.
  - **Languages**: Markup (e.g. HTML), CSS, C-like, JavasSript, Bash, Ruby, Git, JSON, Markdown, SQL, Python, R
  - **Plugins**: line-numbers, toolbar, show-language.

To add languages, uncomment the sample code in `default.hbs` and change it accordingly.

Alternatively, you can download your own Prism js and css and overwrite the `prism.js` and `prism.css` files in `assets` folder.

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

**Notice**: enable TOC will disable the sticky navbar of that post due to the position of anchor scrolling (might be improved later)

### Components
- **Navigation**: You can modify `partials/navigation.hbs` to customize your dropdown menu, or delete the section if not needed.
- **Badge**: inclue `class="badge <color>"` to use badge (HTML only).([demo](https://fizzy.cc/fizzy-theme/#badge))
- **Posts per page**: change the number of `"posts_per_page": 8` in `package.json`

## Changelog

See [CHANGELOD.md](https://github.com/huangyuzhang/Fizzy-Theme/blob/master/CHANGELOG.md)

## Author

- Yuzhang Huang (Simon)

## Dependencies

- [Bulma][bulma] - CSS Framework
- [Prismjs][prismjs] - A lightweight syntax highlighter
- [JQuery][jquery] - A well-known JavaSript library (for tocify only now)
- [jQuery.tocify.js][tocify] - Table of Content generator (also JQuery-UI)
- [MathJax][mathjax] - A JavaScript display engine for mathematics (consider switching to KaTeX)

## Bug Report & Features Request
If you find a bug, thinking about something to be improved or even want new features, please feel free to post an issue and label appropriately. 

Alternatively if you are familiar with them development, you could start to contribute to this project.

## Contributing

1. Fork it (maybe star this too?)
2. Create your feature branch (`git checkout -b feature-fooBar`)
3. Commit your changes (`git commit -am 'Add something'`)
4. Push to the branch (`git push origin feature-fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

[bulma]: https://bulma.io/
[prismjs]: https://prismjs.com/
[jquery]: https://jquery.com/
[tocify]: http://gregfranko.com/jquery.tocify.js/
[mathjax]: https://www.mathjax.org/
[disqus]: https://disqus.com/
[gitalk]: https://github.com/gitalk/gitalk
[valine]: https://github.com/xCss/Valine