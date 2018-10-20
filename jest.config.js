module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    setupTestFrameworkScriptFile: "<rootDir>src/setup-test.ts",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: [".yalc", "/dist/", "/node_modules/"],
    collectCoverage: false,
    verbose: true
};
