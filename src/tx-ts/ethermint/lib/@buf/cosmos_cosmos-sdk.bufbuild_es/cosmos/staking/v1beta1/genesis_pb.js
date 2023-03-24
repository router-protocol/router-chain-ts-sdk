// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/staking/v1beta1/genesis.proto (package cosmos.staking.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Delegation, Params, Redelegation, UnbondingDelegation, Validator } from "./staking_pb.js";

/**
 * GenesisState defines the staking module's genesis state.
 *
 * @generated from message cosmos.staking.v1beta1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "cosmos.staking.v1beta1.GenesisState",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "last_total_power", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "last_validator_powers", kind: "message", T: LastValidatorPower, repeated: true },
    { no: 4, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 5, name: "delegations", kind: "message", T: Delegation, repeated: true },
    { no: 6, name: "unbonding_delegations", kind: "message", T: UnbondingDelegation, repeated: true },
    { no: 7, name: "redelegations", kind: "message", T: Redelegation, repeated: true },
    { no: 8, name: "exported", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * LastValidatorPower required for validator set update logic.
 *
 * @generated from message cosmos.staking.v1beta1.LastValidatorPower
 */
export const LastValidatorPower = proto3.makeMessageType(
  "cosmos.staking.v1beta1.LastValidatorPower",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

