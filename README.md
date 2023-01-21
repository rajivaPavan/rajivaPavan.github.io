# portfolio

## Contents

- [Project Setup](#project-setup)
    - [Node Environment](#node-environment)
    - [Running the Project](#running-the-project)
    - [Recommended IDE Setup](#recommended-ide-setup)
- [Development](#development)
    - [Branches](#branches)
- [Deploying](#deploying)

## Project Setup

### Node Environment

Recommended node version 16. (16.14.x+).

If you don't already have a node environment or have a different node version installed on your
system, it may be easier to use [nvm](https://github.com/nvm-sh/nvm) to install the required node
version. Windows users can use [nvm-windows](https://github.com/coreybutler/nvm-windows).

Alternatively download the required version of [node](https://nodejs.org/en/download/) and install
it directly. Most linux distributions will also have node available on their repositories.

### Running the Project

Clone the repository from github.

```sh
git clone https://github.com/SpeechOlympiadXV/speecholympiadxv.github.io.git
```

cd into the folder

```sh
cd speecholympiadxv.github.io
```

install dependencies

```sh
npm install
```

run development server (compile and hot reload)

```sh
npm run dev
```

### Recommended IDE Setup

VSCode with extension Volar (recommended by Vue) or extension Vetar (works fine for this)

(However if you're already used to a different IDE it would be better to stick with that and
install relevant extensions for Vue)

## Development

Refer [documentation for Vue](https://vuejs.org/guide/introduction.html) for getting started with
VueJS.

### Branches

Note that the master branch is protected and cannot be directly pushed to. Always work on a
feature/component branch and make a pull request against master.

**Note that the gh-pages branch is only for deploying. Do not work on this branch**

## Deploying

Compile and minify files for production into dist folder. Push the contents of dist folder into
gh-pages branch.

