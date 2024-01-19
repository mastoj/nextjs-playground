import winston from 'winston';
import BrowserConsole from 'winston-transport-browserconsole';

const { combine, timestamp, label, printf } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    }),
  ),
  transports: globalThis.window
    ? [new BrowserConsole()]
    : [new winston.transports.Console()],
});

export { logger };
