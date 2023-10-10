import { Query as MetastoreQuery } from '@routerprotocol/chain-api/routerchain/metastore/query_pb_service';

import {
    QueryAllMetaInfoRequest,
    QueryAllMetaInfoResponse,
    QueryAllMetaInfoResponseByChainAndAddress,
    QueryAllMetaInfoRequestByChainAndAddress
} from '@routerprotocol/chain-api/routerchain/metastore/query_pb';
import BaseConsumer from '../../BaseGrpcConsumer';
import { ChainGrpcMetastoreTransformer } from '../transformers';


export class ChainGrpcMetastoreApi extends BaseConsumer {

  async fetchAllMetastoreInfo() {
    const request = new QueryAllMetaInfoRequest();

    try {
      const response = await this.request<
      QueryAllMetaInfoRequest,
      QueryAllMetaInfoResponse,
        typeof MetastoreQuery.MetaInfoAll
      >(request, MetastoreQuery.MetaInfoAll);

      return ChainGrpcMetastoreTransformer.allMetastoreInfo(response);
    } catch (e) {
      //@ts-ignore
      throw new Error(e.message);
    }
  }

  // async fetchMetastoreInfo(chainId: string, dappAddress: string) {
  //   const request = new QueryAllMetaInfoRequestByChainAndAddress();
  //   request.setChainIds(chainId)
  //   request.setAddress(dappAddress)

  //   try {
  //     const response = await this.request<
  //     QueryAllMetaInfoRequestByChainAndAddress,
  //     QueryAllMetaInfoResponseByChainAndAddress,
  //       typeof MetastoreQuery.MetaInfoAllByChainAndAddress
  //     >(request, MetastoreQuery.MetaInfoAllByChainAndAddress);

  //     return response.getMetainfoList
  //     return ChainGrpcMetastoreTransformer.metastoreInfo(response);
  //   } catch (e) {
  //     //@ts-ignore
  //     throw new Error(e.message);
  //   }
  // }


}
