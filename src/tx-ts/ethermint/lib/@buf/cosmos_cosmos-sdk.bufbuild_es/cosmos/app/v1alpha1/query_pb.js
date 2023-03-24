// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/app/v1alpha1/query.proto (package cosmos.app.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Config } from "./config_pb.js";

/**
 * QueryConfigRequest is the Query/Config request type.
 *
 * @generated from message cosmos.app.v1alpha1.QueryConfigRequest
 */
export const QueryConfigRequest = proto3.makeMessageType(
  "cosmos.app.v1alpha1.QueryConfigRequest",
  [],
);

/**
 * QueryConfigRequest is the Query/Config response type.
 *
 * @generated from message cosmos.app.v1alpha1.QueryConfigResponse
 */
export const QueryConfigResponse = proto3.makeMessageType(
  "cosmos.app.v1alpha1.QueryConfigResponse",
  () => [
    { no: 1, name: "config", kind: "message", T: Config },
  ],
);

