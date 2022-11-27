import { webcrypto } from 'node:crypto'

/**
 * @description Generates a 128 bit randomly-generated and RFC 4122 version 4 UUID
 *
 * @returns {string} Output a 36-character string in the folowing format: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
 */
const uuid = (): string => {
  const typedArray: Uint8Array = new Uint8Array(16)

  // Generate 16 random bytes
  const bytes: Uint8Array = webcrypto.getRandomValues(typedArray)

  if (!bytes || bytes.length !== 16) {
    throw new Error(
      'Unable to generate random bytes using crypto.webcrypto.getRandomValues()'
    )
  }

  // set the four most significant bits of the 7th byte to 0100'B, so the high nibble is "4"
  bytes[6] = (bytes[6] & 0x0f) | 0x40

  // set the two most significant bits of the 9th byte to 10'B, so the high nibble will be one of "8", "9", "A", or "B"
  bytes[8] = (bytes[8] & 0x3f) | 0x80

  // Encode the adjusted bytes as 32 hexadecimal digits
  const hex: string = Buffer.from(bytes).toString('hex')

  if (typeof hex !== 'string' || !hex || hex.length !== 32) {
    throw new Error(
      'Unable to encode random bytes as a string of hexadecimal digits'
    )
  }

  const result = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(
    12,
    16
  )}-${hex.slice(16, 20)}-${hex.slice(20)}`

  if (!result) {
    throw new Error('Unable to generate a UUID')
  }

  // Add four hyphen "-" characters to obtain blocks of 8, 4, 4, 4 and 12 hex digits
  return result
}

export default uuid
