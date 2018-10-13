// Exhaustiveness checking - http://www.typescriptlang.org/docs/handbook/advanced-types.html
/* istanbul ignore next */
export const assertNever = (x: never) => {
  throw new Error("Unexpected object: " + x);
};

// https://stackoverflow.com/questions/30498318/es5-object-assign-equivalent
export const mergeObjects = (...args: any[]) => {
  return args.reduce((res, arg) => {
    if (arg !== undefined) {
      Object.keys(arg).forEach(key => (res[key] = arg[key]));
    }
    return res;
  }, {});
};

export const safeJoin = (delimiter: string, ...parts: string[]) =>
  parts
    .filter(part => part.trim() != "")
    .map(part =>
      part
        .replace(new RegExp(`/^${delimiter}/`), "")
        .replace(new RegExp(`/${delimiter}$/`), "")
    )
    .join(delimiter);

export const randomInt = (min = 0, max = 1000) =>
  Math.ceil((max - min) * Math.random()) + min;

export const randomDecimal = (length = 14, scale = 4) => {
  const lhs = randomInt(
    Math.pow(10, length - scale - 1),
    Math.pow(10, length - scale)
  );
  const rhs = randomInt(Math.pow(10, scale - 1), Math.pow(10, scale));
  return parseFloat(`${lhs}.${rhs}`);
};

export const randomString = (
  length = 10,
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) => {
  let text = "";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const randomDate = () => {
  const now = new Date();
  return (
    `${now.getFullYear()}-` +
    `${padZeros(now.getMonth())}-` +
    `${padZeros(now.getDate())}`
  );
};

export const randomTime = () => {
  const now = new Date();
  return (
    `${now.getFullYear()}-` +
    `${padZeros(now.getMonth())}-` +
    `${padZeros(now.getDate())}T` +
    `${padZeros(now.getHours())}:` +
    `${padZeros(now.getMinutes())}:` +
    `${padZeros(now.getSeconds())}.` +
    `${padZeros(now.getMilliseconds(), 3)}`
  );
};

const padZeros = (num: number, length = 2) => {
  const raw = "00" + num;
  return raw.substr(raw.length - length);
};
