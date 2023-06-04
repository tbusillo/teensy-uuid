import { describe, it, assert, vi, afterEach, beforeEach } from 'vitest'
import uuid, { browser } from '../index'

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

  describe('browser', () => {
    let _crypto: Crypto = globalThis.crypto

    beforeEach(() => {
      _crypto = globalThis.crypto
    })

    afterEach(() => {
      globalThis.crypto = _crypto
    })

    it('throws an error when globalThis.crypto is not available', () => {
      const crypto = globalThis.crypto

      vi.stubGlobal('crypto', undefined)

      assert.throws(() => {
        browser()
      })
      globalThis.crypto = crypto
    })
  })
})
