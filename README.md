# Vue 3 Link Page

Create a bilingual page with all of your links - based on [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/).

See it in [action](https://links.robinkloeckner.com/).

## Table of Contents

- [About](#About)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)

## About This Project

Said in advance, the reason for building a potentially static link page as a SPA was simply my personal preference for
Vue. It hasn't been the intention to build a lean application but rather experimenting with different
concepts and plugins like
Pinia and i18n. Consider it as an MVP and keep in mind there might be better alternatives for
building a link page.

Some of the provided **features** and included plugins:

- Bilingualism with [Vue I18n](https://kazupon.github.io/vue-i18n/)
- Light and dark mode - state managed with [Pinia](https://pinia.vuejs.org/)
- Link cards with images
- Contact form (server side script or API required)
- Separate views for legal notice and privacy policy - routing with [Vue Router](https://router.vuejs.org/)
- [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/) (no plugin)
- Linting with [ESLint](https://eslint.vuejs.org/)
- No cookies

Additional features might be added in the future.

## Installation

Clone the repository:

```sh
git clone https://github.com/robinkloeckner/vue3-link-page
```

Navigate to the project root directory and install the modules:

```sh
cd vue3-link-page
npm install
```

## Usage

To use the app with minimal effort customize the configuration files under `src/config/` and the locales
under `src/locales/`.

### Configuration files

#### Common Information - `contact.js`:

Contains contact information and are intended be used in multiple times in different places such as the legal notice and
privacy policy
pages.

If you want to enable the form set `enableForm = true`, else `false`.

#### Contact Form - `api.js`

If you want to enable the contact form you need to set `enableForm = true` in `contact.js`, else `false`. Then
add the required information in `api.js`. The config file is designed to configure
multiple endpoints. However, in its basic form you only need to adjust the base url of the api `baseApiUrl`, the
`path` of the endpoint in the `postContactForm` object and the header options if needed. Please do not change any key
name.

#### Internationalization - `i18n.js`:

Creates the i18n instance with options. The default options enable the usage of Vue's Composition API
and `<script setup>`syntax. The default locales are English `en` and German `de`. If you want different locales,
change the corresponding language codes in the options and
the locale resource files in `src/locales/`. (more below)

For a full list of options, see the [documentation](https://kazupon.github.io/vue-i18n/api/#constructor-options/).

#### Links - `resources.js`:

Configure the link cards in `<main>` and the link icons in `<header>` by defining a key for each link. Their values
are  
objects with the following options:

| Key            | Value Type | Necessity | Explanation                                                                                                                                                      |
|----------------|------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`         | String     | required  | The name that is shown in the link card.                                                                                                                         |
| `url`          | String     | required  | Reference to the external resource.                                                                                                                              |
| `icon`         | String     | required  | The name of the component containing the Logo as SVG. The icon is shown in the header and in the link card if no image is specified in the `img` option.         |
| `img`          | String     | optional  | Relative path of the image you want to show in the link card (no leading slash required). If specified, the icon specified in `icon` is only used in the header. |
| `generateCard` | Boolean    | required  | If you only want to show a linked resource in the header, set this option `false` to prevent rendering a link card for the given resource.                       |

---

### Legal Notice & Privacy Policy Views

There are separate views for the pages containing the information of the legal notice and the privacy policy. The two
views are located in the `src/views/` directory. The content can be set in the locales in `src/locales/` as a string
including all HTML elements. This is because some text generators for the legal notice and privacy policy generate HTML
rather than plain text. The boilerplate code works with the `v-html`directive and named interpolation from the Vue I18n
plugin in order to use the contact information from the config files.

Change that according to you needs.

---

### Internationalization

This app is build with the intention to provide the content in two different languages. Therefore, providing a second
language is mandatory. The options and the creation of the Vue I18n instance can be found in `src/config/i18n.js`,
whereas the locale messages are located in separate files in `src/locales/`. Note that some messages contain HTML
elements in their strings and use named interpolation.

For more information on how to work with the plugin check
the [documentation](https://kazupon.github.io/vue-i18n/started.html).

---

### SCSS & Themes Customization

SCSS files are located in `src/assets/scss/`. The entry file is `main.js` which imports the remaining files. Bootstrap
5.1 is imported here as well following the [documentation](https://getbootstrap.com/docs/5.1/customize/sass/).
The Bootstrap 5.1 source files are included in the repository (no plugin).

Color variables are defined in `custom/variabls.scss`, which are then used to build the theme in `custom/themes.scss`.
These are the two main files for customizing the themes of the application. Styles that apply for the complete HTML
document are defined in `custom/base.scss`, whereas styles that apply to the Vue app only are defined in `App.vue` or
any other Vue component.

## Support

Please [open an issue](https://github.com/robinkloeckner/vue3-link-page/issues/new) for support.
