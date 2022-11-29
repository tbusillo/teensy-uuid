const convertToHex = (vals: Uint8Array): string => {
  return Buffer.from(vals).toString('hex')
}

const formatUUID = (hex: string): string => {
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(
    12,
    16
  )}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

const setSignificantBits = (bytes: Uint8Array): Uint8Array => {
  // set the four most significant bits of the 7th byte to 0100'B, so the high nibble is "4"
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  // set the two most significant bits of the 9th byte to 10'B, so the high nibble will be one of "8", "9", "A", or "B"
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  return bytes
}

export { convertToHex, formatUUID, setSignificantBits }
