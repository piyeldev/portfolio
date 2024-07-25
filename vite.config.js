import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		fs: {
		  // Allow serving files from one level up to the project root
		  allow: ['..'],
		},
	  },
	plugins: [enhancedImages(), sveltekit()]
});
