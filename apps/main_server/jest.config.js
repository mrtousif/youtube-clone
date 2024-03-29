/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
    rootDir: "src",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    collectCoverageFrom: [
        "**/*.(t|j)s"
    ],
    coverageDirectory: "../coverage",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["jest-extended/all"]
};
