export const latestBlockQuery = `query getLatestBlocks($limit: Int!, $timeRange:[Int],$offset: Int!){
  paginatedBlock(sortBy:{_id:desc},filter:{timestamp:{range:$timeRange}},limit:$limit,offset:$offset){
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
        timestamp
        gasWanted
        gasUsed
        fee
        event_logs
        success
        routePrice
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
        timestamp
        gasWanted
        gasUsed
        fee
        event_logs
        success
        routePrice
    }
  }
}
`;
export const latestTransactionsQuery = `
  query getLatestTransactions($timeRange:[Int], $limit: Int!, $offset: Int!){
    paginatedTransaction(filter:{timestamp:{range:$timeRange}},sortBy:{height:desc,timestamp:desc},limit:$limit,offset:$offset){
    totalRecords
  transactions{
     _id
    height
    sender
    status
    receiver
    timestamp
    gasWanted
    gasUsed
    fee
    event_logs
    success
    rawLog
    routePrice
  }
  }
}
`;

export const latestTransactionsOfAddressQuery = `
  query getLatestTransactions($address: String!,$limit: Int!, $offset: Int!){
    paginatedTransaction(where_or:{sender:$address, receiver:$address}, sortBy:{height:desc,timestamp:desc},limit:$limit,offset:$offset){
    totalRecords
  transactions{
     _id
    height
    sender
    status
    receiver
    timestamp
    gasWanted
    gasUsed
    fee
    event_logs
    success
    rawLog
    routePrice
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
    timestamp
    gasWanted
    gasUsed
    fee
    event_logs
    success
    rawLog
    routePrice
  }
}
`;

export const latestInboundsQuery = `
  query getLatestInbounds($timeRange:[Int], $limit: Int!, $offset: Int!){
    paginatedInbound(filter:{createdAt:{range:$timeRange}},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      id
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
      delegationErrorResponse
      createdAt
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
        blockHeight
      }
      feePayer
      outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractAckResponses
    }
    }
  }
}
`;

export const latestApplicationsInboundsQuery = `
  query getLatestInbounds($address: String!, $blockHeight:Int, $limit: Int!, $offset: Int!, $order: Sort){
    paginatedInbound(where:{routerBridgeContract:$address},filter:{blockHeight:{gt:$blockHeight}},sortBy:{blockHeight:$order},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      id
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
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
        blockHeight
      }
      feePayer
      inboundOutboundMapping{
        middlewareContract
        outboundDocMap
        inboundDocMap
        blockHeight
        timestamp
      }
      outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractAckResponses
    }
    }
  }
}
`;

export const searchSpecificInboundQuery = `
  query getLatestInbounds($timeRange:[Int], $searchTerm: String!,$limit: Int!, $offset: Int!){
    paginatedInbound(filter:{createdAt:{range:$timeRange}},where_or:{sourceTxHash:$searchTerm,sourceSender:$searchTerm,routerBridgeContract:$searchTerm,id:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      id
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
      delegationErrorResponse
      createdAt
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
        blockHeight
      }
      feePayer
      outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractAckResponses
    }
    }
  }
}
`;

export const searchSpecificInboundSrcChainIdQuery = `
  query getLatestInbounds($timeRange:[Int], $sourceChainIds: [String],$searchTerm: String!,$limit: Int!, $offset: Int!){
    paginatedInbound(filter:{chainId:{in:$sourceChainIds}, createdAt:{range:$timeRange}},where_or:{sourceTxHash:$searchTerm,sourceSender:$searchTerm,routerBridgeContract:$searchTerm,id:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    inbounds{
      id
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
      delegationErrorResponse
      createdAt
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
        blockHeight
      }
      feePayer
      outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractAckResponses
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
      id
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
      createdAt
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
        blockHeight   
      }
      feePayer
      outbounds{
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractAckResponses
    }
    }
  }
}
`;

export const specificInboundQuery = `
  query getInboundByFormAttestationId($formAttestationId: String!){
  inbound(id:$formAttestationId){
    id
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
    createdAt
    delegationErrorResponse
    historyStatus{
        status
        txnHash
        timestamp
      }
      confirmations{
        validator
        txnHash
        timestamp
        blockHeight
      }
    feePayer
    outbounds{
    eventNonce
    destinationChainType
    destinationChainId
    relayerFee
    outgoingTxFee
    isAtomic
    sourceAddress
    expiryTimestamp
    status
    contractCalls
    ackFormAttestationId
    attestationId
    outgoingTxNonce
    outboundTxRequestedBy
    destinationTxHash
    feeConsumed
    blockHeight
    destinationGasLimit
    destinationGasPrice
    outgoingTxFeeInRoute
    relayerFeeInRoute
    refundFeeInRoute
    delegationErrorResponse
    historyStatus{
      status
      txnHash
      timestamp
      blockHeight
    }
    outboundSignatures{
      validator
      txnHash
      timestamp
      blockHeight
    }
    outboundACKSignatures{
      validator
      txnHash
      timestamp
      blockHeight
    }
    contractsExecutionData{
      destContractAddress
      status
      requestPayload
      responsePayload
    }
    confirmations{
      validator
      txnHash
      timestamp
      blockHeight
    }
    contractAckResponses
  }
  }
}
`;
//sortBy:{blockHeight:desc},
export const latestOutboundsQuery = `
  query getLatestOutbounds($timeRange:[Int],$limit: Int!, $offset: Int!){
    paginatedOutbound(filter:{createdAt:{range:$timeRange}},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      id
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      createdAt
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractAckResponses
    }
    }
}
`;

export const latestApplicationsOutboundsQuery = `
  query getLatestOutbounds($address:String!, $limit: Int!, $offset: Int!){
    paginatedOutbound(where:{sourceAddress:$address},sortBy:{outgoingTxNonce:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      id
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      contractAckResponses
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
    }
    }
}
`;

export const searchSpecificOutboundQuery = `
  query getLatestOutbounds($timeRange:[Int],$searchTerm: String!,$limit: Int!, $offset: Int!){
    paginatedOutbound(filter:{createdAt:{range:$timeRange}},where_or:{sourceAddress:$searchTerm,destinationTxHash:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      id
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      createdAt
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      contractAckResponses
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
    }
    }
}
`;

export const searchSpecificOutboundDestChainIdQuery = `
  query getLatestOutbounds($timeRange:[Int],$destinationChainIds: [String],$searchTerm: String!,$limit: Int!, $offset: Int!){
    paginatedOutbound(filter:{destinationChainId:{in:$destinationChainIds}, createdAt:{range:$timeRange}},where_or:{sourceAddress:$searchTerm,destinationTxHash:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      id
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      createdAt
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      contractAckResponses
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
    }
    }
}
`;

export const filterApplicationOutboundQuery = `
  query getLatestOutbounds($address: String!,$limit: Int!, $offset: Int!){
    paginatedOutbound(where:{sourceAddress:$address},sortBy:{outgoingTxNonce:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      id
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      createdAt
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      contractAckResponses
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
    }
    }
}
`;
export const filterApplicationOutboundDestChainQuery = `
  query getLatestOutbounds($destinationChainIsd: [String],$address: String!,$limit: Int!, $offset: Int!){
    paginatedOutbound(where:{sourceAddress:$address},filter:{destinationChainId:{in:$destinationChainIds}},sortBy:{outgoingTxNonce:desc},limit:$limit,offset:$offset){
    totalRecords
    outbounds{
      id
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      createdAt
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      contractAckResponses
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
    }
    }
}
`;

export const specificOutboundQuery = `
  query getOutboundByFormAttestationId($formAttestationId: String!){
  outbound(id:$formAttestationId){
      id
      eventNonce
      destinationChainType
      destinationChainId
      relayerFee
      outgoingTxFee
      isAtomic
      sourceAddress
      expiryTimestamp
      status
      contractCalls
      ackFormAttestationId
      createdAt
      attestationId
      outgoingTxNonce
      outboundTxRequestedBy
      destinationTxHash
      feeConsumed
      blockHeight
      destinationGasLimit
      destinationGasPrice
      outgoingTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      delegationErrorResponse
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
     outboundSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      outboundACKSignatures{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      confirmations{
        validator
        txnHash
        timestamp
      	blockHeight
      }
      contractAckResponses
  }
}
`;

export const latestCrossTalksQuery = `
  query getLatestCrossTalks($timeRange:[Int], $limit: Int!, $offset: Int!){
    paginatedCrossTalk(filter:{createdAt:{range:$timeRange}}, sortBy:{blockHeight:desc}, limit:$limit, offset:$offset){
    totalRecords
    crossTalks{
      id
      attestationId
      createdAt
      eventNonce
      blockHeight
      sourceChainType
      sourceChainId
      sourceTxHash
      destinationChainType
      destinationChainId
      destinationTxHash
      destinationGasLimit
      destinationGasPrice
      requestTxOrigin
      requestSender
      requestNonce
      isAtomic
      expiryTimestamp
      ackType
      ackGasLimit
      ackGasPrice
      isReadCall
      requestTxOrigin
      claimHash
      destinationTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      feePayer
      AckRequest{
        ackgaslimit
        ackgasprice
        eventattestationvote
        status
        claimhash
        txfeeinroute
        chaintype
        chainid
        eventnonce
        customformattestationid
        ackreceiptrequest{
          relayerfeeinroute
          refundfeeinroute
          ackreceiptkey
          status
          claimhash
          historystatus{
            status
            txnHash
            timestamp
          }
          ackreceipt{
             eventnonce
             blockheight
             relayerrouteraddress
             chaintype
             chainid
             txhash
             eventidentifier
             status
          }
        }
        voter
        historystatus{
          status
          txnHash
          timestamp
        }
       }
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      eventConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    eventAckConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    }
    }
}
`;

export const specificCrossTalkQuery = `
  query getCrossTalkByFormAttestationId($formAttestationId: String!){
  crossTalk(id:$formAttestationId){
      attestationId
      createdAt
      eventNonce
      blockHeight
      sourceChainType
      sourceChainId
      sourceTxHash
      destinationChainType
      destinationTxHash
      destinationChainId
      destinationGasLimit
      destinationGasPrice
      requestTxOrigin
      requestSender
      requestNonce
      isAtomic
      expiryTimestamp
      ackType
      ackGasLimit
      ackGasPrice
      isReadCall
      requestTxOrigin
      claimHash
      destinationTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      feePayer
        AckRequest{
        ackgaslimit
        ackgasprice
        eventattestationvote
        status
        claimhash
        txfeeinroute
        chaintype
        chainid
        eventnonce
        customformattestationid
        ackreceiptrequest{
          relayerfeeinroute
          refundfeeinroute
          ackreceiptkey
          status
          claimhash
          historystatus{
            status
            txnHash
            timestamp
          }
          ackreceipt{
             eventnonce
             blockheight
             relayerrouteraddress
             chaintype
             chainid
             txhash
             eventidentifier
             status
          }
        }
        voter
        historystatus{
          status
          txnHash
          timestamp
        }
       }
       historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      eventConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    eventAckConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
  }
}
`;
export const searchSpecificCrossTalkQuery = `
  query getCrossTalkByFormAttestationId($timeRange:[Int], $searchTerm: String! ,$limit: Int!, $offset: Int!){
  paginatedCrossTalk(filter:{createdAt:{range:$timeRange}},where_or:{sourceTxHash:$searchTerm, requestTxOrigin:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    crossTalks{
      id
      attestationId
      createdAt
      eventNonce
      blockHeight
      sourceChainType
      sourceChainId
      sourceTxHash
      destinationChainType
      destinationChainId
      destinationTxHash
      destinationGasLimit
      destinationGasPrice
      requestSender
      requestTxOrigin
      requestNonce
      isAtomic
      expiryTimestamp
      ackType
      ackGasLimit
      ackGasPrice
      isReadCall
      requestTxOrigin
      claimHash
      destinationTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      feePayer
      AckRequest{
        ackgaslimit
        ackgasprice
        eventattestationvote
        status
        claimhash
        txfeeinroute
        chaintype
        chainid
        eventnonce
        customformattestationid
        ackreceiptrequest{
          relayerfeeinroute
          refundfeeinroute
          ackreceiptkey
          status
          claimhash
          historystatus{
            status
            txnHash
            timestamp
          }
          ackreceipt{
             eventnonce
             blockheight
             relayerrouteraddress
             chaintype
             chainid
             txhash
             eventidentifier
             status
          }
        }
        voter
        historystatus{
          status
          txnHash
          timestamp
        }
       }
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      eventConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    eventAckConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    }
    }
}
`;

export const searchSpecificCrossTalkSrcChainIdQuery = `
  query getCrossTalkByFormAttestationId($timeRange:[Int],$sourceChainIds: [String],$searchTerm: String! ,$limit: Int!, $offset: Int!){
  paginatedCrossTalk(filter:{sourceChainId:{in:$sourceChainIds}, createdAt:{range:$timeRange}},where_or:{sourceTxHash:$searchTerm, requestTxOrigin:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    crossTalks{
      id
      attestationId
      createdAt
      eventNonce
      blockHeight
      sourceChainType
      sourceChainId
      sourceTxHash
      destinationChainType
      destinationChainId
      destinationTxHash
      destinationGasLimit
      destinationGasPrice
      requestSender
      requestTxOrigin
      requestNonce
      isAtomic
      expiryTimestamp
      ackType
      ackGasLimit
      ackGasPrice
      isReadCall
      requestTxOrigin
      claimHash
      destinationTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      feePayer
      AckRequest{
        ackgaslimit
        ackgasprice
        eventattestationvote
        status
        claimhash
        txfeeinroute
        chaintype
        chainid
        eventnonce
        customformattestationid
        ackreceiptrequest{
          relayerfeeinroute
          refundfeeinroute
          ackreceiptkey
          status
          claimhash
          historystatus{
            status
            txnHash
            timestamp
          }
          ackreceipt{
             eventnonce
             blockheight
             relayerrouteraddress
             chaintype
             chainid
             txhash
             eventidentifier
             status
          }
        }
        voter
        historystatus{
          status
          txnHash
          timestamp
        }
       }
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      eventConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    eventAckConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    }
    }
}
`;

export const searchSpecificCrossTalkDestChainIdQuery = `
  query getCrossTalkByFormAttestationId($timeRange:[Int],$destinationChainIds: [String],$searchTerm: String! ,$limit: Int!, $offset: Int!){
  paginatedCrossTalk(filter:{destinationChainId:{in:$destinationChainIds},createdAt:{range:$timeRange}},where_or:{sourceTxHash:$searchTerm, requestTxOrigin:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    crossTalks{
      id
      attestationId
      createdAt
      eventNonce
      blockHeight
      sourceChainType
      sourceChainId
      sourceTxHash
      destinationChainType
      destinationChainId
      destinationTxHash
      destinationGasLimit
      destinationGasPrice
      requestSender
      requestTxOrigin
      requestNonce
      isAtomic
      expiryTimestamp
      ackType
      ackGasLimit
      ackGasPrice
      isReadCall
      requestTxOrigin
      claimHash
      destinationTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      feePayer
      AckRequest{
        ackgaslimit
        ackgasprice
        eventattestationvote
        status
        claimhash
        txfeeinroute
        chaintype
        chainid
        eventnonce
        customformattestationid
        ackreceiptrequest{
          relayerfeeinroute
          refundfeeinroute
          ackreceiptkey
          status
          claimhash
          historystatus{
            status
            txnHash
            timestamp
          }
          ackreceipt{
             eventnonce
             blockheight
             relayerrouteraddress
             chaintype
             chainid
             txhash
             eventidentifier
             status
          }
        }
        voter
        historystatus{
          status
          txnHash
          timestamp
        }
       }
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      eventConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    eventAckConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    }
    }
}
`;

export const searchSpecificCrossTalkChainIdQuery = `
  query getCrossTalkByFormAttestationId($timeRange:[Int], $sourceChainIds: [String],$destinationChainIds: [String],$searchTerm: String! ,$limit: Int!, $offset: Int!){
  paginatedCrossTalk(filter:{sourceChainId:{in:$sourceChainIds},destinationChainId:{in:$destinationChainIds}, createdAt:{range:$timeRange}},where_or:{sourceTxHash:$searchTerm, requestTxOrigin:$searchTerm},sortBy:{blockHeight:desc},limit:$limit,offset:$offset){
    totalRecords
    crossTalks{
      id
      attestationId
      createdAt
      eventNonce
      blockHeight
      sourceChainType
      sourceChainId
      sourceTxHash
      destinationChainType
      destinationChainId
      destinationTxHash
      destinationGasLimit
      destinationGasPrice
      requestSender
      requestTxOrigin
      requestNonce
      isAtomic
      expiryTimestamp
      ackType
      ackGasLimit
      ackGasPrice
      isReadCall
      requestTxOrigin
      claimHash
      destinationTxFeeInRoute
      relayerFeeInRoute
      refundFeeInRoute
      feePayer
      AckRequest{
        ackgaslimit
        ackgasprice
        eventattestationvote
        status
        claimhash
        txfeeinroute
        chaintype
        chainid
        eventnonce
        customformattestationid
        ackreceiptrequest{
          relayerfeeinroute
          refundfeeinroute
          ackreceiptkey
          status
          claimhash
          historystatus{
            status
            txnHash
            timestamp
          }
          ackreceipt{
             eventnonce
             blockheight
             relayerrouteraddress
             chaintype
             chainid
             txhash
             eventidentifier
             status
          }
        }
        voter
        historystatus{
          status
          txnHash
          timestamp
        }
       }
      historyStatus{
        status
        txnHash
        timestamp
        blockHeight
      }
      contractsExecutionData{
        destContractAddress
        status
        requestPayload
        responsePayload
      }
      eventConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    eventAckConfirmSignatures{
      validator
      txnHash
      timestamp
      blockHeight
      signature
      ethSigner
    }
    }
    }
}
`;

//const x = gql(latestBlockQuery) for apollo client DocumentNode
