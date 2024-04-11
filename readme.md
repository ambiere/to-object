# toJSON

> Simple javascript utility to parse json-like strings to JSON

Implemented in [next-clsx](https://github.com/ambiere/clsx) 

[![Release](https://github.com/ambiere/project-root/actions/workflows/main.yml/badge.svg)](https://github.com/ambiere/project-root/actions/workflows/main.yml)

## When

Import specifier string needs to be constructed dynamically, `require` not supported in esmodule
environment, dynamic `import` runs asynchronously. Read the file using `node:fs` APIs and parse the content to JSON.

>The content of the module to be read, should be a valid javascript object

Most likely to be used on configuration files and anywhere it might be the best choice.

## Install

```bash 
npm install @ambiere/to-json
```
## Example

```js
// module.js  

export const object = {
  property: 12,
  property2: "module",
  property3: true
}
```


```js
// index.js 

import toJSON from "@ambiere/to-json"

function readModule(customRootPath) {
  const pathToModule = path.resolve(path.join(customRootPath, "module.js"))
  const content = fs.readFile(pathToModule, "utf8")
  const json = toJSON(content)
  console.log(json) 
}

readModule("./customPath/to/module")
```

terminal log:

```json 
{
 "property": 12,
 "property2": "module",
 "property3": true
}
```

## Status

:construction: Under development


## License

[MIT license][MIT]

[MIT]: https://github.com/ambiere/project-root/blob/main/license

