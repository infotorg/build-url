/**
 * Build an URL by joining provided parts and removing trailing slash
 *
 * @example
 * import { buildUrl } from '@infotorg/build-url';
 *
 * // How url is fixed
 * const normalizedUrl = buildUrl('https://example.com/');
 * console.log(normalizedUrl);
 * // https://example.com
 *
 *
 * // How url is built from two parts
 * const normalizedUrl = buildUrl('https://example.com', 'chunk');
 * console.log(normalizedUrl);
 * // https://example.com/chunk
 *
 *
 * // How url is built by joining an array of parts
 * const normalizedUrl = buildUrl(['https://example', 'chunk']);
 * console.log(normalizedUrl);
 * // https://example/chunk
 *
 * @param {string[]|string} args Url parts
 * @returns {string}
 */
function buildUrl(...args) {
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

export { buildUrl };
