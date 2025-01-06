export default {
  moduleFileExtensions: ['js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
};
