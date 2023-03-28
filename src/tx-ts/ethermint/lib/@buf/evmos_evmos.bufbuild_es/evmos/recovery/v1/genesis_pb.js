// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/recovery/v1/genesis.proto (package evmos.recovery.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the recovery module's genesis state.
 *
 * @generated from message evmos.recovery.v1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "evmos.recovery.v1.GenesisState",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
  ],
);

/**
 * Params holds parameters for the recovery module
 *
 * @generated from message evmos.recovery.v1.Params
 */
export const Params = proto3.makeMessageType(
  "evmos.recovery.v1.Params",
  () => [
    { no: 1, name: "enable_recovery", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "packet_timeout_duration", kind: "message", T: Duration },
  ],
);
