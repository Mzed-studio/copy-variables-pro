declare module 'console' {
  const console: Console;
  export = console;
}

declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
