import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, polygon, base, type AppKitNetwork} from '@reown/appkit/networks'


export const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694" // this is a public projectId only to use on localhost
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, polygon, base]

export const ethersAdapter = new EthersAdapter()