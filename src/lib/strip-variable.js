export default function stripVarDefinition(line) {
  function matchVarDefinition() {
    return line.match(/^const\s+\w+\s*=\s*/);
  }
  const match = matchVarDefinition()
  if (match && match.length)
    line = line.replace(line.substring(line.indexOf(match[0]), match[0].length), "")
  return line
}
