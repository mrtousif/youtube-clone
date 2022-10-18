// @ts-check
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    extends: ['prettier', 'alloy', 'alloy/typescript', 'alloy/react', 'plugin:sonarjs/recommended'],
    ignorePatterns: ['**/migrations/*.ts', '**/generated/*.ts', 'dist/*', '*-env.d.ts'],
    env: {
        jest: true,
    },
    overrides: [
        {
            files: ['*.resolver.ts'],
            rules: {
                'max-params': 0,
            },
        },
    ],
    plugins: ['prettier', 'sonarjs'],
    rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
          version: "detect",
        },
    },
});
