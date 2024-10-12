export default function parseToObject(lines) {
  const allowedChar = /[\],:{}\s]*/
  const openBrackets = /(?:^|:|,)(?:\s*\[)+/g
  const escapeSequence = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
  const typicalChar = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
  const unicodeRegex = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g

  lines = lines.join("\n")

  /**
   * shoutout to douglascrockford
   * */
  lines = String(lines)
  unicodeRegex.lastIndex = 0
  if (unicodeRegex.test(lines)) {
    lines = lines.replace(unicodeRegex, function(a) {
      return (
        "\\u"
        + ("0000" + a.charCodeAt(0).tolines(16)).slice(-4)
      )
    })
  }

  const isParseable = allowedChar.test(
    lines
      .replace(escapeSequence, "@")
      .replace(typicalChar, "]")
      .replace(openBrackets, "")
  )

  if (isParseable) {
    return eval("(" + lines + ")")
  }

  throw new SyntaxError("object string not parseable")
}
