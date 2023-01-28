module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['tests/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
