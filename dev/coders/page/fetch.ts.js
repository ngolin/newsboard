module.exports = function() {
  return [
    `import fetch from '_fetch';`,
    `import resolve from '_fetch/resolve';`,
    `import { defaultParams, defaultQuery } from '.';`,
    ``,
    `export function fetchFrom({} = defaultParams, query = defaultQuery) {`,
    `  console.log('query', query);`,
    `  if (__DEVE__) {`,
    `    return resolve(true);`,
    `  }`,
    `  return fetch(\`\${API_PATH}\`);`,
    `}`,
    ``,
  ].join('\n');
};
