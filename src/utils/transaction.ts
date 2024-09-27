import { fromRpcSig, ecrecover } from 'ethereumjs-util';
import { publicKeyConvert } from 'secp256k1';
import { TypedDataUtils, SignTypedDataVersion } from '@metamask/eth-sig-util';
import axios from 'axios';

export const recoverTypedSignaturePubKey = (
         data: any,
         signature: string
       ): string => {
         const compressedPubKeyPrefix = Buffer.from('04', 'hex');
         const message = TypedDataUtils.eip712Hash(
           data,
           SignTypedDataVersion.V4
         );
         const sigParams = fromRpcSig(signature);
         const publicKey = ecrecover(
           message,
           sigParams.v,
           sigParams.r,
           sigParams.s
         );
         const prefixedKey = Buffer.concat([compressedPubKeyPrefix, publicKey]);
         const compressedKey = Buffer.from(publicKeyConvert(prefixedKey));
         return `0x${compressedKey.toString('hex')}`;
       };

export const recoverTypedSignaturePubKeyPf = async (
  data: any,
  signature: string,
  pfUrl: string
) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const fnData = {
    signature,
    data,
  };

  const pubKey = await axios.post(pfUrl, fnData, { headers });
  return pubKey.data;
};
