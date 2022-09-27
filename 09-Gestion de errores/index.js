const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function verError() {
  throw new Error("verError function");
}

try {
  verError();
} catch (e) {
  logger.log("Error", e.toString());
}