/*
 * @Description:
 * @FilePath: /proste-taro-hooks/jest.config.ts
 */
const config = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  testMatch: ['<rootDir>/**/__tests__/**/*.test.(ts|tsx)'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@hooks(.*)$': '<rootDir>/src',
  },
};

export default config;
