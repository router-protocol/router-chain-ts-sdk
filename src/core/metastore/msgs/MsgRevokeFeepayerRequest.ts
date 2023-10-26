import { MsgRevokeFeepayerRequest as BaseMsgRevokeFeepayerRequest } from '@routerprotocol/chain-api/routerchain/metastore/tx_pb';
import snakeCaseKeys from 'snakecase-keys';
import { MsgBase } from '../../MsgBase';

export declare namespace MsgRevokeFeepayerRequest {
  export interface Params {
    feepayer: string;
    chainid: string;
    dappaddress: string;
  }

  export interface DirectSign {
    type: '/routerprotocol.routerchain.metastore.MsgRevokeFeepayerRequest';
    message: BaseMsgRevokeFeepayerRequest;
  }

  export interface Data extends BaseMsgRevokeFeepayerRequest.AsObject {
    '@type': '/routerprotocol.routerchain.metastore.MsgRevokeFeepayerRequest';
  }

  export interface Amino extends BaseMsgRevokeFeepayerRequest.AsObject {
    type: 'metastore/ApproveFeepayerRequest';
  }

  export interface Web3 extends BaseMsgRevokeFeepayerRequest.AsObject {
    '@type': '/routerprotocol.routerchain.metastore.MsgRevokeFeepayerRequest';
  }

  export type Proto = BaseMsgRevokeFeepayerRequest;
}

/**
 * @group Message
 */
export default class MsgRevokeFeepayerRequest extends MsgBase<
  MsgRevokeFeepayerRequest.Params,
  MsgRevokeFeepayerRequest.Data,
  MsgRevokeFeepayerRequest.Proto,
  MsgRevokeFeepayerRequest.Amino,
  MsgRevokeFeepayerRequest.DirectSign
> {
  static fromJSON(
    params: MsgRevokeFeepayerRequest.Params
  ): MsgRevokeFeepayerRequest {
    return new MsgRevokeFeepayerRequest(params);
  }

  public toProto(): MsgRevokeFeepayerRequest.Proto {
    const { params } = this;

    const message = new BaseMsgRevokeFeepayerRequest();
    message.setFeepayer(params.feepayer);
    message.setChainid(params.chainid);
    message.setDappaddress(params.dappaddress);

    return message;
  }

  public toData(): MsgRevokeFeepayerRequest.Data {
    const proto = this.toProto();

    return {
      '@type': '/routerprotocol.routerchain.metastore.MsgRevokeFeepayerRequest',
      ...proto.toObject(),
    };
  }

  public toAmino(): MsgRevokeFeepayerRequest.Amino {
    const proto = this.toProto();
    const message = {
      ...snakeCaseKeys(proto.toObject()),
    };
    return ({
      type: 'metastore/ApproveFeepayerRequest',
      ...message,
    } as unknown) as MsgRevokeFeepayerRequest.Amino;
  }

  public toWeb3(): MsgRevokeFeepayerRequest.Web3 {
    const amino = this.toAmino();
    const { type, ...rest } = amino;

    return ({
      '@type': '/routerprotocol.routerchain.metastore.MsgRevokeFeepayerRequest',
      ...rest,
    } as unknown) as MsgRevokeFeepayerRequest.Web3;
  }

  public toDirectSign(): MsgRevokeFeepayerRequest.DirectSign {
    const proto = this.toProto();

    return {
      type: '/routerprotocol.routerchain.metastore.MsgRevokeFeepayerRequest',
      message: proto,
    };
  }
}
