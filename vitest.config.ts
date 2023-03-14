import { defineConfig } from 'vitest/config'
import Vue2 from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [Vue2()],
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['json', 'html', 'text-summary', 'text'],
    },
    environment: 'jsdom',
  },
})
