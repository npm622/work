export class Classer {
  constructor(private prefix: string) {}

  name(className?: string) {
    if (!className) {
      return this.prefix;
    }
    return `${this.prefix}-${className}`;
  }

  new(prefix: string) {
    return new Classer(`${this.prefix}-${prefix}`);
  }
}
