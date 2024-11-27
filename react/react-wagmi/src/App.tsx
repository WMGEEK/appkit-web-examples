import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ActionButtonList } from './components/ActionButtonList'
import { InfoList } from './components/InfoList'
import { projectId, metadata, networks, wagmiAdapter } from './config'

import "./App.css"

const queryClient = new QueryClient()

const generalConfig = {
  projectId,
  metadata,
  networks
}

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
})

export function App() {

  return (
    <div className={"pages"}>
      <img src="/reown.svg" alt="Reown" style={{ width: '150px', height: '150px' }} />
      <h1>AppKit Wagmi React dApp Example</h1>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            <appkit-button />
            <ActionButtonList />
            <div className="advice">
              <p>
                This projectId only works on localhost. <br/>
                Go to <a href="https://cloud.reown.com" target="_blank" className="link-button" rel="Reown Cloud">Reown Cloud</a> to get your own.
              </p>
            </div>
            <InfoList />
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  )
}

export default App