export default function parseToJSON(lines) {
  lines = lines.filter(line => line !== "")
  lines = lines.map(line =>
    line
      .replace("\n", "")
      .replace(/\:/, '":')
      .replace(/\{/, '{"')
      .replace(/\,/, ',"')
      .replace(/\`/gm, '"')
  )
  return glueJSON(lines)
}

function glueJSON(string) {
  string = string.join("").trim()
  return string.replace(/\,\"\}/gm, "}")
}

