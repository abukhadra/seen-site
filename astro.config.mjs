import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            // title: 'Seen',
            title: {
                en: 'Seen',
                ar: 'لفة البرمجة س',
            },    
            logo: {
                light: './src/assets/light-logo.svg',
                dark: './src/assets/dark-logo.svg',        
            },
            // Set English as the default language for this site.
            defaultLocale: 'root',
            locales: {
                // English docs in `src/content/docs/en/`
                root: {
                    label: 'English',
                    lang: 'en'
                },        
                // Arabic docs in `src/content/docs/ar/`
                ar: {
                    label: 'العربية',
                    dir: 'rtl',
                },        
            },
            social: {
                github: 'https://github.com/abukhadra/seen',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
                {
                    label: 'Specification',
                    items: [
                        { label: 'Example Specification', slug: 'specification/spec' },
                    ]
                },        
            ],
            customCss: [
                // Path to your Tailwind base styles:
                './src/tailwind.css',
            ],        
        }), 
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }), 
        react()
    ],
});