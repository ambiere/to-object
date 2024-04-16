import stripExport from "./lib/strip-export.js"
import stripComment from "./lib/strip-comment.js"
import stripVariable from "./lib/strip-variable.js"
import parseToObject from "./lib/parse-to-object.js"

export default function toObject(string) {
  const cleanLines = []
  const lines = string.split("\n")
  lines.map(line => {
    line = stripComment(line)
    line = stripExport(line)
    line = stripVariable(line)
    isNotEmptyLine() && cleanLines.push(line.trim())

    function isNotEmptyLine() {
      return line !== ""
    }
  })
  return parseToObject(cleanLines)
}

