import { describe, it, expect } from '@jest/globals'
import uuid from '../src/index'

describe('uuid', () => {
  it('returns a UUID without errors', () => {
    expect(uuid()).toBeDefined()
  })
  it('returns a UUID in the correct format', () => {
    const id = uuid()
    const pattern = new RegExp(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    )
    console.log(id)
    expect(id).toMatch(pattern)
  })
})
