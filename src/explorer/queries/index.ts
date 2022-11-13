export const latestBlockQuery = `query getLatestBlocks($limit: Int!, $offset: Int!){
  paginatedBlock(sortBy:{_id:desc},limit:$limit,offset:$offset){
    totalRecords
    blocks{
      _id
      hash
      proposer
      txn_count
      timestamp
      transactions{
         _id
        height
        sender
        status
        receiver
        timeStamp
        gasWanted
        gasUsed
        fee
        event_logs
        success
      }
    }
  }
}
`;

export const specificBlockQuery = `
  query getBlockByHeight($height: Int!){
  block(_id:$height){
    _id
    hash
    proposer
    txn_count
    timestamp
    transactions{
         _id
        height
        sender
        status
        receiver
        timeStamp
        gasWanted
        gasUsed
        fee
        event_logs
        success
    }
  }
}
`;
export const latestTransactionsQuery = `
  query getLatestTransactions($limit: Int!, $offset: Int!){
    paginatedTransaction(sortBy:{height:desc,timeStamp:desc},limit:$limit,offset:$offset){
    totalRecords
  transactions{
     _id
    height
    sender
    status
    receiver
    timeStamp
    gasWanted
    gasUsed
    fee
    event_logs
    success
    rawLog
  }
  }
}
`;

export const latestTransactionsOfAddressQuery = `
  query getLatestTransactions($address: String!,$limit: Int!, $offset: Int!){
    paginatedTransaction(where_or:{sender:$address, receiver:$address}, sortBy:{height:desc,timeStamp:desc},limit:$limit,offset:$offset){
    totalRecords
  transactions{
     _id
    height
    sender
    status
    receiver
    timeStamp
    gasWanted
    gasUsed
    fee
    event_logs
    success
    rawLog
  }
  }
}
`;

export const specificTransactionQuery = `
  query getTransactionByHash($hash: String!){
  transaction(_id:$hash){
    _id
    height
    sender
    status
    receiver
    timeStamp
    gasWanted
    gasUsed
    fee
    event_logs
    success
    rawLog
  }
}
`;

export const latestInboundsQuery = `
  query getLatestInbounds($limit: Int!, $offset: Int!){
    paginatedInbound(sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      attestationId
      chainType
      attestationType
      chainId
      eventNonce
      blockHeight
      sourceTxHash
      sourceSender
      routerBridgeContract
      payload
      status
      formAttestationId
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
    }
  }
}
`;

export const latestApplicationsInboundsQuery = `
  query getLatestInbounds($address: String! $limit: Int!, $offset: Int!){
    paginatedInbound(where:{routerBridgeContract:$address},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      attestationId
      chainType
      attestationType
      chainId
      eventNonce
      blockHeight
      sourceTxHash
      sourceSender
      routerBridgeContract
      payload
      status
      formAttestationId
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
    }
  }
}
`;

export const searchSpecificInboundQuery = `
  query getLatestInbounds($searchTerm: String!,$limit: Int!, $offset: Int!){
    paginatedInbound(where_or:{sourceTxHash:$searchTerm,sourceSender:$searchTerm,routerBridgeContract:$searchTerm,formAttestationId:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      attestationId
      chainType
      attestationType
      chainId
      eventNonce
      blockHeight
      sourceTxHash
      sourceSender
      routerBridgeContract
      payload
      status
      formAttestationId
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
    }
  }
}
`;

export const filterApplicationInboundQuery = `
  query getLatestInbounds($address: String!, $searchTerm: String!,$limit: Int!, $offset: Int!){
    paginatedInbound(where:{routerBridgeContract:$address},where_or:{sourceTxHash:$searchTerm,sourceSender:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      attestationId
      chainType
      attestationType
      chainId
      eventNonce
      blockHeight
      sourceTxHash
      sourceSender
      routerBridgeContract
      payload
      status
      formAttestationId
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
    }
  }
}
`;

export const specificInboundQuery = `
  query getInboundByFormAttestationId($formAttestationId: String!){
  inbound(formAttestationId:$formAttestationId){
    attestationId
    chainType
    attestationType
    chainId
    eventNonce
    blockHeight
    sourceTxHash
    sourceSender
    routerBridgeContract
    payload
    status
    formAttestationId
    historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
  }
}
`;
//sortBy:{blockHeight:desc},
export const latestOutboundsQuery = `
  query getLatestOutbounds($limit: Int!, $offset: Int!){
    paginatedOutbound(limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic: Boolean!
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      formAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
      contractsExecutionData{
        destContractAddress
        status
        payload
      }
      contractAckResponses
    }
  }
}
`;

export const latestApplicationsOutboundsQuery = `
  query getLatestOutbounds($address:String!, $limit: Int!, $offset: Int!){
    paginatedOutbound(where:{sourceAddress:$address},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic: Boolean!
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      formAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
      contractsExecutionData{
        destContractAddress
        status
        payload
      }
      contractAckResponses
    }
  }
}
`;

export const searchSpecificOutboundQuery = `
  query getLatestOutbounds($destinationChainType: String!,$destinationChainId: String!,$sourceAddress: String!,$limit: Int!, $offset: Int!){
    paginatedOutbound(where:{destinationChainType:$destinationChainType,destinationChainId:$destinationChainId,sourceAddress:$sourceAddress},sortBy:{outgoingTxNonce:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic: Boolean!
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      formAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
      contractsExecutionData{
        destContractAddress
        status
        payload
      }
      contractAckResponses
    }
  }
}
`;

export const filterApplicationOutboundQuery = `
  query getLatestOutbounds($destinationChainType: String!,$destinationChainId: String!,$address: String!,$limit: Int!, $offset: Int!){
    paginatedOutbound(where:{sourceAddress:$address},where_or:{destinationChainType:$destinationChainType,destinationChainId:$destinationChainId},sortBy:{outgoingTxNonce:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic: Boolean!
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      formAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
      contractsExecutionData{
        destContractAddress
        status
        payload
      }
      contractAckResponses
    }
  }
}
`;

export const specificOutboundQuery = `
  query getOutboundByFormAttestationId($formAttestationId: String!){
  outbound(formAttestationId:$formAttestationId){
    eventNonce
    destinationChainType
    destinationChainId
    relayerFee
    outgoingTxFee
    isAtomic: Boolean!
    sourceAddress
    expiryTimestamp
    status
    contractCalls
    formAttestationId
    attestationId
    outgoingTxNonce
    outboundTxRequestedBy
    destinationTxHash
    feeConsumed
    blockHeight
    historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
      }
      contractsExecutionData{
        destContractAddress
        status
        payload
      }
      contractAckResponses
  }
}
`;

//const x = gql(latestBlockQuery) for apollo client DocumentNode
