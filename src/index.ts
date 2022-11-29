import { nodeUUID } from './node'
import { browserUUID } from './browser'

const uuid = (): string => {
  let result: string = ''
  if (globalThis) {
    result = browserUUID()
  } else {
    result = nodeUUID()
  }
  return result
}

export default uuid
