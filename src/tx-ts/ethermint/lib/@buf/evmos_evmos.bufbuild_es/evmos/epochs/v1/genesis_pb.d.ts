// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/epochs/v1/genesis.proto (package evmos.epochs.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 *
 * @generated from message evmos.epochs.v1.EpochInfo
 */
export declare class EpochInfo extends Message<EpochInfo> {
  /**
   * identifier of the epoch
   *
   * @generated from field: string identifier = 1;
   */
  identifier: string;

  /**
   * start_time of the epoch
   *
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * duration of the epoch
   *
   * @generated from field: google.protobuf.Duration duration = 3;
   */
  duration?: Duration;

  /**
   * current_epoch is the integer identifier of the epoch
   *
   * @generated from field: int64 current_epoch = 4;
   */
  currentEpoch: bigint;

  /**
   * current_epoch_start_time defines the timestamp of the start of the epoch
   *
   * @generated from field: google.protobuf.Timestamp current_epoch_start_time = 5;
   */
  currentEpochStartTime?: Timestamp;

  /**
   * epoch_counting_started reflects if the counting for the epoch has started
   *
   * @generated from field: bool epoch_counting_started = 6;
   */
  epochCountingStarted: boolean;

  /**
   * current_epoch_start_height of the epoch
   *
   * @generated from field: int64 current_epoch_start_height = 7;
   */
  currentEpochStartHeight: bigint;

  constructor(data?: PartialMessage<EpochInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.epochs.v1.EpochInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EpochInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EpochInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EpochInfo;

  static equals(a: EpochInfo | PlainMessage<EpochInfo> | undefined, b: EpochInfo | PlainMessage<EpochInfo> | undefined): boolean;
}

/**
 * GenesisState defines the epochs module's genesis state.
 *
 * @generated from message evmos.epochs.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
  /**
   * epochs is a slice of EpochInfo that defines the epochs in the genesis state
   *
   * @generated from field: repeated evmos.epochs.v1.EpochInfo epochs = 1;
   */
  epochs: EpochInfo[];

  constructor(data?: PartialMessage<GenesisState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.epochs.v1.GenesisState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}

