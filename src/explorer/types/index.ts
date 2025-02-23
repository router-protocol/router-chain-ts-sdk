export interface KeyValueString {
  [key: string]: string;
}

export interface KeyValueAny {
  [key: string]: any;
}

export interface TransactionType {
  _id: string;
  height: number;
  sender: string;
  status: string;
  receiver: string;
  timestamp: number;
  gasWanted: string;
  gasUsed: string;
  fee: string;
  event_logs: string;
  success: string;
  txnRaw: string;
  rawLog: string;
  routePrice: string;
}

export interface BlockType {
  _id: number;
  hash: string;
  proposer: string;
  txn_count: number;
  timestamp: number;
  total_gas: string;
  block_reward: string;
  processed: number;
}

export interface BlockTypeWithSignatures {
  _id: number;
  hash: string;
  proposer: string;
  txn_count: number;
  timestamp: number;
  total_gas: string;
  block_reward: string;
  processed: number;
  signatures: {
    validatorAddress: string;
    timestamp: number;
  }[];
}

export interface BlockTypeWithTxns {
  _id: number;
  hash: string;
  proposer: string;
  txn_count: number;
  timestamp: number;
  total_gas: string;
  block_reward: string;
  processed: number;
  signatures: {
    validatorAddress: string;
    timestamp: number;
  }[];
  transactions: TransactionType[];
}

export interface PaginatedBlock {
  totalRecords: number;
  blocks: BlockType[];
}

export interface PaginatedBlockWithSignature {
  totalRecords: number;
  blocks: BlockTypeWithSignatures[];
}

export interface PaginatedTransaction {
  totalRecords: number;
  transactions: TransactionType[];
}

export interface EventHistory {
  name: string;
  height: number;
  timestamp: number;
  txnHash: string;
}

export interface HistoryStatusType {
  status: string;
  txnHash: string;
  timestamp: number;
  blockHeight: number;
}

export interface VoteAttestationType {
  chainType: string;
  chainId: string;
  eventNonce: number;
  voter: string;
  blockHeight: number;
  timestamp: number;
}

export interface EventSignatureType {
  validator: string;
  txnHash: string;
  timestamp: number;
  blockHeight: number;
  signature: string;
  ethSigner: string;
}

export interface CrosschainRouterPacket {
  handler: string;
  payload: string;
}

export interface EvmContractMetadata {
  destGasLimit: number;
  destGasPrice: number;
  ackGasLimit: number;
  ackGasPrice: number;
  ackType: number;
  isReadCall: boolean;
  asmAddress: string;
}

export interface EventCrosschainAckReceiptCreated {
  attestationId: string;
  ackReceiptSrcChainId: string;
  ackReceiptIdentifier: number;
  ackReceiptBlockHeight: number;
  ackReceiptTxHash: string;
  relayerRouterAddress: string;
  requestIdentifier: number;
  status: string;
}

interface AckReceiptRequest {
  ackReceipt: EventCrosschainAckReceiptCreated;
  historyStatus: HistoryStatusType[];
  relayerFeeInRoute: string;
  refundFeeInRoute: string;
  ackReceiptKey: string;
  status: string;
  claimHash: string;
}

interface EventCrosschainAckRequestCreated {
  attestationId: string;
  ackSrcChainId: string;
  ackRequestIdentifier: number;
  blockHeight: number;
  destTxHash: string;
  relayerRouterAddress: string;
  ackDestChainId: string;
  requestSender: string;
  requestIdentifier: number;
  ackSrcChainType: number;
  ackDestChainType: number;
  execData: string;
  execStatus: boolean;
  status: string;
}

export interface EventCrosschainAckRequestConfirm {
  ackSrcChainId: string;
  ackRequestIdentifier: number;
  claimHash: string;
  ethSigner: string;
  signature: string;
  orchestrator: string;
}

export interface AckRequest {
  eventAckRequestCreated: EventCrosschainAckRequestCreated;
  eventAckRequestConfirm: EventCrosschainAckRequestConfirm;
  status: string;
  eventHistory: EventHistory[];
  historyStatus: HistoryStatusType[];
  claimHash: string;
  txFeeInRoute: string;
  chainType: string;
  chainId: string;
  requestIdentifier: number;
  customFormAttestationId: string;
  ackReceiptRequest: AckReceiptRequest;
  ackGasLimit: number;
  ackGasPrice: number;
  feePayer: string;
  relayerFeeInRoute: string;
  relayerIncentiveInRoute: string;
  refundFeeInRoute: string;
  errorResponse: string;
  eventSignatures: VoteAttestationType[];
}

export interface CrosschainType {
  id: string;
  attestationId: string;
  srcChainId: string;
  requestIdentifier: number;
  blockHeight: number;
  sourceTxHash: string;
  srcTimestamp: number;
  srcTxOrigin: string;
  routeAmount: string;
  routeRecipient: string;
  destChainId: string;
  requestSender: string;
  requestMetadata: EvmContractMetadata;
  requestPacket: CrosschainRouterPacket;
  srcChainType: string;
  destChainType: string;
  status: string;
  eventHistory: EventHistory[];
  historyStatus: HistoryStatusType[];
  eventConfirmSignatures: EventSignatureType[];
  ackRequest: AckRequest;
  customFormAttestationId: string;
  destinationTxHash: string;
  eventAckConfirmSignatures: EventSignatureType[];
  createdAt: number;
  updatedAt: number;
  destTxFeeInRoute: string;
  relayerFee: string;
  relayerFeeInRoute: string;
  relayerIncentiveInRoute: string;
  refundFeeInRoute: string;
  feePayer: string;
  errorResponse: string;
  relayerAddress: string;
  execStatus: boolean;
  execData: string;
  eventSignatures: VoteAttestationType[];
}

export interface PaginatedCrosschain {
  totalRecords: number;
  crosschains: CrosschainType[];
}

export interface InboundOutboundMapType {
  inboundId: string;
  outboundId: string;
  inboundChainId: string;
  inboundNonce: string;
  outboundChainId: string;
  outboundNonce: string;
  middlewareContract: string;
  blockHeight: number;
  timestamp: number;
}

export interface FundPaidType {
  id: string;
  srcChainId: string;
  srcChainType: string;
  srcTxHash: string;
  srcTimestamp: number;
  contract: string;
  eventNonce: number;
  blockHeight: number;
  messageHash: string;
  forwarder: string;
  forwarderRouterAddr: string;
  execResponse: string;
  errorResponse: string;
  eventHistory: EventHistory[];
  historyStatus: HistoryStatusType[];
  eventSignatures: EventSignatureType[];
  eventConfirmSignatures: VoteAttestationType[];
  status: string;
  createdAt: number;
  updatedAt: number;
}

export interface PaginatedFundPaid {
  totalRecords: number;
  fundPaid: FundPaidType[];
}

export interface FundDepositType {
  id: string;
  srcChainId: string;
  srcChainType: string;
  srcTxHash: string;
  srcTimestamp: number;
  contract: string;
  depositId: number;
  blockHeight: number;
  destChainId: string;
  amount: number;
  relayerFees: string;
  srcToken: string;
  recipient: string;
  depositor: string;
  execResponse: string;
  errorResponse: string;
  eventHistory: EventHistory[];
  historyStatus: HistoryStatusType[];
  eventSignatures: EventSignatureType[];
  eventConfirmSignatures: VoteAttestationType[];
  status: string;
  createdAt: number;
  updatedAt: number;
}

export interface PaginatedFundDeposit {
  totalRecords: number;
  fundDeposit: FundDepositType[];
}

export interface ValidatorUptime {
  operatorAddress: string;
  consensusAddress: string;
  upTime: string;
}
