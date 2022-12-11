module.exports = {
    root: true,
    extends: ['custom'],
    ignorePatterns: ['**/sdk.ts', "**/global-*.js"],
    env: {
        node: true,
        jest: true,
    },
};
