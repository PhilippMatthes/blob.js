type Edges = 'left' | 'bottom' | 'right' | 'top' | 'none' | 'all'

type Params = {
  id: string
  avoidedEdges: Edges[]
  roughness: number
  seed: number
}

function blob(params: Partial<Params> = {}) {}

blob.version = '0.1.0'

export default blob
