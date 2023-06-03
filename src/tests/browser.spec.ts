import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3005')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /@teensy\/uuid browser devleopment\/test fixture/
  )
})

test('shows uuid', async ({ page }) => {
  await page.goto('http://localhost:3005')
  const element = page.getByText(/uuid:/i)
  await expect(element).toHaveText(/uuid: [0-9a-f-]{36}/i)
})
