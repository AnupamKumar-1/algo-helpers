module.exports = {
    testEnvironment: 'node',
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.jsx$": "babel-jest",
      "^.+\\.ts$": "babel-jest",
      "^.+\\.tsx$": "babel-jest"
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    verbose: true
  };
  