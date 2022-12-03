import crypto from 'node:crypto'
import { formatUUID, setSignificantBits } from './utils'

/**
 * @description Generates a 128 bit randomly-generated and RFC 4122 version 4 UUID
 *
 * @returns {string} Output a 36-character string in the folowing format: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
 */

export const nodeUUID = (): string => {
  // Generate 16 random bytes
  const bytes: Uint8Array = crypto.webcrypto.getRandomValues(new Uint8Array(16))

  if (!bytes || bytes.length !== 16) {
    throw new Error(
      'Unable to generate random bytes using crypto.webcrypto.getRandomValues()'
    )
  }

  const encodedBytes = setSignificantBits(bytes)

  // Encode the adjusted bytes as 32 hexadecimal digits
  const hex: string = Buffer.from(encodedBytes).toString('hex')

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
