module.exports = {
  testEnvironment: "jsdom",

  verbose: true,

  collectCoverage: true,
  coverageThreshold: {
    global: {
      statement: 90
    }
  },

  moduleFileExtensions: [
    "js",
    "vue"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  modulePaths: [
    "<rootDir>/src",
    "<rootDir>/node_modules"
  ],
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(js)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(vuetify)/)",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$",
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.js'],
}