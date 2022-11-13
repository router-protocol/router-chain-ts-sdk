export interface KeyValueString{
    [key:string]: string
}

export interface KeyValueAny{
    [key:string]: any
}

export interface TransactionType {
  _id: String;
  height: Number;
  sender: String;
  status: String;
  receiver: String;
  timeStamp: String;
  gasWanted: String;
  gasUsed: String;
  fee: String;
  event_logs: String;
  success: String;
  txnRaw: String;
  rawLog: String;
  routePrice: string;
}

export interface BlockType {
  _id: Number;
  hash: String;
  proposer: String;
  txn_count: Number;
  timestamp: String;
  total_gas: String;
  block_reward: String;
  processed: Number;
  transactions: TransactionType[];
}

export interface InboundType {
  attestationId: String;
  chainType: String;
  attestationType: String;
  chainId: String;
  eventNonce: Number;
  blockHeight: Number;
  sourceTxHash: String;
  sourceSender: String;
  routerBridgeContract: String;
  payload: String;
  status: String;
  formAttestationId: String;
  historyStatus: {
    status: string;
    txnHash: string;
    timestamp: string;
  }[];
  confirmations: {
    validator: string;
    txnHash: string;
    timestamp: string;
  }[];
}

export interface OutboundType {
  outgoingTxNonce: Number;
  destinationChainType: String;
  destinationChainId: String;
  relayerFee: String;
  outgoingTxFee: String;
  isAtomic: Boolean;
  sourceAddress: String;
  expiryTimestamp: Number;
  status: String;
  contractCalls: String;
  formAttestationId: String;
  attestationId: String;
  outboundTxRequestedBy: String;
  destinationTxHash: String;
  feeConsumed: Number;
  blockHeight: Number;
  historystatus: {
    status: string;
    txnhash: string;
    timestamp: string;
    blockheight: number;
  }[];
  outboundsignatures: {
    validator: string;
    txnhash: string;
    timestamp: string;
    blockheight: number;
  }[];
  outboundacksignatures: {
    validator: string;
    txnhash: string;
    timestamp: string;
    blockheight: number;
  }[];
  confirmations: {
    validator: string;
    txnHash: string;
    timestamp: string;
    blockHeight: number;
  }[];
  contractsExecutionData: {
    destContractAddress: String;
    status: Boolean;
    payload: String;
  }[];
  contractAckResponses: Boolean[];
}

export interface PaginatedBlock {
  totalRecords: Number;
  blocks: BlockType[];
}

export interface PaginatedTransaction {
  totalRecords: Number;
  transactions: TransactionType[];
}

export interface PaginatedInbound {
  totalRecords: Number;
  inbounds: InboundType[];
}

export interface PaginatedOutbound {
  totalRecords: Number;
  outbounds: OutboundType[];
}