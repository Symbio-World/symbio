This package includes lint and test configurations used by other Typescript projects in this workspace

# Style Guide

## Naming Conventions
- packages are kebab-cased
- file names must be camelCased or PascalCased
  - React components are PascalCased
  - files that return types are PascalCased
  - everything else is camelCased
- `fetch...` to descrive external calls
- `scrape...` for extraction of data, i.e. retrieving data from html
- `crawl...` for following links
- `parse...` for representing something as something else, i.e. breaking it down into pieces, constituent parts, or segments

Other conventions are encoded as eslint rules
