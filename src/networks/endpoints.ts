import { NetworkEndpoints } from './types';
export const urlEndpointsMainnet: NetworkEndpoints = {
         explorerGql: 'https://api.explorer.routerscan.io/gql/query',
         explorerGqlWs: 'wss://api.explorer.routerscan.io/gql/query',
         lcdEndpoint: 'https://sentry.lcd.routerprotocol.com',
         grpcEndpoint: 'https://sentry.grpcweb.routerprotocol.com',
         tmEndpoint: 'https://sentry.tm.rpc.routerprotocol.com',
         rpcEndpoint: 'https://sentry.evm.rpc.routerprotocol.com',
       };

export const urlEndpointsTestnet: NetworkEndpoints = {
         explorerGql: 'https://explorer-api.routerchain.dev/gql/query',
         explorerGqlWs: 'wss://explorer-api.routerchain.dev/gql/query',
         lcdEndpoint: 'https://lcd.sentry.routerchain.dev',
         grpcEndpoint: 'https://grpcweb.sentry.routerchain.dev',
         tmEndpoint: 'https://tmrpc.sentry.routerchain.dev',
         rpcEndpoint: 'https://evmrpc.sentry.routerchain.dev',
       };

export const urlEndpointsLoadtest: NetworkEndpoints = {
         explorerGql:
           'https://loadtest-explorer-alpha.routerchain.dev/gql/query',
         explorerGqlWs:
           'ws://loadtest-explorer-alpha.routerchain.dev/gql/query',
         lcdEndpoint: 'https://perf.lcd.routerchain.dev',
         grpcEndpoint: 'https://perf.grpcweb.routerchain.dev',
         tmEndpoint: 'https://perf.tm.routerchain.dev',
         rpcEndpoint: 'https://perf.evm.rpc.routerchain.dev',
       };

export const urlEndpointsTestnetEu: NetworkEndpoints = {
         explorerGql: 'https://explorer-api.testnet.routerchain.dev/gql/query',
         explorerGqlWs: 'wss://explorer-api.testnet.routerchain.dev/gql/query',
         lcdEndpoint: 'https://lcd.sentry.routerchain.dev',
         grpcEndpoint: 'https://grpcweb.sentry.routerchain.dev',
         tmEndpoint: 'https://tmrpc.sentry.routerchain.dev',
         rpcEndpoint: 'https://evmrpc.sentry.routerchain.dev',
       };

export const urlEndpointsInternalDevnet: NetworkEndpoints = {
  explorerGql: 'https://alpha-explorer-api.routerchain.dev/gql/query',
  explorerGqlWs: 'wss://alpha-explorer-api.routerchain.dev/gql/query',
  lcdEndpoint: 'https://devnet-internal.lcd.routerprotocol.com',
  grpcEndpoint: 'https://devnet-internal.grpcweb.routerprotocol.com',
  tmEndpoint: 'https://devnet-internal.tm.routerprotocol.com',
  rpcEndpoint: 'https://devnet-internal.evm.rpc.routerprotocol.com',
};

export const urlEndpointsAlphaDevnet: NetworkEndpoints = {
  explorerGql: 'https://alpha-explorer-api.routerchain.dev/gql/query',
  explorerGqlWs: 'wss://alpha-explorer-api.routerchain.dev/gql/query',
  lcdEndpoint: 'https://devnet-alpha.lcd.routerprotocol.com',
  grpcEndpoint: 'https://devnet-alpha.grpcweb.routerprotocol.com',
  tmEndpoint: 'https://devnet-alpha.tm.routerprotocol.com',
  rpcEndpoint: 'https://devnet-alpha.evm.rpc.routerprotocol.com',
};

export const urlEndpointsDevnet: NetworkEndpoints = {
         explorerGql:
           'https://devnet-explorer-api.routerprotocol.com/gql/query',
         explorerGqlWs:
           'wss://devnet-explorer-api.routerprotocol.com/gql/query',
         lcdEndpoint: 'https://devnet.lcd.routerprotocol.com',
         grpcEndpoint: 'https://devnet.grpcweb.routerprotocol.com',
         tmEndpoint: 'https://devnet.tm.routerprotocol.com',
         rpcEndpoint: 'https://devnet.evm.rpc.routerprotocol.com',
       };

export const urlEndpointsLocal: NetworkEndpoints = {
         explorerGql: 'http://127.0.0.1:3000/gql/query',
         explorerGqlWs: 'ws://127.0.0.1:3000/gql/query',
         lcdEndpoint: 'http://127.0.0.1:1317',
         grpcEndpoint: 'http://127.0.0.1:9090',
         tmEndpoint: 'http://127.0.0.1:26657',
         rpcEndpoint: 'http://127.0.0.1:8545',
       };

export const urlEndpointsDocker: NetworkEndpoints = {
         explorerGql: 'http://host.docker.internal:3000/gql/query',
         explorerGqlWs: 'wss://host.docker.internal:3000/gql/query',
         lcdEndpoint: 'https://devnet-alpha.lcd.routerprotocol.com',
         grpcEndpoint: 'https://devnet-alpha.grpcweb.routerprotocol.com',
         tmEndpoint: 'https://devnet-alpha.tm.routerprotocol.com',
         rpcEndpoint: 'https://devnet-alpha.evm.rpc.routerprotocol.com',
       };
