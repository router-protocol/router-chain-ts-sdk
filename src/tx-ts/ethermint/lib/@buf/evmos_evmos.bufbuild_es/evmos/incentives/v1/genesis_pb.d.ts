// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/incentives/v1/genesis.proto (package evmos.incentives.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { GasMeter, Incentive } from "./incentives_pb.js";

/**
 * GenesisState defines the module's genesis state.
 *
 * @generated from message evmos.incentives.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
  /**
   * params are the incentives module parameters
   *
   * @generated from field: evmos.incentives.v1.Params params = 1;
   */
  params?: Params;

  /**
   * incentives is a slice of active incentives
   *
   * @generated from field: repeated evmos.incentives.v1.Incentive incentives = 2;
   */
  incentives: Incentive[];

  /**
   * gas_meters is a slice of active Gasmeters
   *
   * @generated from field: repeated evmos.incentives.v1.GasMeter gas_meters = 3;
   */
  gasMeters: GasMeter[];

  constructor(data?: PartialMessage<GenesisState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.incentives.v1.GenesisState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}

/**
 * Params defines the incentives module params
 *
 * @generated from message evmos.incentives.v1.Params
 */
export declare class Params extends Message<Params> {
  /**
   * enable_incentives is the parameter to enable incentives
   *
   * @generated from field: bool enable_incentives = 1;
   */
  enableIncentives: boolean;

  /**
   * allocation_limit is the maximum percentage an incentive can allocate per denomination
   *
   * @generated from field: string allocation_limit = 2;
   */
  allocationLimit: string;

  /**
   * incentives_epoch_identifier for the epochs module hooks
   *
   * @generated from field: string incentives_epoch_identifier = 3;
   */
  incentivesEpochIdentifier: string;

  /**
   * reward_scaler is the scaling factor for capping rewards
   *
   * @generated from field: string reward_scaler = 4;
   */
  rewardScaler: string;

  constructor(data?: PartialMessage<Params>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.incentives.v1.Params";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}

