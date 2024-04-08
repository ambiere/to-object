import parseToJSON from "./lib/parse-to-json.js"
import stripComment from "./lib/strip-comment.js"
import stripExport from "./lib/strip-export.js"
import stripVariable from "./lib/strip-variable.js"

export default function toJSON(file) {
  const cleanLines = []
  const lines = file.split("\n")
  lines.map(line => {
    line = stripComment(line)
    line = stripExport(line)
    line = stripVariable(line)
    isNotEmptyLine() && cleanLines.push(line.trim())

    function isNotEmptyLine() {
      return line !== ""
    }
  })
  return parseToJSON(cleanLines)
}

