# Codeur ESLint Config



## Requirements
Follow this guide to get your personnal access token dedicated to GitHub package registry: [Creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token)

Add your token to `~/.npmrc` like so:
```
//npm.pkg.github.com/:_authToken=YOURTOKENHERE
```
***
If you want to use Github Actions on a project using this package, you need to set the registry authentication in the test:

```yaml
  - name: NPM Authentication
    run: echo "//npm.pkg.github.com/:_authToken=${{ secrets.GITHUB_PERSONAL_TOKEN }}" >> ~/.npmrc
```
Note that you need to give a personnal token to your repository settings (Settings > Secrets) in order to use the `secrets` object in your workflow files.

## Installation
### Using .npmrc file
If the project doesn't have a `.npmrc`at its root yet, create one and add the following line. Simply add the line if the project already has one:
```
@codeur:registry=https://npm.pkg.github.com
```

Then install the package using npm or yarn
```
npm install @codeur/eslint-config eslint
or
yarn add @codeur/eslint-config eslint
```

### Using command line
Run the following command
```
yarn add @codeur/eslint-config --registry https://npm.pkg.github.com/
```

## Usage
Add the config to ESLint config file `.eslintrc.js`
```js
module.exports = {
  extends: [
    "@codeur"
  ]
}
```


## Development
To publish a newer version of the package, update version number in `package.json` run `npm publish`
