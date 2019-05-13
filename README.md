# Fizzy Theme

[![demo](https://img.shields.io/badge/Demo-online-yellow.svg)](https://fizzy.cc/)
[![Ghost version](https://img.shields.io/badge/Ghost->=2.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Release](https://img.shields.io/github/release/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/)
[![GitHub forks](https://img.shields.io/github/forks/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/network)
[![GitHub stars](https://img.shields.io/github/stars/huangyuzhang/Fizzy-Theme.svg?style=social&label=Star)](https://github.com/huangyuzhang/Fizzy-Theme/stargazers)

A tasty blogging theme for Ghost.

![](./fizzy-theme-screenshot.png)

## Installation

Download [release](https://github.com/huangyuzhang/fizzy-theme/releases/) and upload the zip file at your Ghost admin > Setting > Design.

## Demo

The [fizzy.cc](https://fizzy.cc) is currently using this theme.

## Usage

- **Navigation**: You can modify `partials/navigation.hbs` to customize your dropdown menu, or delete the section if not needed.
- **Carousel**: Use internal tag `#carousel`(slug:`hash-carousel`) to add posts into carousel in home page.
- **No Index**: Use internal tag `#noindex`(slug:`hash-noindex`) to exclude posts from listing in home page. 
  - limitation: hiding posts with `#noindex` tag, but the number of posts each page will change accordingly.
- **Custom Templates**:
  - **tag-archive**: You can use the tag archive template if you need one page to list all tags.([demo](https://fizzy.cc/tag/))
  - **full-width**: full width post (default: TOC enabled)
  - **post-with-Toc**: TOC-enabled post ([demo](https://fizzy.cc/fizzy-theme))
  - **report**: special layout for academic report (todo)
- **DISQUS**: change `https://fizzycc.disqus.com/embed.js` with your own link in `post.hbs`.
- **Badge**: inclue `class="badge <color>"` to use badge (HTML only).([demo](https://fizzy.cc/fizzy-theme/#badge))
- **code highlight**: powered by Prism.js.
  - **Languages**: Markup (e.g. HTML), CSS, C-like, JavasSript, Bash, Ruby, Git, JSON, Markdown, SQL, Python, R
  - **Plugins**: line-numbers, toolbar, show-language.
  - For other languages, uncomment the sample code in `/partials/footer.hbs` and change it accordingly.
  - Alternatively, you can download your own Prism js and css and overwrite the `prism.js` and `prism.css` files in `assets` folder.
- **TOC**: to enable TOC for all posts, uncomment 2 lines in `post.hbs`

### Global Configuration
Go to Ghost Admin -> Code injection, insert the following code into Site Header and configure:

```javascript
<script>
    var show_toc = true; // enable TOC (default: true)
    var footer_text = ''; //Custom footer text
</script>
```

## Changelog

See [CHANGELOD.md](https://github.com/huangyuzhang/Fizzy-Theme/blob/master/CHANGELOG.md)

## Author

- Yuzhang Huang (Simon)

## Dependencies

- [Bulma][bulma] - CSS Framework
- [Prismjs][prismjs] - A lightweight, extensible syntax highlighter
- [JQuery][jquery] - The well-known JavasSript library
- [jQuery.tocify.js][tocify] - Table of Content generator

## License

This project is licensed under the MIT License.

## Contributing

1. Fork it (maybe star this too?)
2. Create your feature branch (`git checkout -b feature-fooBar`)
3. Commit your changes (`git commit -am 'Add something'`)
4. Push to the branch (`git push origin feature-fooBar`)
5. Create a new Pull Request

[bulma]: https://bulma.io/
[prismjs]: https://prismjs.com/
[jquery]: https://jquery.com/
[tocify]: http://gregfranko.com/jquery.tocify.js/