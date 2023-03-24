// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/reflection/v1/reflection.proto (package cosmos.reflection.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FileDescriptorProto, proto3 } from "@bufbuild/protobuf";

/**
 * FileDescriptorsRequest is the Query/FileDescriptors request type.
 *
 * @generated from message cosmos.reflection.v1.FileDescriptorsRequest
 */
export const FileDescriptorsRequest = proto3.makeMessageType(
  "cosmos.reflection.v1.FileDescriptorsRequest",
  [],
);

/**
 * FileDescriptorsResponse is the Query/FileDescriptors response type.
 *
 * @generated from message cosmos.reflection.v1.FileDescriptorsResponse
 */
export const FileDescriptorsResponse = proto3.makeMessageType(
  "cosmos.reflection.v1.FileDescriptorsResponse",
  () => [
    { no: 1, name: "files", kind: "message", T: FileDescriptorProto, repeated: true },
  ],
);

