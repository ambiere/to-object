# to-object [![ci](https://github.com/ambiere/to-object/actions/workflows/main.yml/badge.svg)](https://github.com/ambiere/to-object/actions/workflows/main.yml)

>Lightweight utility package designed to simplify—
<br>the process of parsing string representations of objects into JavaScript objects.

As implemented in [next-clsx](https://github.com/ambiere/clsx)

>contents <br>1. [Installattion](#Installattion)<br>2. [Use case](#Use-case)<br>3. [License](#License)


## Installattion

```bash
npm install @ambiere/to-object
```

## Use case

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

function configure() {
  // ...

  /*
  * In your code where
  * you need to import the configs
  * */

  const configs = fs.readFileSync("/dynamically/constructed/import/specifier", "utf8")
  const parsedConfigs = toObject(configs)

  console.log(parsedConfigs.config1) // "first"

  // ...
}
```

Note: The content of the configuration module/file to be read,
should be a valid JavaScript object

## License

[MIT license][MIT]

[MIT]: https://github.com/ambiere/project-root/blob/main/license
