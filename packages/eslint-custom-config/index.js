module.exports = {
    extends: ['alloy', 'alloy/typescript', 'alloy/react'],
    ignorePatterns: ['**/migrations/*.ts', 'dist/*', '*-env.d.ts'],
    overrides: [
        {
            files: ['*.resolver.ts'],
            rules: {
                'max-params': 0,
            },
        },
    ],
    plugins: ['prettier', 'react-hooks'],
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
