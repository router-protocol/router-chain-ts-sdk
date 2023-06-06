import {
  getEndpointsForNetwork,
  getNetworkType,
  Network,
} from '../../networks';
import { fromBase64ToString } from '../../utils';
import {
  latestBlockQuery,
  latestTransactionsOfAddressQuery,
  latestTransactionsQuery,
  latestCrosschainsQuery,
  searchSpecificCrosschainChainIdQuery,
  searchSpecificCrosschainDestChainIdQuery,
  searchSpecificCrosschainQuery,
  searchSpecificCrosschainSrcChainIdQuery,
  specificBlockQuery,
  specificCrosschainQuery,
  specificTransactionQuery,
  inboundOutboundQuery,
  latestFundDepositQuery,
  searchSpecificFundDepositQuery,
  searchSpecificFundDepositChainIdQuery,
  searchSpecificFundDepositSrcChainIdQuery,
  searchSpecificFundDepositDestChainIdQuery,
  specificFundDepositQuery,
  latestFundPaidQuery,
  searchSpecificFundPaidQuery,
  searchSpecificFundPaidSrcChainIdQuery,
  specificFundPaidQuery,
} from '../queries';
import {
  BlockType,
  CrosschainType,
  FundDepositType,
  FundPaidType,
  InboundOutboundMapType,
  PaginatedBlock,
  PaginatedCrosschain,
  PaginatedFundDeposit,
  PaginatedFundPaid,
  PaginatedTransaction,
  TransactionType,
} from '../types';
import { gqlFetcher, restFetcher } from '../utils';

/**
 * @group Router Scan Utility
 */

export class RouterExplorer {
         public readonly chainEnvironment: Network;
         public readonly applicationAddress: string | null;

         constructor(
           chainEnvironment: string,
           applicationAddress: string = ''
         ) {
           this.chainEnvironment = getNetworkType(chainEnvironment);
           this.applicationAddress = applicationAddress;
         }

         //Fetch latest blocks from explorer db

         /**
          * Fetches latest Blocks
          * @param {string} timeRange Time Range
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedBlock}
          * @throws {Error}
          */
         public async getLatestBlocks(
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedBlock: PaginatedBlock }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               latestBlockQuery,
               {
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestBlocks | ${e}`);
           }
         }

         /**
          * Fetches specific Block
          * @param {string} height BlockHeight
          * @return {BlockType}
          * @throws {Error}
          */
         public async getBlockByHeight(
           height: Number
         ): Promise<{ block: BlockType }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               specificBlockQuery,
               {
                 height: height,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestBlocks | ${e}`);
           }
         }
         /**
          * Fetches latest Transactions
          * @param {string} timeRange Time Range
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedTransaction}
          * @throws {Error}
          */
         public async getLatestTransactions(
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedTransaction: PaginatedTransaction }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               this.applicationAddress
                 ? latestTransactionsOfAddressQuery
                 : latestTransactionsQuery,
               {
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestTransactions | ${e}`);
           }
         }
         /**
          * Fetches latest Transactions for a specific address
          * @param {string} address Address
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedTransaction}
          * @throws {Error}
          */
         public async getLatestTransactionsByAddress(
           address: String,
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedTransaction: PaginatedTransaction }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               latestTransactionsOfAddressQuery,
               {
                 timeRange,
                 address: address,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestTransactions | ${e}`);
           }
         }
         /**
          * Fetches specific Transaction
          * @param {string} hash
          * @return {Transaction}
          * @throws {Error}
          */
         public async getTransactionByHash(
           hash: String
         ): Promise<{ transaction: TransactionType }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               specificTransactionQuery,
               {
                 hash: hash,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestTransactions | ${e}`);
           }
         }

         /**
          * Fetches latest Crosschains
          * @param {string} timeRange Time Range
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedCrosschain}
          * @throws {Error}
          */

         public async getLatestCrosschains(
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedCrosschain: PaginatedCrosschain }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               latestCrosschainsQuery,
               {
                 address: this.applicationAddress,
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestCrosschains | ${e}`);
           }
         }
         /**
          * Fetches specific Crosschains
          * @param {string} timeRange Time Range
          * @param {string} searchTerm Source Sender or Source Transaction Hash
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedCrosschain}
          * @throws {Error}
          */
         public async getCrosschainBySearch(
           searchTerm: String,
           srcChainIds: string[] = [],
           dstChainIds: string[] = [],
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedCrosschain: PaginatedCrosschain }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               srcChainIds.length === 0 && dstChainIds.length === 0
                 ? searchSpecificCrosschainQuery
                 : srcChainIds.length > 0 && dstChainIds.length > 0
                 ? searchSpecificCrosschainChainIdQuery
                 : srcChainIds.length > 0
                 ? searchSpecificCrosschainSrcChainIdQuery
                 : dstChainIds.length > 0
                 ? searchSpecificCrosschainDestChainIdQuery
                 : searchSpecificCrosschainQuery,
               {
                 sourceChainIds: srcChainIds,
                 destinationChainIds: dstChainIds,
                 searchTerm: searchTerm,
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getCrosschainBySearch | ${e}`);
           }
         }
         /**
          * Fetches specific Crosschain
          * @param {string} formAttestationId
          * @return {CrosschainType}
          * @throws {Error}
          */
         public async getCrosschainByAttestationId(
           formAttestationId: String
         ): Promise<{ crosschain: CrosschainType }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               specificCrosschainQuery,
               {
                 formAttestationId: formAttestationId,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getCrosschainByAttestationId | ${e}`);
           }
         }
         /**
          * Fetches latest Fund Deposits
          * @param {string} timeRange Time Range
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedFundDeposit}
          * @throws {Error}
          */

         public async getLatestFundDeposits(
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedFundDeposit: PaginatedFundDeposit }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               latestFundDepositQuery,
               {
                 address: this.applicationAddress,
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestFundDeposits | ${e}`);
           }
         }
         /**
          * Fetches specific Fund Deposits
          * @param {string} timeRange Time Range
          * @param {string} searchTerm srcTxHash or contract or srcToken or recipient or depositor
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedFundDeposit}
          * @throws {Error}
          */
         public async getFundDepositBySearch(
           searchTerm: String,
           srcChainIds: string[] = [],
           dstChainIds: string[] = [],
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedFundDeposit: PaginatedFundDeposit }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               srcChainIds.length === 0 && dstChainIds.length === 0
                 ? searchSpecificFundDepositQuery
                 : srcChainIds.length > 0 && dstChainIds.length > 0
                 ? searchSpecificFundDepositChainIdQuery
                 : srcChainIds.length > 0
                 ? searchSpecificFundDepositSrcChainIdQuery
                 : dstChainIds.length > 0
                 ? searchSpecificFundDepositDestChainIdQuery
                 : searchSpecificFundDepositQuery,
               {
                 sourceChainIds: srcChainIds,
                 destinationChainIds: dstChainIds,
                 searchTerm: searchTerm,
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getCrosschainBySearch | ${e}`);
           }
         }
         /**
          * Fetches specific Fund Deposit
          * @param {string} id
          * @return {FundDepositType}
          * @throws {Error}
          */
         public async getFundDepositById(
           id: String
         ): Promise<{ fundDeposit: FundDepositType }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               specificFundDepositQuery,
               {
                 id,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getFundDepositById | ${e}`);
           }
         }
         /**
          * Fetches latest Fund Paid
          * @param {string} timeRange Time Range
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedFundPaid}
          * @throws {Error}
          */

         public async getLatestFundPaids(
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedFundPaid: PaginatedFundPaid }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               latestFundPaidQuery,
               {
                 address: this.applicationAddress,
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getLatestFundPaids | ${e}`);
           }
         }
         /**
          * Fetches specific Fund Paids
          * @param {string} timeRange Time Range
          * @param {string} searchTerm srcTxHash or contract or srcToken or recipient or depositor
          * @param {string} limit Page Limit
          * @param {string} offset Page Number
          * @return {PaginatedFundPaid}
          * @throws {Error}
          */
         public async getFundPaidBySearch(
           searchTerm: String,
           srcChainIds: string[] = [],
           timeRange: number[] = [],
           limit: Number = 10,
           offset: Number = 1
         ): Promise<{ paginatedFundPaid: PaginatedFundPaid }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               srcChainIds.length === 0
                 ? searchSpecificFundPaidQuery
                 : srcChainIds.length > 0
                 ? searchSpecificFundPaidSrcChainIdQuery
                 : searchSpecificFundPaidQuery,
               {
                 sourceChainIds: srcChainIds,
                 searchTerm: searchTerm,
                 timeRange,
                 limit: limit,
                 offset: offset,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getFundPaidBySearch | ${e}`);
           }
         }
         /**
          * Fetches specific Fund Paid
          * @param {string} id
          * @return {FundDepositType}
          * @throws {Error}
          */
         public async getFundPaidById(
           id: String
         ): Promise<{ fundPaid: FundPaidType }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               specificFundPaidQuery,
               {
                 id,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getFundPaidById | ${e}`);
           }
         }
         /**
          * Fetches specific Transaction
          * @param {string} middlewareContract
          * @param {string} inboundId
          * @return {InboundOutboundMapType[]}
          * @throws {Error}
          */
         public async getOutboundsForInbound(
           middlewareContract: String,
           inboundId: String
         ): Promise<{ outboundToInboundMap: InboundOutboundMapType[] }> {
           try {
             const data = await gqlFetcher(
               this.chainEnvironment,
               inboundOutboundQuery,
               {
                 middlewareContract,
                 inboundId,
               }
             );
             return data;
           } catch (e) {
             throw new Error(`Error | getOutboundsForInbound | ${e}`);
           }
         }

         /**
          * Fetches specific Transaction
          * @param {string} sourceChainId
          * @param {string} nonce
          * @return {InboundOutboundMapType[]}
          * @throws {Error}
          */
         public async getExecutedBlockEventsForCrosschain(
           sourceChainId: string,
           nonce: string
         ): Promise<any> {
           try {
             //80001-95
             const crosschainId = sourceChainId + '-' + nonce;
             const crosschainData = await this.getCrosschainByAttestationId(
               crosschainId
             );
             //const contractAddress = crosschainData.crosschain.requestPacket.handler;
             const executionBlock = crosschainData.crosschain.eventHistory.find(
               historyEventHistory =>
                 historyEventHistory.name ===
                 'routerprotocol.routerchain.crosschain.EventCrosschainExecuted'
             )?.height;
             if (!executionBlock) {
               throw new Error(
                 `Error | getExecutedBlockEventsForCrosschain | EventCrosschainExecuted is not present the crosschain record.`
               );
             }
             const tmRpc = getEndpointsForNetwork(this.chainEnvironment)
               .tmEndpoint;
             const blockData = await restFetcher(
               `${tmRpc}/block_results?height=${executionBlock}`
             );
             return blockData.result.end_block_events.map((eventData: any) => {
               eventData.attributes = eventData.attributes.map(
                 (attribute: any) => {
                   attribute.key = fromBase64ToString(attribute.key);
                   attribute.value = fromBase64ToString(attribute.value);
                   return attribute;
                 }
               );
               return eventData;
             });
           } catch (e) {
             throw new Error(
               `Error | getExecutedBlockEventsForCrosschain | ${e}`
             );
           }
         }
       }
