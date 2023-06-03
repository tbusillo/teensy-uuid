import { describe, it, assert } from 'vitest'
import uuid from '../index'

describe('uuid', () => {
  it('returns a UUID without errors', () => {
    assert.typeOf(uuid(), 'string')
  })

  it('returns a UUID in the correct format', () => {
    const id = uuid()
    const pattern = new RegExp(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    )
    assert.match(id, pattern)
    assert.equal(id.length, 36)
  })

  it('generates unique IDs', () => {
    const id1 = uuid()
    const id2 = uuid()

    assert.notEqual(id1, id2)
  })

  describe('when used in a browser', () => {
    it('returns a UUID without errors', () => {
      assert.typeOf(uuid(), 'string')
    })
  })
})
