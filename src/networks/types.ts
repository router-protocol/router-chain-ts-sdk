/**
 * Different networks available on Router chain.
 * 
 * @group Network
 */
export enum Network {
  Local = 'local',
  InternalDevnet = 'internal-devnet',
  AlphaDevnet = 'alpha-devnet',
  Devnet = 'devnet',
  Testnet = 'testnet',
  TestnetEu = 'testnet-eu',
  Mainnet = 'mainnet',
  Docker = 'docker',
  LoadTest = 'load-test',
}

export const getNetworkType = (type: string) => {
  switch (type.toLowerCase()) {
    case 'local':
      return Network.Local;
    case 'internal-devnet':
      return Network.InternalDevnet;
    case 'alpha-devnet':
      return Network.AlphaDevnet;
    case 'devnet':
      return Network.Devnet;
    case 'testnet':
      return Network.Testnet;
    case 'testnet-eu':
      return Network.TestnetEu;
    case 'mainnet':
      return Network.Mainnet;
    case 'docker':
      return Network.Docker;
    case 'load-test':
      return Network.LoadTest;
    default:
      return Network.Devnet;
  }
};

export type NetworkEndpoints = {
  explorerGql: string;
  explorerGqlWs: string;
  lcdEndpoint: string;
  grpcEndpoint: string;
  tmEndpoint: string;
  rpcEndpoint: string;
};

export type UrlEndpoints = NetworkEndpoints /** Deprecated */

export type ChainInfo = { feeDenom: string; chainId: string; env: string }

export type ChainConfigurationtype = {
  name: string;
  chainId: string;
  logoURI: string;
};