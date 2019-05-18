# CHANGELOG

## [v0.3.0](#) (TBA)
## NEW
- [ ] **comment**: support gitalk (todo)
- [x] **i18n**: translation support (testing)
- [ ] **global variable**: main-color, etc. (todo)
- [ ] **search**: search system (todo)

## MOD
- [x] **LaTeX**: switch to KaTeX. (testing, close: [#13](../../issues/13))
- [x] **Navbar**: anchor scrolling with offset navbar (testing)
- [ ] **carousel**: better carousel (todo)

## [v0.2.2](https://github.com/huangyuzhang/Fizzy-Theme/releases/tag/v0.2.2) (2019.05.17)
## NEW
- **template**: added a template `post-with-toc`
- **TOC**: use code injection to enable/disable TOC (maybe there are more elegant ways to do this)
- **font**: heading font improved; tested Chinese display
- **Global configuration**: enable global variable (TOC, Comment) configuration in Ghost Admin -> Code injection -> Site Header (**important update**, please read the README.md file for instructions)

## MOD
- **partialization**: post_comment, post_author, post_toc, post_aside, list_card
- **custom template**: `custom-full-width.hbs` responsiveness

## [v0.2.1](https://github.com/huangyuzhang/Fizzy-Theme/releases/tag/v0.2.1) (2019.05.12)
This release fixed some minor bugs caused from v0.2.0
- **listing**: [card] styling for posts without a featured image
- **post**: [code block]fixed the conflict caused by bulma and Prismjs
- **post**: [previous & next post card] styling for posts without a featured image

## [v0.2.0](https://github.com/huangyuzhang/Fizzy-Theme/releases/tag/v0.2.0) (2019.05.11)
### NEW
- **post**: featured label for featured-post (close: [#4](../../issues/4))
- **template**: template for single tag (close: [#5](../../issues/5))
- **template**: template for single author page (close: [#6](../../issues/6))
- **custom template**: full-width (close: [#15](../../issues/15))
- **error pages**: 404 and others (close: [#12](../../issues/12), [demo](https://fizzy.cc/404/))
- **css**: smooth scrolling for id anchors
- **font**: support Chinese (tested in v0.2.2)
- **component**: badge support (HTML block only).([demo](https://fizzy.cc/fizzy-theme/#badge))

### MOD
- **tag list**: smaller featured image size (close: [#11](../../issues/11))
- **post typography**: inline code style, code block font-size
- **code highlight**: changed to Prism.js highlighter.
- **responsive**: fix wide table responsvie display in mobile devices (temorary fix: [#16](../../issues/16))
- **default**: default.hbs simplified, loading speed increased.

## [v0.1.2](https://github.com/huangyuzhang/Fizzy-Theme/releases/tag/v0.1.2) (2019.05.05)
### NEW
- **global**: Math equation support by MathJax
- **comment**: integrated with Disqus

### MOD
- **logo**: show icon if it is uploaded but logo is not
- **post**: style additions and modifications
- **author box**: fixed spacing issue (close: [#10](../../issues/10))
- **pagination**: style improved (close: [#7](../../issues/7))
- **post**: list spacing (close: [#8](../../issues/8))

## [v0.1.1](https://github.com/huangyuzhang/Fizzy-Theme/releases/tag/v0.1.1) (2019.04.15)
### NEW
- **home**: exclude posts with `#noindex` tag
### MOD 
- **post**: paragraph style; code block style; list style

## [v0.1.0](https://github.com/huangyuzhang/Fizzy-Theme/releases/tag/v0.1.0) (2019.04.14)
### NEW
- **template**: tag archive template ([demo](https://fizzy.cc/tag/)) (close: [#2](../../issues/2))
- **post**: image support (size: regular, wide, full-width)
- **post**: content gallery support
- **post**: embedded content support
### MOD 
- **post**: blockquote style (close: [#1](../../issues/1))
- **post**: headings size (H1,H2,H3,H4,H5,H6) (close: [#1](../../issues/1))
- **global**: link hover transition style
- **post**: author box fixed with a avatar placeholder (close: [#1](../../issues/1))
### DEL
- unused templates and images

## [v0.0.1](https://github.com/huangyuzhang/Fizzy-Theme/releases/tag/v0.0.1) (2019.04.12)
- First release
