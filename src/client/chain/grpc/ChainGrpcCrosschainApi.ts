import { PageRequest } from '@routerprotocol/chain-api/cosmos/base/query/v1beta1/pagination_pb';
import {
  QueryAllBlockedCrosschainAckRequestRequest,
  QueryAllBlockedCrosschainAckRequestResponse,
  QueryAllBlockedCrosschainRequestRequest,
  QueryAllBlockedCrosschainRequestResponse,
  QueryAllCompletedCrosschainAckRequestRequest,
  QueryAllCompletedCrosschainAckRequestResponse,
  QueryAllCompletedCrosschainRequestRequest,
  QueryAllCompletedCrosschainRequestResponse,
  QueryAllCrosschainAckRequestConfirmRequest,
  QueryAllCrosschainAckRequestConfirmResponse,
  QueryAllCrosschainAckRequestRequest,
  QueryAllCrosschainAckRequestResponse,
  QueryAllCrosschainRequestConfirmRequest,
  QueryAllCrosschainRequestConfirmResponse,
  QueryAllCrosschainRequestRequest,
  QueryAllCrosschainRequestResponse,
  QueryAllExecutedCrosschainAckRequestRequest,
  QueryAllExecutedCrosschainAckRequestResponse,
  QueryAllExecutedCrosschainRequestRequest,
  QueryAllExecutedCrosschainRequestResponse,
  QueryAllExpiredCrosschainAckRequestRequest,
  QueryAllExpiredCrosschainAckRequestResponse,
  QueryAllExpiredCrosschainRequestRequest,
  QueryAllExpiredCrosschainRequestResponse,
  QueryAllFeesSettledCrosschainAckRequestRequest,
  QueryAllFeesSettledCrosschainAckRequestResponse,
  QueryAllFeesSettledCrosschainRequestRequest,
  QueryAllFeesSettledCrosschainRequestResponse,
  QueryAllNativeTransferedCrosschainRequestRequest,
  QueryAllNativeTransferedCrosschainRequestResponse,
  QueryAllReadyToExecuteCrosschainAckRequestRequest,
  QueryAllReadyToExecuteCrosschainAckRequestResponse,
  QueryAllReadyToExecuteCrosschainRequestRequest,
  QueryAllReadyToExecuteCrosschainRequestResponse,
  QueryAllValidCrosschainAckRequestRequest,
  QueryAllValidCrosschainAckRequestResponse,
  QueryAllValidCrosschainRequestRequest,
  QueryAllValidCrosschainRequestResponse,
  QueryGetBlockedCrosschainAckRequestRequest,
  QueryGetBlockedCrosschainAckRequestResponse,
  QueryGetBlockedCrosschainRequestRequest,
  QueryGetBlockedCrosschainRequestResponse,
  QueryGetCompletedCrosschainAckRequestRequest,
  QueryGetCompletedCrosschainAckRequestResponse,
  QueryGetCompletedCrosschainRequestRequest,
  QueryGetCompletedCrosschainRequestResponse,
  QueryGetCrosschainAckReceiptRequest,
  QueryGetCrosschainAckReceiptResponse,
  QueryGetCrosschainAckRequestConfirmRequest,
  QueryGetCrosschainAckRequestConfirmResponse,
  QueryGetCrosschainAckRequestRequest,
  QueryGetCrosschainAckRequestResponse,
  QueryGetCrosschainRequestConfirmRequest,
  QueryGetCrosschainRequestConfirmResponse,
  QueryGetCrosschainRequestRequest,
  QueryGetCrosschainRequestResponse,
  QueryGetExecutedCrosschainAckRequestRequest,
  QueryGetExecutedCrosschainAckRequestResponse,
  QueryGetExecutedCrosschainRequestRequest,
  QueryGetExecutedCrosschainRequestResponse,
  QueryGetExpiredCrosschainAckRequestRequest,
  QueryGetExpiredCrosschainAckRequestResponse,
  QueryGetExpiredCrosschainRequestRequest,
  QueryGetExpiredCrosschainRequestResponse,
  QueryGetFeesSettledCrosschainAckRequestRequest,
  QueryGetFeesSettledCrosschainAckRequestResponse,
  QueryGetFeesSettledCrosschainRequestRequest,
  QueryGetFeesSettledCrosschainRequestResponse,
  QueryGetNativeTransferedCrosschainRequestRequest,
  QueryGetNativeTransferedCrosschainRequestResponse,
  QueryGetReadyToExecuteCrosschainAckRequestRequest,
  QueryGetReadyToExecuteCrosschainAckRequestResponse,
  QueryGetReadyToExecuteCrosschainRequestRequest,
  QueryGetReadyToExecuteCrosschainRequestResponse,
  QueryGetValidCrosschainAckRequestRequest,
  QueryGetValidCrosschainAckRequestResponse,
  QueryGetValidCrosschainRequestRequest,
  QueryGetValidCrosschainRequestResponse
} from '@routerprotocol/chain-api/routerprotocol/routerchain/crosschain/query_pb';
import { Query as CrosschainQuery } from '@routerprotocol/chain-api/routerprotocol/routerchain/crosschain/query_pb_service';
import BaseConsumer from '../../BaseGrpcConsumer';

/**
 * The Crosschain module is responsible for handling inbound, outbound and crosstalk requests.
 * 
 * @group gRPC API
 * 
 * @example
 * To use Crosschain methods, initialise a {@link ChainGrpcCrosschainApi} object to with a gRPC endpoint. An endpoint can be retrieved by using {@link networkEndpoints}.
 * ```ts
 * const endpoint =  getEndpointsForNetwork(Network.Devnet).grpcEndpoint;
 * const client = new ChainGrpcCrosschainApi(endpoint);
 * const response = await client.fetchCrosschainRequests();
 * ```
 */
export class ChainGrpcCrosschainApi extends BaseConsumer {

  /**
   * Fetches all crosschain requests
   * @param pageRequestObject 
   * @returns 
   */
  async fetchCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllCrosschainRequestRequest();

    // TODO: refactor to common transform
    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllCrosschainRequestRequest,
        QueryAllCrosschainRequestResponse,
        typeof CrosschainQuery.CrosschainRequestAll
      >(request, CrosschainQuery.CrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * Fetches all ready to execute crosschain requests
   * @param pageRequestObject 
   * @returns 
   */
  async fetchReadyToExecuteCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllReadyToExecuteCrosschainRequestRequest();

    // TODO: refactor to common transform
    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllReadyToExecuteCrosschainRequestRequest,
        QueryAllReadyToExecuteCrosschainRequestResponse,
        typeof CrosschainQuery.ReadyToExecuteCrosschainRequestAll
      >(request, CrosschainQuery.ReadyToExecuteCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
 * Fetches all ready to execute crosschain ack requests
 * @param pageRequestObject 
 * @returns 
 */
  async fetchReadyToExecuteCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllReadyToExecuteCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllReadyToExecuteCrosschainAckRequestRequest,
        QueryAllReadyToExecuteCrosschainAckRequestResponse,
        typeof CrosschainQuery.ReadyToExecuteCrosschainAckRequestAll
      >(request, CrosschainQuery.ReadyToExecuteCrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * Fetches all validated crosschain requests
  * @param pageRequestObject 
  * @returns 
  */
  async fetchValidatedCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllValidCrosschainRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllValidCrosschainRequestRequest,
        QueryAllValidCrosschainRequestResponse,
        typeof CrosschainQuery.ValidCrosschainRequestAll
      >(request, CrosschainQuery.ValidCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * Fetches all validated crosschain ack requests
   * @param pageRequestObject 
   * @returns 
   */
  async fetchValidatedCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllValidCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllValidCrosschainAckRequestRequest,
        QueryAllValidCrosschainAckRequestResponse,
        typeof CrosschainQuery.ValidCrosschainAckRequestAll
      >(request, CrosschainQuery.ValidCrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * Fetches all native transfered crosschain requests
  * @param pageRequestObject 
  * @returns 
  */
  async fetchNativeTransferedCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllNativeTransferedCrosschainRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllNativeTransferedCrosschainRequestRequest,
        QueryAllNativeTransferedCrosschainRequestResponse,
        typeof CrosschainQuery.NativeTransferedCrosschainRequestAll
      >(request, CrosschainQuery.NativeTransferedCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* Fetches all blocked crosschain requests
* @param pageRequestObject 
* @returns 
*/
  async fetchBlockedCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllBlockedCrosschainRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllBlockedCrosschainRequestRequest,
        QueryAllBlockedCrosschainRequestResponse,
        typeof CrosschainQuery.BlockedCrosschainRequestAll
      >(request, CrosschainQuery.BlockedCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* Fetches all blocked crosschain ack requests
* @param pageRequestObject 
* @returns 
*/
  async fetchBlockedCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllBlockedCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllBlockedCrosschainAckRequestRequest,
        QueryAllBlockedCrosschainAckRequestResponse,
        typeof CrosschainQuery.BlockedCrosschainAckRequestAll
      >(request, CrosschainQuery.BlockedCrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* Fetches all executed crosschain requests
* @param pageRequestObject 
* @returns 
*/
  async fetchExecutedCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllExecutedCrosschainRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllExecutedCrosschainRequestRequest,
        QueryAllExecutedCrosschainRequestResponse,
        typeof CrosschainQuery.ExecutedCrosschainRequestAll
      >(request, CrosschainQuery.ExecutedCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* Fetches all executed crosschain ack requests
* @param pageRequestObject 
* @returns 
*/
  async fetchExecutedCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllExecutedCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllExecutedCrosschainAckRequestRequest,
        QueryAllExecutedCrosschainAckRequestResponse,
        typeof CrosschainQuery.ExecutedCrosschainAckRequestAll
      >(request, CrosschainQuery.ExecutedCrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* Fetches all completed crosschain requests
* @param pageRequestObject 
* @returns 
*/
  async fetchCompletedCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllCompletedCrosschainRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllCompletedCrosschainRequestRequest,
        QueryAllCompletedCrosschainRequestResponse,
        typeof CrosschainQuery.CompletedCrosschainRequestAll
      >(request, CrosschainQuery.CompletedCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * Fetches all executed crosschain ack requests
  * @param pageRequestObject 
  * @returns 
  */
  async fetchCompletedCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllCompletedCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllCompletedCrosschainAckRequestRequest,
        QueryAllCompletedCrosschainAckRequestResponse,
        typeof CrosschainQuery.CompletedCrosschainAckRequestAll
      >(request, CrosschainQuery.CompletedCrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* Fetches all fee settled crosschain requests
* @param pageRequestObject 
* @returns 
*/
  async fetchFeeSettledCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllFeesSettledCrosschainRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllFeesSettledCrosschainRequestRequest,
        QueryAllFeesSettledCrosschainRequestResponse,
        typeof CrosschainQuery.FeesSettledCrosschainRequestAll
      >(request, CrosschainQuery.FeesSettledCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * Fetches all executed crosschain ack requests
  * @param pageRequestObject 
  * @returns 
  */
  async fetchFeeSettledCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllFeesSettledCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllFeesSettledCrosschainAckRequestRequest,
        QueryAllFeesSettledCrosschainAckRequestResponse,
        typeof CrosschainQuery.FeesSettledCrosschainAckRequestAll
      >(request, CrosschainQuery.FeesSettledCrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* Fetches all expired crosschain requests
* @param pageRequestObject 
* @returns 
*/
  async fetchExpiredCrosschainRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllExpiredCrosschainRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllExpiredCrosschainRequestRequest,
        QueryAllExpiredCrosschainRequestResponse,
        typeof CrosschainQuery.ExpiredCrosschainRequestAll
      >(request, CrosschainQuery.ExpiredCrosschainRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * Fetches all expired crosschain ack requests
  * @param pageRequestObject 
  * @returns 
  */
  async fetchExpiredCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllExpiredCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllExpiredCrosschainAckRequestRequest,
        QueryAllExpiredCrosschainAckRequestResponse,
        typeof CrosschainQuery.ExpiredCrosschainAckRequestAll
      >(request, CrosschainQuery.ExpiredCrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * Fetch crosschain request confirmations
   * @param sourceChainId 
   * @param requestIdentifier 
   * @param claimHash 
   * @param pageRequestObject 
   * @returns 
   */
  async fetchCrosschainRequestConfirmations(sourceChainId: string, requestIdentifier: number, claimHash: Uint8Array | string, pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllCrosschainRequestConfirmRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);
    request.setClaimhash(claimHash);

    // TODO: refactor to common transform
    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllCrosschainRequestConfirmRequest,
        QueryAllCrosschainRequestConfirmResponse,
        typeof CrosschainQuery.CrosschainRequestConfirmAll
      >(request, CrosschainQuery.CrosschainRequestConfirmAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * Fetch crosschain ack requests
   * @param pageRequestObject 
   * @returns 
   */
  async fetchCrosschainAckRequests(pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllCrosschainAckRequestRequest();

    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }


    try {
      const response = await this.request<
        QueryAllCrosschainAckRequestRequest,
        QueryAllCrosschainAckRequestResponse,
        typeof CrosschainQuery.CrosschainAckRequestAll
      >(request, CrosschainQuery.CrosschainAckRequestAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * Fetch crosschain ack request confirmations
   * @param sourceChainId 
   * @param requestIdentifier 
   * @param claimHash 
   * @param pageRequestObject 
   * @returns 
   */
  async fetchCrosschainAckRequestConfirmations(sourceChainId: string, requestIdentifier: number, claimHash: Uint8Array | string, pageRequestObject?: PageRequest.AsObject) {
    const request = new QueryAllCrosschainAckRequestConfirmRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);
    request.setClaimhash(claimHash);

    // TODO: refactor to common transform
    if (pageRequestObject != null) {
      let pageRequest = new PageRequest();
      pageRequest.setKey(pageRequestObject.key)
      pageRequest.setOffset(pageRequestObject.offset)
      pageRequest.setLimit(pageRequestObject.offset)
      pageRequest.setCountTotal(pageRequestObject.countTotal)
      pageRequest.setReverse(pageRequestObject.reverse)
      request.setPagination(pageRequest);
    }

    try {
      const response = await this.request<
        QueryAllCrosschainAckRequestConfirmRequest,
        QueryAllCrosschainAckRequestConfirmResponse,
        typeof CrosschainQuery.CrosschainAckRequestConfirmAll
      >(request, CrosschainQuery.CrosschainAckRequestConfirmAll);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * Fetch crosschain request confirmation
   * @param sourceChainId 
   * @param requestIdentifier 
   * @param claimHash 
   * @param orchestrator 
   * @returns 
   */
  async fetchCrosschainRequestConfirmation(sourceChainId: string, requestIdentifier: number, claimHash: Uint8Array | string, orchestrator: string) {
    const request = new QueryGetCrosschainRequestConfirmRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);
    request.setClaimhash(claimHash);
    request.setOrchestrator(orchestrator);

    try {
      const response = await this.request<
        QueryGetCrosschainRequestConfirmRequest,
        QueryGetCrosschainRequestConfirmResponse,
        typeof CrosschainQuery.CrosschainRequestConfirm
      >(request, CrosschainQuery.CrosschainRequestConfirm);

      return response.toObject()
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * Fetch crosschain ack request confirmation
   * @param sourceChainId 
   * @param requestIdentifier 
   * @param claimHash 
   * @param orchestrator 
   * @returns 
   */
  async fetchCrosschainAckRequestConfirmation(sourceChainId: string, requestIdentifier: number, claimHash: Uint8Array | string, orchestrator: string) {
    const request = new QueryGetCrosschainAckRequestConfirmRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);
    request.setClaimhash(claimHash);
    request.setOrchestrator(orchestrator);

    try {
      const response = await this.request<
        QueryGetCrosschainAckRequestConfirmRequest,
        QueryGetCrosschainAckRequestConfirmResponse,
        typeof CrosschainQuery.CrosschainAckRequestConfirm
      >(request, CrosschainQuery.CrosschainAckRequestConfirm);

      return response.toObject()
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * Fetches a ready to execute crosschain requests
  * @param pageRequestObject 
  * @returns 
  */
  async fetchReadyToExecuteCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetReadyToExecuteCrosschainRequestRequest();

    request.setRequestidentifier(requestIdentifier);
    request.setSourcechainid(sourceChainId);

    try {
      const response = await this.request<
        QueryGetReadyToExecuteCrosschainRequestRequest,
        QueryGetReadyToExecuteCrosschainRequestResponse,
        typeof CrosschainQuery.ReadyToExecuteCrosschainRequest
      >(request, CrosschainQuery.ReadyToExecuteCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * Fetches a ready to execute crosschain ack requests
  * @param pageRequestObject 
  * @returns 
  */
  async fetchReadyToExecuteCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetReadyToExecuteCrosschainAckRequestRequest();

    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetReadyToExecuteCrosschainAckRequestRequest,
        QueryGetReadyToExecuteCrosschainAckRequestResponse,
        typeof CrosschainQuery.ReadyToExecuteCrosschainAckRequest
      >(request, CrosschainQuery.ReadyToExecuteCrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * fetch CrosschainAckRequestConfirmation
   * 
   * @param sourceChainId 
   * @param requestIdentifier 
   * @returns 
   */
  async fetchCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetCrosschainAckRequestConfirmRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetCrosschainAckRequestRequest,
        QueryGetCrosschainAckRequestResponse,
        typeof CrosschainQuery.CrosschainAckRequest
      >(request, CrosschainQuery.CrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * fetch CrosschainRequest
   * 
   * @param sourceChainId 
   * @param requestIdentifier 
   * @returns 
   */
  async fetchCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetCrosschainRequestRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetCrosschainRequestRequest,
        QueryGetCrosschainRequestResponse,
        typeof CrosschainQuery.CrosschainRequest
      >(request, CrosschainQuery.CrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * fetch CrosschainAckReceipt
   * 
   * @param ackReceiptSrcChainId 
   * @param ackReceiptIdentifier 
   * @returns 
   */
  async fetchCrosschainAckReceipt(ackReceiptSrcChainId: string, ackReceiptIdentifier: number) {
    const request = new QueryGetCrosschainAckReceiptRequest();
    request.setAckreceiptsrcchainid(ackReceiptSrcChainId);
    request.setAckreceiptidentifier(ackReceiptIdentifier);

    try {
      const response = await this.request<
        QueryGetCrosschainAckReceiptRequest,
        QueryGetCrosschainAckReceiptResponse,
        typeof CrosschainQuery.CrosschainAckReceipt
      >(request, CrosschainQuery.CrosschainAckReceipt);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * fetch validated CrosschainRequest
   * 
   * @param sourceChainId 
   * @param requestIdentifier 
   * @returns 
   */
  async fetchValidatedCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetValidCrosschainRequestRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetValidCrosschainRequestRequest,
        QueryGetValidCrosschainRequestResponse,
        typeof CrosschainQuery.ValidCrosschainRequest
      >(request, CrosschainQuery.ValidCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
   * fetch validated CrosschainAckRequest
   * 
   * @param sourceChainId 
   * @param requestIdentifier 
   * @returns 
   */
  async fetchValidatedCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetValidCrosschainAckRequestRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetValidCrosschainAckRequestRequest,
        QueryGetValidCrosschainAckRequestResponse,
        typeof CrosschainQuery.ValidCrosschainAckRequest
      >(request, CrosschainQuery.ValidCrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
 * fetch native transfered CrosschainRequest
 * 
 * @param sourceChainId 
 * @param requestIdentifier 
 * @returns 
 */
  async fetchNativeTransferedCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetNativeTransferedCrosschainRequestRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetNativeTransferedCrosschainRequestRequest,
        QueryGetNativeTransferedCrosschainRequestResponse,
        typeof CrosschainQuery.NativeTransferedCrosschainRequest
      >(request, CrosschainQuery.NativeTransferedCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* fetch blocked CrosschainRequest
* 
* @param sourceChainId 
* @param requestIdentifier 
* @returns 
*/
  async fetchBlockedCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetBlockedCrosschainRequestRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetBlockedCrosschainRequestRequest,
        QueryGetBlockedCrosschainRequestResponse,
        typeof CrosschainQuery.BlockedCrosschainRequest
      >(request, CrosschainQuery.BlockedCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * fetch blocked CrosschainAckRequest
  * 
  * @param sourceChainId 
  * @param requestIdentifier 
  * @returns 
  */
  async fetchBlockedCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetBlockedCrosschainAckRequestRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetBlockedCrosschainAckRequestRequest,
        QueryGetBlockedCrosschainAckRequestResponse,
        typeof CrosschainQuery.BlockedCrosschainAckRequest
      >(request, CrosschainQuery.BlockedCrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* fetch executed CrosschainRequest
* 
* @param sourceChainId 
* @param requestIdentifier 
* @returns 
*/
  async fetchExecutedCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetExecutedCrosschainRequestRequest
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetExecutedCrosschainRequestRequest,
        QueryGetExecutedCrosschainRequestResponse,
        typeof CrosschainQuery.ExecutedCrosschainRequest
      >(request, CrosschainQuery.ExecutedCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * fetch executed CrosschainAckRequest
  * 
  * @param sourceChainId 
  * @param requestIdentifier 
  * @returns 
  */
  async fetchExecutedCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetExecutedCrosschainAckRequestRequest
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetExecutedCrosschainAckRequestRequest,
        QueryGetExecutedCrosschainAckRequestResponse,
        typeof CrosschainQuery.ExecutedCrosschainAckRequest
      >(request, CrosschainQuery.ExecutedCrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* fetch fee settled CrosschainRequest
* 
* @param sourceChainId 
* @param requestIdentifier 
* @returns 
*/
  async fetchFeeSettledCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetFeesSettledCrosschainRequestRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetFeesSettledCrosschainRequestRequest,
        QueryGetFeesSettledCrosschainRequestResponse,
        typeof CrosschainQuery.FeesSettledCrosschainRequest
      >(request, CrosschainQuery.FeesSettledCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * fetch fee settled CrosschainAckRequest
  * 
  * @param sourceChainId 
  * @param requestIdentifier 
  * @returns 
  */
  async fetchFeeSettledCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetFeesSettledCrosschainAckRequestRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetFeesSettledCrosschainAckRequestRequest,
        QueryGetFeesSettledCrosschainAckRequestResponse,
        typeof CrosschainQuery.FeesSettledCrosschainAckRequest
      >(request, CrosschainQuery.FeesSettledCrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
* fetch completed CrosschainRequest
* 
* @param sourceChainId 
* @param requestIdentifier 
* @returns 
*/
  async fetchCompletedCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetCompletedCrosschainRequestRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetCompletedCrosschainRequestRequest,
        QueryGetCompletedCrosschainRequestResponse,
        typeof CrosschainQuery.CompletedCrosschainRequest
      >(request, CrosschainQuery.CompletedCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * fetch fee settled CrosschainAckRequest
  * 
  * @param sourceChainId 
  * @param requestIdentifier 
  * @returns 
  */
  async fetchCompletedCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetCompletedCrosschainAckRequestRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetCompletedCrosschainAckRequestRequest,
        QueryGetCompletedCrosschainAckRequestResponse,
        typeof CrosschainQuery.CompletedCrosschainAckRequest
      >(request, CrosschainQuery.CompletedCrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * fetch expired CrosschainRequest
  * 
  * @param sourceChainId 
  * @param requestIdentifier 
  * @returns 
  */
  async fetchExpiredCrosschainRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetExpiredCrosschainRequestRequest();
    request.setSourcechainid(sourceChainId);
    request.setRequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetExpiredCrosschainRequestRequest,
        QueryGetExpiredCrosschainRequestResponse,
        typeof CrosschainQuery.ExpiredCrosschainRequest
      >(request, CrosschainQuery.ExpiredCrosschainRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  /**
  * fetch expired CrosschainAckRequest
  * 
  * @param sourceChainId 
  * @param requestIdentifier 
  * @returns 
  */
  async fetchExpiredCrosschainAckRequest(sourceChainId: string, requestIdentifier: number) {
    const request = new QueryGetExpiredCrosschainAckRequestRequest();
    request.setAcksrcchainid(sourceChainId);
    request.setAckrequestidentifier(requestIdentifier);

    try {
      const response = await this.request<
        QueryGetExpiredCrosschainAckRequestRequest,
        QueryGetExpiredCrosschainAckRequestResponse,
        typeof CrosschainQuery.ExpiredCrosschainAckRequest
      >(request, CrosschainQuery.ExpiredCrosschainAckRequest);

      return response.toObject();
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

}
