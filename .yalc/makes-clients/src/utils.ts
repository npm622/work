export const prefix = (prefix: string, text: string) => (text.indexOf(prefix) === 0 ? text : `${prefix}${text}`);

export const safeJoin = (delimiter: string, ...parts: string[]) =>
  parts
    .filter(part => !!part)
    .map((part, i) =>
      i === 0
        ? part.replace(new RegExp(`${delimiter}$`), '')
        : i === parts.length - 1
        ? part.replace(new RegExp(`^${delimiter}`), '')
        : part.replace(new RegExp(`^${delimiter}`), '').replace(new RegExp(`${delimiter}$`), '')
    )
    .join(delimiter);

// const Joiner = (delimiter: string, matcher = delimiter) => (...parts: string[]) =>
//   parts
//     .map((part, i) =>
//       i === 0
//         ? part.replace(new RegExp(`/${matcher}$/`), '')
//         : i === parts.length - 1
//         ? part.replace(new RegExp(`/^${matcher}/`), '')
//         : part.replace(new RegExp(`/^${matcher}/`), '').replace(new RegExp(`/${delimiter}$/`), '')
//     )
//     .join(delimiter);
