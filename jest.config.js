export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  moduleNameMapper: {
    // serve para configurar um arquivo fake para possibilitar a utilização de imagens nos mocks
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
    // serve para configurar um arquivo fake para possibilitar a utilização de css nos mocks
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  }
}
