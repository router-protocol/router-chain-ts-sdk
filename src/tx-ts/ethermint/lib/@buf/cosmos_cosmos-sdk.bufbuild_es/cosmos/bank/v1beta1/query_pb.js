// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/bank/v1beta1/query.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Metadata, Params, SendEnabled } from "./bank_pb.js";

/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceRequest
 */
export const QueryBalanceRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryBalanceRequest",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceResponse
 */
export const QueryBalanceResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryBalanceResponse",
  () => [
    { no: 1, name: "balance", kind: "message", T: Coin },
  ],
);

/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
export const QueryAllBalancesRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryAllBalancesRequest",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
export const QueryAllBalancesResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryAllBalancesResponse",
  () => [
    { no: 1, name: "balances", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
export const QuerySpendableBalancesRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
export const QuerySpendableBalancesResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
  () => [
    { no: 1, name: "balances", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
export const QueryTotalSupplyRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryTotalSupplyRequest",
  () => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
export const QueryTotalSupplyResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryTotalSupplyResponse",
  () => [
    { no: 1, name: "supply", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
export const QuerySupplyOfRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QuerySupplyOfRequest",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
export const QuerySupplyOfResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QuerySupplyOfResponse",
  () => [
    { no: 1, name: "amount", kind: "message", T: Coin },
  ],
);

/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryParamsRequest",
  [],
);

/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryParamsResponse",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
  ],
);

/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
export const QueryDenomsMetadataRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
  () => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
export const QueryDenomsMetadataResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
  () => [
    { no: 1, name: "metadatas", kind: "message", T: Metadata, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
export const QueryDenomMetadataRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryDenomMetadataRequest",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
export const QueryDenomMetadataResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryDenomMetadataResponse",
  () => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
  ],
);

/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
export const QueryDenomOwnersRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryDenomOwnersRequest",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.DenomOwner
 */
export const DenomOwner = proto3.makeMessageType(
  "cosmos.bank.v1beta1.DenomOwner",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "balance", kind: "message", T: Coin },
  ],
);

/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
export const QueryDenomOwnersResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QueryDenomOwnersResponse",
  () => [
    { no: 1, name: "denom_owners", kind: "message", T: DenomOwner, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
export const QuerySendEnabledRequest = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QuerySendEnabledRequest",
  () => [
    { no: 1, name: "denoms", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 99, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
export const QuerySendEnabledResponse = proto3.makeMessageType(
  "cosmos.bank.v1beta1.QuerySendEnabledResponse",
  () => [
    { no: 1, name: "send_enabled", kind: "message", T: SendEnabled, repeated: true },
    { no: 99, name: "pagination", kind: "message", T: PageResponse },
  ],
);

