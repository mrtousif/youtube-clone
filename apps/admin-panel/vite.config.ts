/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

import manifest from './manifest.json';

// https://vitejs.dev/config/
const viteConfig = ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    
    return defineConfig({
        server: {
            proxy: {
                '/auth/*': {
                    target: 'http://localhost:6000',
                    changeOrigin: true,
                    xfwd: true,
                },
            }
        },
        plugins: [
            react(),
            tsconfigPaths(),
            checker({
                typescript: true,
                // eslint: {
                //     lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
                // },
            }),
            VitePWA({
                registerType: 'autoUpdate',
                manifest,
                includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
                // switch to "true" to enable sw on development
                devOptions: {
                    enabled: false,
                },
                // workbox: {
                //     globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
                // },
            }),
        ],
        test: {
            globals: true,
            environment: 'jsdom',
            coverage: {
                reporter: ['text', 'json', 'html'],
            },
        },
    });
}

export default viteConfig;