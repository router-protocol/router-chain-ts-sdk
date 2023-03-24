// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/gov/module/v1/module.proto (package cosmos.gov.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Module is the config object of the gov module.
 *
 * @generated from message cosmos.gov.module.v1.Module
 */
export declare class Module extends Message<Module> {
  /**
   * @generated from field: uint64 max_metadata_len = 1;
   */
  maxMetadataLen: bigint;

  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   *
   * @generated from field: string authority = 2;
   */
  authority: string;

  constructor(data?: PartialMessage<Module>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cosmos.gov.module.v1.Module";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}

