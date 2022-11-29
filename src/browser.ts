import { convertToHex, formatUUID, setSignificantBits } from './utils'

export const browserUUID = (): string => {
  const crypto = globalThis.crypto
  if (crypto) {
    // Generate 16 random bytes
    const bytes: Uint8Array = crypto.getRandomValues(new Uint8Array(16))

    if (!bytes || bytes.length !== 16) {
      throw new Error(
        'Unable to generate random bytes using crypto.getRandomValues()'
      )
    }

    const encodedBytes = setSignificantBits(bytes)

    // Encode the adjusted bytes as 32 hexadecimal digits
    const hex = convertToHex(encodedBytes)

    if (typeof hex !== 'string' || !hex || hex.length !== 32) {
      throw new Error(
        'Unable to encode random bytes as a string of hexadecimal digits'
      )
    }

    // Add four hyphen "-" characters to obtain blocks of 8, 4, 4, 4 and 12 hex digits
    const result = formatUUID(hex)

    if (!result) {
      throw new Error('Unable to generate a UUID')
    }

    return result
  }
  throw new Error('globalThis.crypto is not available')
}
