export default function stripExports(line) {
  function matchExport() {
    return line.match(/^export\s+\w+.*=\s*|^export\s+.*/);
  }
  const match = matchExport()
  if (match && match.length)
    line = line.replace(line.substring(line.indexOf(match[0]), match[0].length), "")
  return line
}
