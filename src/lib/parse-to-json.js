export default function parseToJSON(lines) {
  lines = lines.filter(line => line !== "")
  const parsed = lines.map(line => line
    .replace("\n", "")
    .replace(/\:/, '":')
    .replace(/\{/, '{"')
    .replace(/\,/, ',"')
    .replace(/\`/gm, '"'))
  return parsed.join("").trim()
}
//TODO: unterminated strings in JSON
