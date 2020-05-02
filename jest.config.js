module.exports = {
    "moduleFileExtensions": ["js", "svelte"],
    "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"],
    "transform": {
        "^.+\\.js$": "babel-jest",  
        "^.+\\.svelte$": "svelte-jester"
    }
};
