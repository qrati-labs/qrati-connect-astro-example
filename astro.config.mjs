// @ts-check
import tailwindcss from '@tailwindcss/vite';

import { defineConfig } from 'astro/config';

import { fileURLToPath } from 'node:url';

const qratiElementDistDir = fileURLToPath(new URL('../../dist/element', import.meta.url));

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        server: {
            fs: {
                allow: [qratiElementDistDir]
            }
        }
    }
});
