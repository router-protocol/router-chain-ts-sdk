// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/feegrant/v1beta1/genesis.proto (package cosmos.feegrant.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Grant } from "./feegrant_pb.js";

/**
 * GenesisState contains a set of fee allowances, persisted from the store
 *
 * @generated from message cosmos.feegrant.v1beta1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "cosmos.feegrant.v1beta1.GenesisState",
  () => [
    { no: 1, name: "allowances", kind: "message", T: Grant, repeated: true },
  ],
);
