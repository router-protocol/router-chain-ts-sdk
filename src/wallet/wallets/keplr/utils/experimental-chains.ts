import { Bech32Address } from '@keplr-wallet/cosmos';
import {
  TestnetCosmosChainId,
  DevnetCosmosChainId,
  CosmosChainId,
  getEndpointsForNetwork,
  getNetworkType,
  getChainInfoForNetwork,
  Network,
  ROUTER_DENOM,
  BECH32_ADDR_ACC_PREFIX,
  BECH32_PUBKEY_VAL_PREFIX,
  BECH32_ADDR_CONS_PREFIX,
  BECH32_PUBKEY_CONS_PREFIX,
  BECH32_ADDR_VAL_PREFIX,
} from '../../../..';

export const experimentalChainsConfig = {
         [CosmosChainId.Router]: {
           rpc: getEndpointsForNetwork(getNetworkType('mainnet')).tmEndpoint,
           rest: getEndpointsForNetwork(getNetworkType('mainnet')).lcdEndpoint,
           rpcConfig: undefined,
           restConfig: undefined,
           chainId: getChainInfoForNetwork(Network.Mainnet),
           chainName: 'Router',
           evm: {
             chainId: 9600,
             rpc: getEndpointsForNetwork(getNetworkType('mainnet')).rpcEndpoint,
           },
           chainSymbolImageUrl:
             'https://raw.githubusercontent.com/router-protocol/router-widget/main/route-coin.svg',
           stakeCurrency: {
             coinDenom: ROUTER_DENOM.toUpperCase(),
             coinMinimalDenom: ROUTER_DENOM,
             coinDecimals: 18,
             coinGeckoId: ROUTER_DENOM,
             coinImageUrl:
               'https://raw.githubusercontent.com/router-protocol/router-widget/main/route-coin.svg',
           },
           walletUrl: 'https://wallet.keplr.app/chains/router',
           walletUrlForStaking: 'https://wallet.keplr.app/chains/router',
           bip44: {
             coinType: 60,
           },
           bech32Config: {
             bech32PrefixAccAddr: BECH32_ADDR_ACC_PREFIX,
             bech32PrefixAccPub: BECH32_ADDR_ACC_PREFIX + 'pub',
             bech32PrefixValAddr: BECH32_ADDR_VAL_PREFIX,
             bech32PrefixValPub: BECH32_PUBKEY_VAL_PREFIX,
             bech32PrefixConsAddr: BECH32_ADDR_CONS_PREFIX,
             bech32PrefixConsPub: BECH32_PUBKEY_CONS_PREFIX,
           },
           currencies: [
             {
               coinDenom: ROUTER_DENOM.toUpperCase(),
               coinMinimalDenom: ROUTER_DENOM,
               coinDecimals: 18,
               coinGeckoId: ROUTER_DENOM,
               coinImageUrl:
                 'https://raw.githubusercontent.com/router-protocol/router-widget/main/route-coin.svg',
             },
           ],
           feeCurrencies: [
             {
               coinDenom: ROUTER_DENOM.toUpperCase(),
               coinMinimalDenom: ROUTER_DENOM,
               coinDecimals: 18,
               coinGeckoId: ROUTER_DENOM,
               coinImageUrl:
                 'https://raw.githubusercontent.com/router-protocol/router-widget/main/route-coin.svg',
               gasPriceStep: {
                 low: 5000000000,
                 average: 25000000000,
                 high: 50000000000,
               },
             },
           ],
           features: ['eth-address-gen', 'eth-key-sign'],
         },
         [TestnetCosmosChainId.Router]: {
           rpc: getEndpointsForNetwork(getNetworkType('testnet')).tmEndpoint,
           rest: getEndpointsForNetwork(getNetworkType('testnet')).lcdEndpoint,
           rpcConfig: undefined,
           restConfig: undefined,
           chainId: getChainInfoForNetwork(Network.Testnet),
           chainName: 'Router Testnet',
           stakeCurrency: {
             coinDenom: ROUTER_DENOM.toUpperCase(),
             coinMinimalDenom: ROUTER_DENOM,
             coinDecimals: 18,
             coinGeckoId: ROUTER_DENOM,
           },
           walletUrl: 'https://devnet-hub.routerprotocol.com/staking',
           walletUrlForStaking: 'https://devnet-hub.routerprotocol.com/staking',
           bip44: {
             coinType: 60,
           },
           bech32Config: Bech32Address.defaultBech32Config('router'),
           currencies: [
             {
               coinDenom: ROUTER_DENOM.toUpperCase(),
               coinMinimalDenom: ROUTER_DENOM,
               coinDecimals: 18,
               coinGeckoId: ROUTER_DENOM,
             },
           ],
           feeCurrencies: [
             {
               coinDenom: ROUTER_DENOM.toUpperCase(),
               coinMinimalDenom: ROUTER_DENOM,
               coinDecimals: 18,
               coinGeckoId: ROUTER_DENOM,
               gasPriceStep: {
                 low: 5000000000,
                 average: 25000000000,
                 high: 40000000000,
               },
             },
           ],
           coinType: 60,
           features: [
             'ibc-transfer',
             'ibc-go',
             'eth-address-gen',
             'eth-key-sign',
           ],
         },
         [DevnetCosmosChainId.Router]: {
           rpc: getEndpointsForNetwork(getNetworkType('devnet')).tmEndpoint,
           rest: getEndpointsForNetwork(getNetworkType('devnet')).lcdEndpoint,
           rpcConfig: undefined,
           restConfig: undefined,
           chainId: getChainInfoForNetwork(Network.Devnet),
           chainName: 'Router-Devnet',
           stakeCurrency: {
             coinDenom: ROUTER_DENOM.toUpperCase(),
             coinMinimalDenom: ROUTER_DENOM,
             coinDecimals: 18,
             coinGeckoId: ROUTER_DENOM,
           },
           walletUrl: 'https://devnet-hub.routerprotocol.com/staking',
           walletUrlForStaking: 'https://devnet-hub.routerprotocol.com/staking',
           bip44: {
             coinType: 60,
           },
           bech32Config: Bech32Address.defaultBech32Config('router'),
           currencies: [
             {
               coinDenom: ROUTER_DENOM.toUpperCase(),
               coinMinimalDenom: ROUTER_DENOM,
               coinDecimals: 18,
               coinGeckoId: ROUTER_DENOM,
             },
           ],
           feeCurrencies: [
             {
               coinDenom: ROUTER_DENOM.toUpperCase(),
               coinMinimalDenom: ROUTER_DENOM,
               coinDecimals: 18,
               coinGeckoId: ROUTER_DENOM,
               gasPriceStep: {
                 low: 5000000000,
                 average: 25000000000,
                 high: 40000000000,
               },
             },
           ],
           coinType: 60,
           features: [
             'ibc-transfer',
             'ibc-go',
             'eth-address-gen',
             'eth-key-sign',
           ],
         },
       } as Record<string, any>;

export const getExperimentalChainConfigBasedOnChainId = (
  chainId: string
): any | undefined => experimentalChainsConfig[chainId];
