import { Wallet } from 'ethers';
import { PrivateKey } from '../../classes';
import { DEFAULT_DERIVATION_PATH } from '../constants';

export const generateNewWallet = () => {
  const generated = PrivateKey.generate();
  const wallet = Wallet.fromMnemonic(
    generated.mnemonic,
    DEFAULT_DERIVATION_PATH
  );
  const pkeyWallet = PrivateKey.fromPrivateKey(wallet.privateKey);
  return {
    mnemonic: generated.mnemonic,
    privateKey: wallet.privateKey,
    publicKey: pkeyWallet.toPublicKey().toBase64(),
    address: pkeyWallet.toBech32(),
  };
};

export const generateWalletFromMnemonic = (mnemonic: string) => {
  const pkey = PrivateKey.fromMnemonic(mnemonic);
  const wallet = Wallet.fromMnemonic(mnemonic, DEFAULT_DERIVATION_PATH);
  return {
    mnemonic: mnemonic,
    privateKey: wallet.privateKey,
    publicKey: pkey.toPublicKey().toBase64(),
    address: pkey.toBech32(),
  };
};

export const generateWalletFromPrivateKey = (privateKey: string) => {
  const pkey = PrivateKey.fromPrivateKey(privateKey);
  return {
    privateKey: privateKey,
    publicKey: pkey.toPublicKey().toBase64(),
    address: pkey.toBech32(),
  };
};
