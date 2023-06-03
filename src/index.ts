import { browser } from './browser'
import { node } from './node'

interface Config {
  short?: boolean
}

const uuid = (opts: Config = {}): string => {
  const { short } = opts
  if (typeof window !== 'undefined' && window.crypto) {
    return short ? browser().substring(0, 6) : browser()
  }
  return short ? node().substring(0, 6) : node()
}

export default uuid
