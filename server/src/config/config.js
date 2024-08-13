const path = require("path");

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "vuexpress",
    user: process.env.DB_USER || "vuexpress",
    password: process.env.DB_PASS || "vuexpress",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./vuexpress.sqlite",
      // storage: path.resolve(__dirname, "../../vuexpress.sqlite"),
    },
  },
  authentication: {
    jstSecret: process.env.JWT_SECRET || "secret",
  },
};
