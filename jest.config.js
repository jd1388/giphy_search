module.exports = {
    transform: {
        "^.+\\.svelte$": "svelte-jester",
        "^.+\\.js$": "babel-jest"
      },
    moduleFileExtensions: ["js", "svelte"],
    testPathIgnorePatterns: ["node_modules"],
    bail: false,
    verbose: true,
    transformIgnorePatterns: ["node_modules/(?!(svelte-awesome)/)"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
