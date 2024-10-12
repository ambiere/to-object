import stripExport from "./lib/stripExport.js"
import stripComment from "./lib/stripComment.js"
import stripVariable from "./lib/stripVariable.js"
import parseToObject from "./lib/parseObject.js"

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

