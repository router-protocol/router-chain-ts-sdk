// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file ethermint/evm/v1/events.proto (package ethermint.evm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * EventEthereumTx defines the event for an Ethereum transaction
 *
 * @generated from message ethermint.evm.v1.EventEthereumTx
 */
export const EventEthereumTx = proto3.makeMessageType(
  "ethermint.evm.v1.EventEthereumTx",
  () => [
    { no: 1, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "eth_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "index", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "gas_used", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "eth_tx_failed", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * EventTxLog defines the event for an Ethereum transaction log
 *
 * @generated from message ethermint.evm.v1.EventTxLog
 */
export const EventTxLog = proto3.makeMessageType(
  "ethermint.evm.v1.EventTxLog",
  () => [
    { no: 1, name: "tx_logs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * EventMessage
 *
 * @generated from message ethermint.evm.v1.EventMessage
 */
export const EventMessage = proto3.makeMessageType(
  "ethermint.evm.v1.EventMessage",
  () => [
    { no: 1, name: "module", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "tx_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * EventBlockBloom defines an Ethereum block bloom filter event
 *
 * @generated from message ethermint.evm.v1.EventBlockBloom
 */
export const EventBlockBloom = proto3.makeMessageType(
  "ethermint.evm.v1.EventBlockBloom",
  () => [
    { no: 1, name: "bloom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

