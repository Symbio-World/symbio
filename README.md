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

Use node >= 10 or install nvm https://github.com/nvm-sh/nvm and run
```
nvm use
```

## Plugins

Install EditorConfig plugin


# Workflow
## Libraries and apps
There are 2 types of packages: libraries and apps (services). An app can depend on one or more library, but not on another app. A library can depend on another library, but not on an app

## Cores and apps
App should not include any business logic. All business logic must be in an accompanying library, i.e. app called `trader-app` depends on a library called `trader-core` that has. App is only responsible for implementing interfaces and supplying them to the core. Read about hexagonal architecture for more information

## Yarn workspaces
Project uses yarn workspaces. It allows for the following workflow:
Each folder is an isolated npm package with its own dependencies
Each package must implement the following commands:
lint
build
watch
test
clean

if package is an app it must also include 
start
stop
deploy
destroy

# Project management
The easiest is to `cd ..` into a package and work as normal,
but you can choose to do everything from a root folder

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
