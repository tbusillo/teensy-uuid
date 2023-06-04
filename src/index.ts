import { browser } from './browser'
import { node } from './node'

const uuid = (): string => {
  if (globalThis && globalThis.window && globalThis.crypto) {
    return browser()
  }
  return node()
}

export default uuid
export { browser, node, uuid }
