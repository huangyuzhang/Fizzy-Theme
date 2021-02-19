# The Fizzy Theme

[![demo](https://img.shields.io/badge/Demo-online-yellow.svg)](https://fizzy.cc/)
[![Ghost version](https://img.shields.io/badge/Ghost->=3.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Release](https://img.shields.io/github/release/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/)
[![GitHub forks](https://img.shields.io/github/forks/huangyuzhang/Fizzy-Theme.svg)](https://github.com/huangyuzhang/Fizzy-Theme/network)
[![GitHub stars](https://img.shields.io/github/stars/huangyuzhang/Fizzy-Theme.svg?style=social&label=Star)](https://github.com/huangyuzhang/Fizzy-Theme/stargazers)

A tasty blogging theme for Ghost :ghost:

Thanks to everyone who starred this project. Please read the documentation to exploit all the features of this theme.

[中文文档](./README-zh.md)

![](https://user-images.githubusercontent.com/40261916/60045241-3e045480-96bc-11e9-9382-03789cd8a637.jpg)

## 🔧 Installation
- [Stable Version](https://github.com/huangyuzhang/Fizzy-Theme/releases/latest/)
- [Development Version](https://github.com/huangyuzhang/Fizzy-Theme/tags/)

Download the `.zip` file and upload it at your Ghost Admin > Setting > Design.

## 🎥 Demo

My blog [Fizzy.cc](https://fizzy.cc) is currently using this theme.

Use this [issue](https://github.com/huangyuzhang/Fizzy-Theme/issues/20) to add your site with Fizzy Theme.

## 🍹 Features and Usage

### Logo
If only **site icon** is uploaded, the Logo area will display the **icon** and followed by the **Site name** then a dot colored as the **main color**, e.g.:

<img src="https://user-images.githubusercontent.com/40261916/58709309-cd666280-83b1-11e9-8253-1a2ceeca56d1.png" height="36px"> <img src="https://user-images.githubusercontent.com/40261916/58709326-d6573400-83b1-11e9-9c69-71274926322b.png" height="36px"/>

If **site logo** is uploaded, then the Logo area will only display the **site logo**. 

> Note: Since the top navbar is colored with white background, it would be better to use a dark/colorful logo.

### :earth_africa: i18n
You can change the theme's language in Ghost Admin -> General -> "Publication Language".

|  Code   | Language | Status | Translator |
| :-----: | :------: | :----: | :--: |
|  `de`   | German  |   ✔️   |[Marek Schmidt](https://github.com/MSDev201)|
|  `en`   | English  |   ✔️   ||
| `fr` | French |   ✔️   |[Lourys](https://github.com/Lourys)|
| `it` | Italian|   ✔️   |[Pyrox](https://github.com/Pyr0x1)|
| `pt_BR` | Brazilian Portuguese |   ✔️   |[matheusvanzan](https://github.com/matheusvanzan)|
| `ta` | Tamil |   ✔️   | [MC Naveen](https://github.com/the-mcnaveen) |
| `th` | Thai |   ✔️   | [atbee](https://github.com/atbee) |
| `tr` | Turkish |   ✔️   |[talut](https://github.com/talut)|
| `zh_CN` | Chinese (Simplified) |   ✔️   ||


Please help to translate Fizzy into the languages you know. To do so, first fork this repo. Then you need to copy the `en.json` file under `locales` folder and rename it to your language code, e.g. `es.json`, `zh_TW.json`. Then modify the translations within it. After testing, please create a "Pull Request" to `dev` branch of this repo (not `master`).

### Assets Localization
You could customize the following files to define the CDN of assets to speed up access in specific regions: 
- `./default.hbs`
- `./partials/post/post_footer.hbs`
- `./partials/post/post_toc.hbs`

### Internal tags
Internal tags start with `#`, after creating it will displayed as internal tag automatically. Internal tags will not be displayed in front-end. So far the Fizzy Theme support the following internal tags:
- **Carousel**: Use internal tag `#carousel`(slug:`hash-carousel`) to add posts into carousel in homepage (see [Showcase](#showcase)). 
- **No Index**: Use internal tag `#noindex`(slug:`hash-noindex`) to exclude posts from listing in home page. 
> limitation: hiding posts with `#noindex` tag, but the number of posts displayed for that page will change as well.

### Showcase
The showcase section is built to highlight posts. It is available only on the homepage. Insert the following code into Ghost Admin -> Code injection -> `Site Header` to enable the showcase:

```javascript
<script>
  var show_showcase = true; //default: false
</script>
```

The left slider carousel part detects the internal tag `#carousel`. The right part will display 2 featured posts.

![showcase](https://user-images.githubusercontent.com/40261916/60126667-65bfef00-9786-11e9-94e8-eaa4c2a4559f.jpg)

### Author Page
You can customize the author page by editing your **profile** in Ghost Admin, such as **name**, **avatar**, **background image**, **social account links**, **location** and **bio**. Author page ([demo](https://fizzy.cc/author/simon/))

### Tag Page
You can customize the tag page by editing **tags** in Ghost Admin, such as **image**, **description**. Tag Page ([demo](https://fizzy.cc/tag/blogging/))

### Custom Templates
Open the gear icon ⚙ while editing a post or page, scroll to the bottom and change `Template` option.
- **Tag Archive**: used for listing all tags/topics in one page. ([demo](https://fizzy.cc/tag/))
- **Post Archive**: used for listing all posts in one page. ([demo](https://fizzy.cc/archive/))
- **Full Width**: full width post. ([demo](https://fizzy.cc/fizzy-theme/))
- **Post With TOC**: TOC-enabled post, details in [#TOC](#toc). ([demo](https://fizzy.cc/fizzy-theme/))
- **Featured Posts Archive**: post list for featured posts, page title and content will be shown on the top section. ([demo](https://fizzy.cc/featured/))

### Collection
To enable collection, edit the `routes.yaml` as below. Then modify the `home.hbs` to customize your homepage. Full doc: [Ghost Docs - Collections](https://docs.ghost.org/api/handlebars-themes/routing/collections/)

```yaml
routes:
  /: home # template for homepage `home.hbs`

collections:
  /movie/: # a collection called movie
    permalink: /movie/{slug}/
    template: movie # template `movie.hbs`
    filter: tag:movie # fetch data from a tag:movie
    data: tag.movie # have access to all data & meta data from tag
  /music/: # a collection called music
    permalink: /music/{slug}/
    template: music # template `music.hbs`
    filter: primary_tag:music # fetch data from primary tag: music
    data: tag.music # have access to all data & meta data from tag
```

> **Notice**: known issues of Ghost collection, e.g.: [Ghost #10082](https://github.com/TryGhost/Ghost/issues/10082).

### Custom CSS Variables
Download the theme `.zip` file, unzip it then edit the variables in `assets/css/custom.css` to customize your theme coloring. After that, zip everything back into a `.zip` file and upload it onto your Ghost admin.

### Custom Footer Text
By default, your **site description** (Ghost Admin -> General) will be displayed in the footer text. If you need to change it, define a variable `footer_text` in the `Site Header` as below:

```javascript
<script>
  var footer_text = "REPLACE WITH YOUR FOOTER TEXT HERE";
</script>
```
> You can include HTML in the `footer_text`, but be careful to use single quotation marks inside it. For example:
> `var footer_text = "REPLACE <span style='color:red;font-weigh'>WITH</span> YOUR FOOTER TEXT HERE <i class='iconfont icon-heart'></i>";`

### :speech_balloon: Comment System
Due to Ghost itself doesn't have a comment system, we need to use third party solutions for this. Some options are: [DISQUS][disqus], [Gitalk][gitalk], [Valine][valine] and [Vssue][vssue]. By default, Fizzy has Gitalk and DISQUS integrated. Skip the following if you do not need the comment system.

**By default, the comment system is disabled.** To enable it, first insert the following code into `Post Header` for a single post or `Site Header` for the whole site at Ghost Admin -> Code injection to configure accordingly, then choose one of the comment systems below and follow the instruction.

```javascript
<script>
  var show_comment = true; //default: false
</script>
```

#### Gitalk (Recommended)
Gitalk is a Github issue based comment system. Automatically support `en`, `zh_CN`, `zh_TW`, `es` by detecting the language of user's navigator.
1. Register a new **GitHub Application**
2. Create a new **Github Repository** for your website
3. Insert the following code into Ghost Admin -> Code injection: `Site Footer`, and modify the configuration with your **Github App** & **Repository** from previous steps.

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
> more usage guide and options please check [here](https://github.com/gitalk/gitalk#usage).


#### DISQUS
Insert the following code into Ghost Admin -> Code injection: `Site Header`, and modify the link with yours.
```javascript
<script>
    var disqus_link = 'https://YOURLINK.disqus.com/embed.js'; // change it with your DISQUS js link
</script>
```
If you want to change the comment system, you need to modify the code in `partial/post/post_comment.hbs`.

###  Code Highlight
Prism.js is used for syntax highlighting, the default languages and plugins used by Fizzy theme are:
  - **Languages**: Markup (e.g. HTML), CSS, C-like, JavasScript, Bash, Nginx, Ruby, Git, JSON, Markdown, SQL, Python, R
  - **Plugins**: line-numbers, toolbar, show-language.

To customize this yourself, open [customize Prismjs][custom-prism] and choose the languages you need. Then download the js and css files to overwrite the `prism.js` and `prism.css` files in `assets` folder.

#### Line-numbers
![image](https://user-images.githubusercontent.com/40261916/60731259-0e1c4300-9f3f-11e9-93c8-a83fe5a878e8.png)
The line numbers are hidden by default. To enable it, insert the following code into `Post Header` for a single post or `Site Header` for the whole site:
```js
<script>
  var line_numbers = true; //default: false
</script>
```

### TOC
There are two ways to control the TOC of a post:
1. insert the following code into `Post Header` for a single post or `Site Header` for the whole site;
    ```javascript
    <script>
        var show_toc = true; // enable TOC (default: false)
    </script>
    ```
2. Use custom post template `Post With Toc` to enable TOC. 
> **Priority**: `template` > `Post Header` > `Site Header`

> **Notice**: h2 and h3 headings on the page will be displayed by default. If you want to add other headings (e.g. h1 or h4), please edit `selectors` of the file `partials/post/post_toc.hbs`. However, you should not use h1 except for the post title.

### Instant Search
The search function uses Ghost Content API. To enable it (added to top menu), first add a custom integration in Ghost Admin. Then copy the **Content API Key** and **API URL**.
Go to the Code injection, add the following code to the `Site Header`:
```javascript
<script>
  var show_search = true; // default:false
  var search_key = 'PASTE THE CODE YOU COPIED AS Content API Key';
  var search_url = 'PASTE THE CODE YOU COPIED AS API URL'; // it is usually your site url
</script>
```

### LaTeX support
Use `$`(inline) or `$$` to cover commands to render for LaTeX commands. ([examples](https://fizzy.cc/latex/))

### Link Page
Create a link page is nothing different than create a normal page. With the **Bookmark Card** feature since Ghost v2.30, you can easily add links to any page by type `/bookmark` in Ghost editor. ([demo](https://fizzy.cc/links/))

### Components
- **Navigation**: You can modify `partials/navigation.hbs` to customize your dropdown menu, or delete the section if not needed.
- **Badge**: include `class="badge <color>"` to use badge (HTML only).([demo](https://fizzy.cc/fizzy-theme/#badge))
  - Supported colors: uncolored, red, yellow, green, blue, purple
![image](https://user-images.githubusercontent.com/40261916/64512333-bcb27a80-d318-11e9-8b60-1f18468e3a30.png)
    > Note: to use uncolored badge, set as `class="badge"`.
- **Posts per page**: change the number of `"posts_per_page": 8` in `package.json`
- **table**: to unwrap cells, uncomment the `/* white-space: nowrap; */` in `assets/css/main.css` around **line 703**.

### Credit
If you want to disable the top right "Get Fizzy Theme" button, insert the following code into your `Site Header` from `Code Injection`:

```javascript
<script>
  var fizzy_credit = false; // default:true
</script>
```
> Please do not remove the footer text "Using The Fizzy Theme" and the link. Thank you for your support!

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## 🍻 Contributors

See [Contributors][contributors]

## 🔋 Dependencies

- [Bulma][bulma] - CSS Framework
- [Prismjs][prismjs] - A lightweight syntax highlighter
- [JQuery][jquery] - A well-known JavaScript library (for tocify only now)
- [jQuery.tocify.js][tocify] - Table of Content generator (also JQuery-UI)
- [KaTeX][katex] - A faster LaTeX equation rendering library (since v0.3.0)
- [Gitalk][gitalk] - A Github issued based comment system (since v0.3.0)
- [ghost-search][ghost-search] - An instant search library using Ghost Content API (since v1.0.0)
- [iconfont][iconfont] - A free icon solution (since v1.2.3)

## 📍 Roadmap
To know the future planning of this project, please visit our [Roadmap][roadmap].

## 🐛 Bug Report & :dart: Features Request
If you find a bug, thinking about something to be improved or even want new features, please feel free to post an issue. 

Alternatively you could contribute to this project.

## 💡 Contributing

1. Fork it (maybe star this too?)
2. Create your feature branch (`git checkout -b feature-fooBar`)
3. Commit your changes (`git commit -m 'Add something'`)
4. Push to the branch to origin (`git push origin feature-fooBar`)
5. Create a new Pull Request to `dev` branch here
6. Wait for code review and modify if necessary

## 🔏 License 

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
[vssue]: https://github.com/meteorlxy/vssue
[custom-prism]: https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+ruby+git+json+markdown+nginx+sql+python+r&plugins=line-numbers+toolbar+show-language
[ghost-search]: https://github.com/HauntedThemes/ghost-search
[iconfont]:https://www.iconfont.cn
[contributors]: https://github.com/huangyuzhang/Fizzy-Theme/graphs/contributors
[roadmap]: https://github.com/huangyuzhang/Fizzy-Theme/projects/3
