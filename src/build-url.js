/**
 * Removes spare slash from the end of url
 * Joins url with provided parts
 *
 * @param {[String]|String}
 * @returns {string}
 * @example
 * import buildUrl from '@infotorg/build-url';
 * 
 * How url is fixed
 * 
 * const normalizedUrl = buildUrl('https://example.com/');
 * console.log(normalizedUrl);
 * https://example.com
 * 
 * 
 * How url is built from two strings
 * 
 * const normalizedUrl = buildUrl('https://example', 'chunk');
 * console.log(normalizedUrl);
 * https://example/chunk
 * 
 * 
 * How url is built by joining an array's indexes
 * 
 * const normalizedUrl = buildUrl(['https://example', 'chunk']);
 * console.log(normalizedUrl);
 * https://example/chunk
 * 
 */

export default function fixUrl(...args) {
  if (!args.length) {
    return '';
  }

  const oneTypeArgs = Array.isArray(args[0]) ? args[0] : args;
  const protocols = ['http://', 'https://', 'ftp://'];

  return oneTypeArgs
    .filter((urlPart) => urlPart !== undefined && urlPart !== null && urlPart !== '' && typeof urlPart !== 'boolean')
    .map((urlPart) => {
      let chunk = String(urlPart);

      if (!chunk.startsWith('/') && !protocols.some((proto) => chunk.startsWith(proto))) {
        chunk = `/${chunk}`;
      }

      if (chunk.endsWith('/')) {
        chunk = chunk.substring(0, chunk.length - 1);
      }

      return chunk;
    })
    .join('');
}
