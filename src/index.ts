import { browser } from './browser'
import { node } from './node'

const uuid = (): string => {
  if (typeof window !== 'undefined' && window.crypto) {
    return browser()
  }
  return node()
}

export default uuid
