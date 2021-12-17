/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/tests/__mocks__/styleMock.js',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
