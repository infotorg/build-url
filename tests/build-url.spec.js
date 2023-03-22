import buildUrl from '../src/build-url.js';

describe('Tests fixUrl helper', () => {
  test.each([
    {
      args: ['https://infotorg.no/', '/aktuelt/nyheter', '/blah/'],
      expected: 'https://infotorg.no/aktuelt/nyheter/blah',
    },
    {
      args: ['https://infotorg.no/'],
      expected: 'https://infotorg.no',
    },
    { args: undefined, expected: '' },
    { args: null, expected: '' },
    { args: true, expected: '' },
    { args: false, expected: '' },
    { args: 0, expected: '/0' },
    { args: '0', expected: '/0' },
    { args: '', expected: '' },
    { args: [false], expected: '' },
    { args: [null], expected: '' },
    { args: ['/aktuelt/nyheter/', '/blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['/aktuelt/nyheter/', '/blah'], expected: '/aktuelt/nyheter/blah' },
    { args: ['/aktuelt/nyheter/', 'blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['/aktuelt/nyheter/', 'blah'], expected: '/aktuelt/nyheter/blah' },
    { args: ['/aktuelt/nyheter', '/blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['/aktuelt/nyheter', '/blah'], expected: '/aktuelt/nyheter/blah' },
    { args: ['/aktuelt/nyheter', 'blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['/aktuelt/nyheter', 'blah'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter/', '/blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter/', '/blah'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter/', 'blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter/', 'blah'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter', '/blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter', '/blah'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter', 'blah/'], expected: '/aktuelt/nyheter/blah' },
    { args: ['aktuelt/nyheter', 'blah'], expected: '/aktuelt/nyheter/blah' },
  ])(
    `it should test:
        - if "/" is removed from the end of the string if it exists there
        - if "/" added at the beginning of the string if it wasn't there earlier
        - if "" (empty string) is returned when: null, undefined, true, false, [false], [null] and "" was provided as
        a param
        - if 0 is treated as a string
    `,
    ({ args, expected }) => {
      expect(buildUrl(args)).toBe(expected);
    }
  );
});
