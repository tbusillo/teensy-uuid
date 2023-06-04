import { convertToHex, formatUUID, setSignificantBits } from './utils'

/**
 * @description Generates a 128 bit randomly-generated and RFC 4122 version 4 UUID
 *
 * @returns {string} Output a 36-character string in the folowing format: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
 */

export const browser = (): string => {
  const crypto: Crypto =
    !!(globalThis && globalThis.crypto && globalThis.window) &&
    globalThis.crypto

  if (!crypto) {
    throw new Error(
      'globalThis.crypto is not available. Are you in a Node environment?'
    )
  }

  const { getRandomValues } = crypto as Crypto

  if (getRandomValues) {
    // Generate 16 random bytes
    const bytes: Uint8Array = getRandomValues(new Uint8Array(16))

    if (!bytes || bytes.length !== 16) {
      throw new Error(
        'Unable to generate random bytes using crypto.getRandomValues()'
      )
    }

    const encodedBytes = setSignificantBits(bytes)

    // Encode the adjusted bytes as 32 hexadecimal digits
    const hex = convertToHex(encodedBytes)

    if (!hex || typeof hex !== 'string' || hex.length !== 32) {
      throw new Error(
        'Unable to encode random bytes as a string of hexadecimal digits'
      )
    }

    // Add four hyphen "-" characters to obtain blocks of 8, 4, 4, 4 and 12 hex digits
    const uuid = formatUUID(hex)

    if (!uuid) {
      throw new Error('Unable to generate a UUID')
    }

    return uuid
  }
  throw new Error('globalThis.crypto is not available')
}
