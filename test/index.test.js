import path from "node:path"
import { test, describe } from "node:test"
import assert from "node:assert"
import { readFileSync } from "node:fs"

import toObject from "../src/index.js"
import configs from "./fixtures/parsedConfigs.js"

describe("to-object", async () => {
  test("parse raw configs", async () => {
    const pathToConfig = path.resolve("./test/fixtures/", "rawConfigs.js")
    const rawConfigs = readFileSync(pathToConfig, "utf8")
    const parsedConfigs = toObject(rawConfigs)

    assert.ok(parsedConfigs, "parsed configs")
    assert.ok(parsedConfigs.routeRoot, "access properties")
    assert.equal(parsedConfigs.yy, configs.yy)
  })
})
