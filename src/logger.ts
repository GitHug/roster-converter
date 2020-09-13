export enum Level {
  INFO,
  WARN,
  ERROR
}

abstract class Logger {
  private level: Level;
  constructor(level: Level) {
    this.level = level;
  }

  protected abstract logMethod(message: string): void;

  log(...data: unknown[]): void {
    if (process.env.SILENT) return;

    const message = `⚡️[server ${Level[this.level]}]: ${data}`;
    this.logMethod(message);
  }
}

class InfoLogger extends Logger {
  constructor() {
    super(Level.INFO);
  }

  logMethod(message: string): void {
    console.log(message);
  }
}

class WarnLogger extends Logger {
  constructor() {
    super(Level.WARN);
  }

  protected logMethod(message: string): void {
    console.warn(message);
  }
}

class ErrorLogger extends Logger {
  constructor() {
    super(Level.ERROR);
  }

  protected logMethod(message: string): void {
    console.error(message);
  }
}

class TraceLogger extends Logger {
  constructor() {
    super(Level.ERROR);
  }

  protected logMethod(message: string): void {
    console.trace(message);
  }
}

export const info = (...data: unknown[]): void => new InfoLogger().log(data);
export const warn = (...data: unknown[]): void => new WarnLogger().log(data);
export const error = (...data: unknown[]): void => new ErrorLogger().log(data);
export const trace = (...data: unknown[]): void => new TraceLogger().log(data);
