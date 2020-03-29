# Setup

## Install Homebrew
https://brew.sh/

## Yarn
Install yarn with homebrew
```
brew install yarn
```

Install all dependencies in a project
```
yarn
```

## NVM

Preferred node version is in .npmrc. 
Install nvm https://github.com/nvm-sh/nvm and run
```
nvm use
```

# Conventions
## Libraries and apps
There are 2 types of packages: 
- library - can be depended on
- app (service) - cannot be depended on

Rules:
- A library can depend on another library, but not on an app
- An app can depend on one or more library, but not on another app. 
- An app should not include any business logic. All business logic must be in an accompanying library, i.e. app called `trader-app` depends on a library called `trader-core`
- App is only responsible for implementing interfaces and supplying them to the core

## Cores and adapters
Libraries can be of different types as well. These mainly follow from hexagonal/onion architecture
- core - busineness logic
- adapters (plugins)

## Naming Conventions
- packages are kebab-cased
- file names must be camelCased or PascalCased
  - React components are PascalCased
  - files that return types are PascalCased
  - everything else is camelCased
- `create...` to indicate a factory, it creates 
- `fetch...` to describe external calls
- `scrape...` for extraction of data, i.e. retrieving data from html
- `crawl...` for following links
- `parse...` for representing something as something else, i.e. breaking it down into pieces, constituent parts, or segments
- Name conventions for scripts in package json
  - `lint`
  - `build`
  - `watch`
  - `test`
  - `clean` - clean build artifacts
  - `clean-all` - also clean dependencies

# Workflow

## Yarn workspaces
Project uses yarn workspaces. It allows for the following workflow:
Each folder is an isolated npm package with its own dependencies
Each package should imlement  commands

if package is an app it might also implement `start`, `stop`, `deploy`, `destroy`, etc.


To start working on any package either
- open a package as a separate VS Code window
- cd into the package

You can choose to do everything from a root folder, but commands are a bit involved, see below
## To run a command in all packages
```
yarn wsrun <command-name> // runs yarn <command-name> in each package
```
or
```
yarn workspace <package-name> <script-name>
```

## To run some script defined in package.json of a particular package run
```
yarn wsrun -p <package-name> -c <script-name>
```
or
```
yarn workspace <package-name> <script-name>
```

## To run some script defined in package.json of a particular package and all of its dependencies run
```
yarn wsrun -p <package-name> -r <script-name>
```
```
yarn wsrun -p assessor-app -r watch // watches any changes in workspace and its dependencies and rebuilds
```

## To add a dependency to a particular package run
```
yarn workspace <package-name> add <dependency-name> // add --dev if dev dependency
```

## To remove a dependency from a particular package run
```
yarn workspace <package-name> remove <dependency-name>
```

## You can also get a dependency graph with
```
yarn workspaces info
```

More info on (yarn workspace)[https://yarnpkg.com/lang/en/docs/cli/workspace/]
More info on (yarn workspaces)[https://yarnpkg.com/en/docs/cli/workspaces]
More info on (wsrun)[https://github.com/hfour/wsrun]

# Inspiration

https://www.infoq.com/presentations/mock-fsharp-tdd/
