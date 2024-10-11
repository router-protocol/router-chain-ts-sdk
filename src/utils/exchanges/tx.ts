import { PrivateKey } from '../../classes';
import { ChainRestAuthApi } from '../../client';
import { MsgSend } from '../../core';
import {
  getChainInfoForNetwork,
  getEndpointsForNetwork,
  Network,
} from '../../networks';
import { createTransaction } from '../../tx-ts';
import { ROUTER_DENOM } from '../constants';

export const buildAndSignMsgSendTx = async ({
  privateKey,
  senderAddress,
  receiverAddress,
  amount,
  networkType = Network.Mainnet,
}: {
  privateKey: string;
  senderAddress: string;
  receiverAddress: string;
  amount: string;
  networkType?: Network;
}) => {
  const network = getEndpointsForNetwork(networkType);
  const senderAccount = await new ChainRestAuthApi(
    network.lcdEndpoint
  ).fetchAccount(senderAddress);
  const msgSendmsg = MsgSend.fromJSON({
    amount: {
      denom: ROUTER_DENOM,
      amount: amount,
    },
    srcRouterAddress: senderAddress,
    dstRouterAddress: receiverAddress,
  });

  const { txRaw, signBytes } = createTransaction({
    message: msgSendmsg.toDirectSign(),
    pubKey: PrivateKey.fromPrivateKey(privateKey)
      .toPublicKey()
      .toBase64(),
    sequence: parseInt(senderAccount.account.base_account.sequence, 10),
    accountNumber: parseInt(
      senderAccount.account.base_account.account_number,
      10
    ),
    chainId: getChainInfoForNetwork(Network.Mainnet).chainId,
  });
  const pkey = PrivateKey.fromPrivateKey(privateKey);
  const signature = await pkey.sign(signBytes);
  txRaw.setSignaturesList([signature]);
  return txRaw;
};
