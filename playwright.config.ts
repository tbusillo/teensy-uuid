import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './src/tests',
  testMatch: '/**/?(*.)+(spec).[tj]s?(x)',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: 'pnpm serve',
    url: 'http://127.0.0.1:3005',
    reuseExistingServer: !process.env.CI
  }
})
