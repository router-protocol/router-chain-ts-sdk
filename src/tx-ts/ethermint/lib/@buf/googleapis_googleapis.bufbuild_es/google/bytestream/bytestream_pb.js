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

import { proto3 } from "@bufbuild/protobuf";

/**
 * Request object for ByteStream.Read.
 *
 * @generated from message google.bytestream.ReadRequest
 */
export const ReadRequest = proto3.makeMessageType(
  "google.bytestream.ReadRequest",
  () => [
    { no: 1, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "read_offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "read_limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response object for ByteStream.Read.
 *
 * @generated from message google.bytestream.ReadResponse
 */
export const ReadResponse = proto3.makeMessageType(
  "google.bytestream.ReadResponse",
  () => [
    { no: 10, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Request object for ByteStream.Write.
 *
 * @generated from message google.bytestream.WriteRequest
 */
export const WriteRequest = proto3.makeMessageType(
  "google.bytestream.WriteRequest",
  () => [
    { no: 1, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "write_offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "finish_write", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Response object for ByteStream.Write.
 *
 * @generated from message google.bytestream.WriteResponse
 */
export const WriteResponse = proto3.makeMessageType(
  "google.bytestream.WriteResponse",
  () => [
    { no: 1, name: "committed_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Request object for ByteStream.QueryWriteStatus.
 *
 * @generated from message google.bytestream.QueryWriteStatusRequest
 */
export const QueryWriteStatusRequest = proto3.makeMessageType(
  "google.bytestream.QueryWriteStatusRequest",
  () => [
    { no: 1, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response object for ByteStream.QueryWriteStatus.
 *
 * @generated from message google.bytestream.QueryWriteStatusResponse
 */
export const QueryWriteStatusResponse = proto3.makeMessageType(
  "google.bytestream.QueryWriteStatusResponse",
  () => [
    { no: 1, name: "committed_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "complete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);
