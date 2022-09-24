<div align="center">
<p><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo"></p>

[![release](https://img.shields.io/github/release/flight-deck/flightdeck-hugo.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/flight-deck/flightdeck-hugo/releases/latest) [![hugo](https://img.shields.io/badge/Hugo-v0.66.0+-373277.svg?style=for-the-badge&logo=hugo&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/gohugoio/hugo/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/flight-deck/flightdeck-hugo/blob/master/LICENSE)

<h1>Flightdeck for Hugo</h1>
<h4>An opinionated starter project for <a href="https://gohugo.io/">Hugo</a> that takes advantage of Hugo's built in <a href="https://gohugo.io/hugo-pipes/" title="hugo's asset pipeline">asset pipeline</a>.</h4>

</div>

## What it is

Flightdeck for Hugo is an opinionated starter project for [Hugo](https://gohugo.io/) that takes advantage of Hugo's built in [asset pipeline](https://gohugo.io/hugo-pipes/).

Includes:

- Base templates using HTML with partials creating components.
- Hugo Pipes ready to compile, minify, and MD5-hash for Scss/CSS and JavaScript with environment variables.
- Hugo Pipes for PostCSS using Autoprefixer and PurgeCSS
- Simple Google Analytics integration.
- Imagemin for image optimization
  - Please note that Hugo's built in [image processing](https://gohugo.io/content-management/image-processing/) does not work on images located inside of `/static`. This is why we chose to use Gulp and Imagemin.
- Deployment with rsync and [Flightdeck Liftoff](https://github.com/flight-deck/flightdeck-liftoff).

## What it is NOT

Flightdeck for Hugo **IS NOT** a Hugo theme. It **CANNOT** be dropped inside the `/themes` directory.

## Prerequisites

Make sure that Hugo is installed by checking out the [Quick Start Guide](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) on the Hugo docs... make sure you're running the extended version.

## Usage

First things first, clone this repo:

```shell
git clone git@github.com:flight-deck/Flightdeck-for-Hugo.git MY-HUGO-PROJECT && cd MY-HUGO-PROJECT
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

There are 4 available Scripts:

- `yarn start` - Runs development server with CSS sourcemaps and drafts enabled, as well as the image task with watch.
- `yarn build:preview` - Runs the server with `production` for the environment with asset minification and postCSS enabled, and optimized images
- `yarn build` - The same as `build:preview` but builds production ready site in `public` directory with minified/optimized assets
- `yarn build:images` - Runs gulp images task to optimize images in `./static/img/`
- `yarn deploy` - uses (Flightdeck Liftoff)[https://github.com/flight-deck/Flightdeck-Liftoff] for deployments, see [Liftoff for usage](https://github.com/flight-deck/Flightdeck-Liftoff#readme)
  - Please note: Hugo's built in deployment options currently does not support DigitalOcean
- `yarn clean:node` - removes only Node dependencies
- `yarn clean:site` - removes the `public/` directory
- `yarn purge` - removes everything and does a fresh install using Yarn.

## File Structure

```
│
└──── /archetypes            - Hugo archetypes
│
└──── /assets                - Source files for scss, js, and images
│   └─── /images             - Images INPUT directory used by Gulp
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
│   └─── /images             - Images OUTPUT directory generated by Gulp
│
│ config.yml                 - Hugo configuration file
│ gulpfile.js                - Gulp js file
│ netlify.toml               - Netlify configuration file
│ package.json
│ README.md                  - The README file you're reading right now
```

### Hope you enjoy the flight. 🚀
