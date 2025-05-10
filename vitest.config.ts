/// <reference types="vitest" />
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: './src/test/setup.ts',
    coverage: {
      include: ['./src/**/__test__/*.ts'],
      thresholds: {
        statements: 100,
        functions: 100,
        branches: 100,
        lines: 100
      },
      reporter: ['json', 'html', 'lcov', 'clover']
    }
  }
});
