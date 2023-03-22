/**
 * Fixed url by removing slashes
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
        chunk = chunk.substr(0, chunk.length - 1);
      }

      return chunk;
    })
    .join('');
}
