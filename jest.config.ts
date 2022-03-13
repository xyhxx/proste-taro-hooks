/*
 * @Description:
 * @FilePath: /proste-taro/jest.config.ts
 */
const config = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.test.(ts|tsx)'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@hooks(.*)$': '<rootDir>/packages/hooks$1',
  },
};

export default config;
