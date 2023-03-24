// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.0.0
// @generated from file google/bytestream/bytestream.proto (package google.bytestream, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Request object for ByteStream.Read.
 *
 * @generated from message google.bytestream.ReadRequest
 */
export declare class ReadRequest extends Message<ReadRequest> {
  /**
   * The name of the resource to read.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The offset for the first byte to return in the read, relative to the start
   * of the resource.
   *
   * A `read_offset` that is negative or greater than the size of the resource
   * will cause an `OUT_OF_RANGE` error.
   *
   * @generated from field: int64 read_offset = 2;
   */
  readOffset: bigint;

  /**
   * The maximum number of `data` bytes the server is allowed to return in the
   * sum of all `ReadResponse` messages. A `read_limit` of zero indicates that
   * there is no limit, and a negative `read_limit` will cause an error.
   *
   * If the stream returns fewer bytes than allowed by the `read_limit` and no
   * error occurred, the stream includes all data from the `read_offset` to the
   * end of the resource.
   *
   * @generated from field: int64 read_limit = 3;
   */
  readLimit: bigint;

  constructor(data?: PartialMessage<ReadRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.bytestream.ReadRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadRequest;

  static equals(a: ReadRequest | PlainMessage<ReadRequest> | undefined, b: ReadRequest | PlainMessage<ReadRequest> | undefined): boolean;
}

/**
 * Response object for ByteStream.Read.
 *
 * @generated from message google.bytestream.ReadResponse
 */
export declare class ReadResponse extends Message<ReadResponse> {
  /**
   * A portion of the data for the resource. The service **may** leave `data`
   * empty for any given `ReadResponse`. This enables the service to inform the
   * client that the request is still live while it is running an operation to
   * generate more data.
   *
   * @generated from field: bytes data = 10;
   */
  data: Uint8Array;

  constructor(data?: PartialMessage<ReadResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.bytestream.ReadResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadResponse;

  static equals(a: ReadResponse | PlainMessage<ReadResponse> | undefined, b: ReadResponse | PlainMessage<ReadResponse> | undefined): boolean;
}

/**
 * Request object for ByteStream.Write.
 *
 * @generated from message google.bytestream.WriteRequest
 */
export declare class WriteRequest extends Message<WriteRequest> {
  /**
   * The name of the resource to write. This **must** be set on the first
   * `WriteRequest` of each `Write()` action. If it is set on subsequent calls,
   * it **must** match the value of the first request.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The offset from the beginning of the resource at which the data should be
   * written. It is required on all `WriteRequest`s.
   *
   * In the first `WriteRequest` of a `Write()` action, it indicates
   * the initial offset for the `Write()` call. The value **must** be equal to
   * the `committed_size` that a call to `QueryWriteStatus()` would return.
   *
   * On subsequent calls, this value **must** be set and **must** be equal to
   * the sum of the first `write_offset` and the sizes of all `data` bundles
   * sent previously on this stream.
   *
   * An incorrect value will cause an error.
   *
   * @generated from field: int64 write_offset = 2;
   */
  writeOffset: bigint;

  /**
   * If `true`, this indicates that the write is complete. Sending any
   * `WriteRequest`s subsequent to one in which `finish_write` is `true` will
   * cause an error.
   *
   * @generated from field: bool finish_write = 3;
   */
  finishWrite: boolean;

  /**
   * A portion of the data for the resource. The client **may** leave `data`
   * empty for any given `WriteRequest`. This enables the client to inform the
   * service that the request is still live while it is running an operation to
   * generate more data.
   *
   * @generated from field: bytes data = 10;
   */
  data: Uint8Array;

  constructor(data?: PartialMessage<WriteRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.bytestream.WriteRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WriteRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WriteRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WriteRequest;

  static equals(a: WriteRequest | PlainMessage<WriteRequest> | undefined, b: WriteRequest | PlainMessage<WriteRequest> | undefined): boolean;
}

/**
 * Response object for ByteStream.Write.
 *
 * @generated from message google.bytestream.WriteResponse
 */
export declare class WriteResponse extends Message<WriteResponse> {
  /**
   * The number of bytes that have been processed for the given resource.
   *
   * @generated from field: int64 committed_size = 1;
   */
  committedSize: bigint;

  constructor(data?: PartialMessage<WriteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.bytestream.WriteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WriteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WriteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WriteResponse;

  static equals(a: WriteResponse | PlainMessage<WriteResponse> | undefined, b: WriteResponse | PlainMessage<WriteResponse> | undefined): boolean;
}

/**
 * Request object for ByteStream.QueryWriteStatus.
 *
 * @generated from message google.bytestream.QueryWriteStatusRequest
 */
export declare class QueryWriteStatusRequest extends Message<QueryWriteStatusRequest> {
  /**
   * The name of the resource whose write status is being requested.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  constructor(data?: PartialMessage<QueryWriteStatusRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.bytestream.QueryWriteStatusRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryWriteStatusRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryWriteStatusRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryWriteStatusRequest;

  static equals(a: QueryWriteStatusRequest | PlainMessage<QueryWriteStatusRequest> | undefined, b: QueryWriteStatusRequest | PlainMessage<QueryWriteStatusRequest> | undefined): boolean;
}

/**
 * Response object for ByteStream.QueryWriteStatus.
 *
 * @generated from message google.bytestream.QueryWriteStatusResponse
 */
export declare class QueryWriteStatusResponse extends Message<QueryWriteStatusResponse> {
  /**
   * The number of bytes that have been processed for the given resource.
   *
   * @generated from field: int64 committed_size = 1;
   */
  committedSize: bigint;

  /**
   * `complete` is `true` only if the client has sent a `WriteRequest` with
   * `finish_write` set to true, and the server has processed that request.
   *
   * @generated from field: bool complete = 2;
   */
  complete: boolean;

  constructor(data?: PartialMessage<QueryWriteStatusResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.bytestream.QueryWriteStatusResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryWriteStatusResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryWriteStatusResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryWriteStatusResponse;

  static equals(a: QueryWriteStatusResponse | PlainMessage<QueryWriteStatusResponse> | undefined, b: QueryWriteStatusResponse | PlainMessage<QueryWriteStatusResponse> | undefined): boolean;
}

