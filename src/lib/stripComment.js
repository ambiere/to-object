export default function stripComment(line) {
  function matchComment() {
    return line.match(/^\/|\s\/|\*|\s\*/)
  }
  const match = matchComment()
  if (match && match.length) line = line.replace(line.substring(line.indexOf(match[0])), "");
  return line
}


