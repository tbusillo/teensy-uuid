import { nodeUUID } from './node'
import { browserUUID } from './browser'

const uuid = (): string => {
  if (typeof window !== 'undefined') {
    return browserUUID()
  } else {
    return nodeUUID()
  }
}

export default uuid
export { nodeUUID, browserUUID }
