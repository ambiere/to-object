/**
 * Parse string to JSON
 * 
 * @param {string} lines
 * @returns {string}
 * */
export function parseToJSON(lines: string[]): string

/**
 * Remove javascript comments 
 *
 * @param {string} line
 * @returns {string}
 * */
export function stripComment(line: string): string

/**
 * Remove exports statement 
 *
 * @param {string} line
 * @returns {string}
 * */
export function stripExports(line: string): string

/**
 * Remove variable definition 
 *
 * @param {string} line
 * @returns {string}
 * */
export function stripVarDefinition(line: string): string

/**
 * Parse json-like strings to JSON string 
 *
 * Optionally, you can read module content 
 * using node:fs APIs and parse the string content to JSON
 *
 * @param {string} file 
 * @returns {string}
 *
 * @example 
 * //module.js
 *
 * export default moduleContent = {name: "to-json", since; 2024}
 *
 * //index.js
 *
 * const content = await readFile("./module.js", "utf8")
 * const json = toJSON(content)
 * console.log(json) // {"name": "to-json", "since: 2024"}
 * 
 * */
export default function toJSON(file: string): string  
