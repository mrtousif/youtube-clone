module.exports = {
    extends: ["alloy", "alloy/typescript", "alloy/react"],
    ignorePatterns: ["**/migrations/*.ts", "dist/*", "*-env.d.ts"],
    overrides: [
        {
            files: ["*.resolver.ts"],
            rules: {
                "max-params": 0,
            },
        },
    ],
    plugins: ["prettier"],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
    },
};
