// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/upgrade/v1beta1/query.proto (package cosmos.upgrade.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ModuleVersion, Plan } from "./upgrade_pb.js";

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryCurrentPlanRequest
 */
export const QueryCurrentPlanRequest = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
  [],
);

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryCurrentPlanResponse
 */
export const QueryCurrentPlanResponse = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
  () => [
    { no: 1, name: "plan", kind: "message", T: Plan },
  ],
);

/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAppliedPlanRequest
 */
export const QueryAppliedPlanRequest = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAppliedPlanResponse
 */
export const QueryAppliedPlanResponse = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest
 * @deprecated
 */
export const QueryUpgradedConsensusStateRequest = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
  () => [
    { no: 1, name: "last_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse
 * @deprecated
 */
export const QueryUpgradedConsensusStateResponse = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
  () => [
    { no: 2, name: "upgraded_consensus_state", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryModuleVersionsRequest
 */
export const QueryModuleVersionsRequest = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
  () => [
    { no: 1, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryModuleVersionsResponse
 */
export const QueryModuleVersionsResponse = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
  () => [
    { no: 1, name: "module_versions", kind: "message", T: ModuleVersion, repeated: true },
  ],
);

/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAuthorityRequest
 */
export const QueryAuthorityRequest = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryAuthorityRequest",
  [],
);

/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAuthorityResponse
 */
export const QueryAuthorityResponse = proto3.makeMessageType(
  "cosmos.upgrade.v1beta1.QueryAuthorityResponse",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

