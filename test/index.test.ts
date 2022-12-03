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

    expect(id).toMatch(pattern)
  })

  it('generates unique IDs', () => {
    const id1 = uuid()
    const id2 = uuid()
    expect(id1).not.toMatch(id2)
  })

  describe('when used in a browser', () => {
    it('returns a UUID without errors', () => {
      expect(uuid()).toBeDefined()
    })
  })
})
