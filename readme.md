### to-object [![Release](https://github.com/ambiere/to-object/actions/workflows/main.yml/badge.svg)](https://github.com/ambiere/to-object/actions/workflows/main.yml)

>Lightweight utility package designed to simplify— <br>the process of parsing
string representations of objects into JavaScript objects.

Implemented in [next-clsx](https://github.com/ambiere/clsx)

### Install

```bash
npm install @ambiere/to-object
```

### Case

In configuration files when import specifier string/path to the configuration module
can only be constructed dynamically, hence static imports become impractical, `require`
not supported in esmodule environment and dynamic imports, `import()` are not feasible
due to their asynchronous nature.

```js
const configs = {
  config1: "first",
  config2: "second",
  //other configs
}
```

```js
import toObject from "@ambiere/to-object"

{
//other code omitted
//in the middle of your code where you need to import the configs

const configs = fs.readFileSync("/dynamically/constructed/import/specifier", "utf8")
const parsedConfigs = toObject(configs)

console.log(parsedConfigs.config1) // "first"
//other code omitted
}
```


Note: The content of the configuration module to be read, should be a valid JavaScript object


### Status

:construction: Under development

### License

[MIT license][MIT]

[MIT]: https://github.com/ambiere/project-root/blob/main/license
