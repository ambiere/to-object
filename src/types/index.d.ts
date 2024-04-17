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
 * toObject() helper fn
 *
 * @param {string[]} lines
 * @returns { { [index: string]: any } | undefined }
 * */
export function parseToObject(lines: string[]): { [index: string]: any } | undefined

/**
 * Parse string representations of object to
 * JavaScript objects.
 *
 * @param {string} string
 * @returns { { [index: string]: any } | undefined } object
 *
 * @example 
 * 
 * const string = '{ name: "to-object", since: 2024 }'
 * const object = toObject(string)
 *
 * console.log(object.name)  // "to-object"
 *
 * */
export default function toObject(string: string): { [index: string]: any } | undefined

