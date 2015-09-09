# Bootstrap-postcss
Bootstrap 4 will be in SASS. Maybe bootstrap 5 will be in PostCSS. So, why do we have to wait?

This repo contains tool for building Bootstrap 4 with postcss instead of SASS.

Note: it's very experimental and not tested yet. It's just a prove what it is possible (with some tricks as usual). A lot of things need to be done to use it in development.

This build contains all bootstrap styles compiled with postcss to (probably) valid css. If you found a bug, let me know.

# Installation
Since bootstrap 4 is not available from npm at now, you need to clone it:
```
git clone github.com/twbs/bootstrap
```
Switch bootstrap to development branch:
```
cd bootstrap && git checkout v4-dev && cd ..
```
Than install dependencies:
```
npm install
```
Perform some magic to set up build:
```
npm start postcss
```
...And run build:
```
npm start
```

# Global TODO list
Now this build tool uses a lot of hacks to achieve the goal. In order to make it usable we need:

- [ ] Improve [postcss-scss](https://github.com/postcss/postcss-scss) to work properly with SCSS syntax. It will reduce `replace` calls and a lot of hacks around syntax. Also it will make possible to perform build without preprocessing.
- [ ] Tune postcss plugins to support some SASS features like `@if not` or `@each ... in ($key : value)`.
- [ ] Improve variables support. I found that we need to get access to variable value from another plugin to achieve some useful features.
- [ ] Anything else?

## Small tasks
- [ ] Set up `gh-pages` with Bootstrap documentation
- [ ] Write some tests
