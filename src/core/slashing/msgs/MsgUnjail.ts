import { MsgUnjail as BaseMsgUnjail } from '@routerprotocol/chain-api/cosmos/slashing/v1beta1/tx_pb';
import { MsgBase } from '../../MsgBase';

export declare namespace MsgUnjail {
  export interface Params {
    validatorAddr: string;
  }
  export interface DirectSign {
    type: '/cosmos.slashing.v1beta1.MsgUnjail';
    message: BaseMsgUnjail;
  }

  export interface Data extends BaseMsgUnjail.AsObject {
    '@type': '/cosmos.slashing.v1beta1.MsgUnjail';
  }

  export interface Amino extends BaseMsgUnjail.AsObject {
    type: 'cosmos-sdk/MsgUnjail';
  }

  export interface Web3 extends BaseMsgUnjail.AsObject {
    '@type': '/cosmos.authz.v1beta1.MsgUnjail';
  }

  export type Proto = BaseMsgUnjail;
}

/**
 * @group Message
 */
export default class MsgUnjail extends MsgBase<
  MsgUnjail.Params,
  MsgUnjail.Data,
  MsgUnjail.Proto,
  MsgUnjail.Amino,
  MsgUnjail.DirectSign
> {
  static fromJSON(params: MsgUnjail.Params): MsgUnjail {
    return new MsgUnjail(params);
  }

  public toProto(): MsgUnjail.Proto {
    const { params } = this;

    const message = new BaseMsgUnjail();
    message.setValidatorAddr(params.validatorAddr);

    return message;
  }

  public toData(): MsgUnjail.Data {
    const proto = this.toProto();

    return {
      '@type': '/cosmos.slashing.v1beta1.MsgUnjail',
      ...proto.toObject(),
    };
  }

  public toAmino(): MsgUnjail.Amino {
    const proto = this.toProto();

    return {
      type: 'cosmos-sdk/MsgUnjail',
      ...proto.toObject(),
    };
  }

  public toWeb3(): MsgUnjail.Web3 {
    const amino = this.toAmino();
    const { type, ...rest } = amino;

    return ({
      '@type': '/cosmos.slashing.v1beta1.MsgUnjail',
      ...rest,
    } as unknown) as MsgUnjail.Web3;
  }

  public toDirectSign(): MsgUnjail.DirectSign {
    const proto = this.toProto();

    return {
      type: '/cosmos.slashing.v1beta1.MsgUnjail',
      message: proto,
    };
  }
}
