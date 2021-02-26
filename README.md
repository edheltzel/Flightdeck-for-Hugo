<div align="center">
<p><img src="https://d.pr/free/i/FDUErn+" alt="Flightdeck Logo"></p>

[![release](https://img.shields.io/github/release/flight-deck/flightdeck-hugo.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/flight-deck/flightdeck-hugo/releases/latest) [![hugo](https://img.shields.io/badge/Hugo-v0.66.0+-373277.svg?style=for-the-badge&logo=hugo&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/gohugoio/hugo/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/flight-deck/flightdeck-hugo/blob/master/LICENSE)

<h1>Flightdeck Hugo</h1>
<h4>An opinionated starter project for <a href="https://gohugo.io/">Hugo</a> that takes advantage of Hugo's built in <a href="https://gohugo.io/hugo-pipes/" title="hudo's asset pipeline">asset pipeline</a>.</h4>

</div>

## What it is
Flightdeck Hugo is an opinionated starter project for [Hugo}(https://gohugo.io/) that takes advantage of Hugo's built in [asset pipeline](https://gohugo.io/hugo-pipes/). 

Offering:
- Base templates using HTML with partials creating commponents 
- Hugo Pipes ready to compile, minify, and MD5-has Scss/CSS and JavaScript with environment variables
- Hugo Pipes for PostCSS using Autoprefixer and PurgeCSS
- Google Analytics 
- Imagemin for image optimization 
- Deployment with rsync and [Flightdeck Liftoff](https://github.com/flight-deck/flightdeck-liftoff). 

## What it is NOT
Flightdeck Hugo **IS NOT** a Hugo theme. It **CANNOT** be dropped inside the `/themes` directory.

## Prerequisites
Make sure that Hugo is installed by checking out the [Quick Start Guide](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) on the Hugo docs... make sure you're running the extended version.

## Usage
First things first, clone this repo:

```shell
git clone git@github.com:flight-deck/Flightdeck-go.git MY-HUGO-PROJECT && cd MY-HUGO-PROJECT
```

Then run the Node commands
```shell
yarn
yarn start
```
**OR**

```shell
npm install
npm start
```
### Adding Pages

To add main site pages run the `hugo new` command and create a markdown file in the `pages/` directory. Then create a corresponding `html` template file in `layouts/pages/`

Example:
```
hugo new pages/my-new-page.md
```

The `header.html` partial is configured to generate a main site navigation by utilizing [Hugo Menu Templates](https://gohugo.io/templates/menu-templates). The `pages.md` archetype sets each page markdown file to the main menu via front matter.

### Available Scripts

Theere are 4 available Scripts:

- `npm start` - Runs development server with CSS sourcemaps and drafts enabled
- `npm run preview` - Runs server in production environment with asset minification and postCSS enabled
- `npm run build` - Builds production ready site in public directory with minified/optimized assets
- `npm run images` - Runs gulp images task to optimize images in `./static/img/`

## File Structure

```
│
└──── /archetypes            - Hugo archetypes
│
└──── /assets                - Source files for scss and js
│   └─── /js
│   └─── /scss
│
└──── /content               - Hugo Content Directory
│   └─── /pages              - Markdown files for main site pages
│   |
│   | _index.md              - Site homepage markdown file
│
└──── /layouts               - Template files
│   └─── /_default
│       |
│       | baseof.html        - Base template
│   │
│   └─── /pages              - Template files for main site pages
│   │
│   └─── /partials
│       └─── /site           - Site partials
│       │
│       │ footer.html        - Site primary <footer>
│       │ header.html        - Site primary <header>
│       │ meta.html          - Site <meta> tags
│       │ scripts.html       - JavaScript <script> tags before closing </body>
│       │ styles.html        - Stylesheets referenced before closing </head>
│   │
│   │ 404.html               - 404 Template
│   │ index.html             - Home page
│
└──── /static                - Hugo static resources
│   └─── /img                - Images directory
│
│ config.yml                 - Hugo configuration file
│ gulpfile.js                - Gulp js file
│ netlify.toml               - Netlify configuration file
│ package.json
│ README.md                  - The README file you're reading right now
```
### Hope you enjoy the flight. 🚀
