// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/nft/v1beta1/genesis.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Class, NFT } from "./nft_pb.js";

/**
 * GenesisState defines the nft module's genesis state.
 *
 * @generated from message cosmos.nft.v1beta1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "cosmos.nft.v1beta1.GenesisState",
  () => [
    { no: 1, name: "classes", kind: "message", T: Class, repeated: true },
    { no: 2, name: "entries", kind: "message", T: Entry, repeated: true },
  ],
);

/**
 * Entry Defines all nft owned by a person
 *
 * @generated from message cosmos.nft.v1beta1.Entry
 */
export const Entry = proto3.makeMessageType(
  "cosmos.nft.v1beta1.Entry",
  () => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "nfts", kind: "message", T: NFT, repeated: true },
  ],
);

