module.exports = {
  roots: ["<rootDir>/src"],
  // clearMocks: true,
  // collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/main/**",
    "!<rootDir>/src/**/*-protocols.ts",
    "!<rootDir>/src/**/index.ts",
  ],
  coverageDirectory: "coverage",
  // coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
