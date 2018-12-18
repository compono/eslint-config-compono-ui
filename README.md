# eslint-config-compono-ui

Shortlyster's frontend eslint configurations

They add a ton of opinionated changes on top of our minimal `eslint-config-compono` setup.

## Getting started

Refer to this github repo in you `package.json` dev dependencies.

```
npm add -D eslint-config-compono-ui

```

Add `.eslintrc` to your project.

```
{
  "extends": "compono-ui",
  "rules": {
    // project specific rules go here
  }
}
```

## Rules

We extend from [Our rules](https://github.com/Shortlyster/eslint-config-compono)


With [the React plugin](https://github.com/yannickcr/eslint-plugin-react)
With [the jsx-a11y plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)
With [the stylelint default](https://github.com/stylelint/stylelint-config-standard)
