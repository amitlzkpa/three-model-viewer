module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/*.e2e.(js|ts)'],
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: {
        allowJs: true
      }
    }
  }
};
