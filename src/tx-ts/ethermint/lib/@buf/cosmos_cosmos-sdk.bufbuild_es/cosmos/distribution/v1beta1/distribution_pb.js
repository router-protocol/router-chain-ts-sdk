// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/distribution/v1beta1/distribution.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Coin, DecCoin } from "../../base/v1beta1/coin_pb.js";

/**
 * Params defines the set of params for the distribution module.
 *
 * @generated from message cosmos.distribution.v1beta1.Params
 */
export const Params = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.Params",
  () => [
    { no: 1, name: "community_tax", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_proposer_reward", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bonus_proposer_reward", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "withdraw_addr_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorHistoricalRewards
 */
export const ValidatorHistoricalRewards = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
  () => [
    { no: 1, name: "cumulative_reward_ratio", kind: "message", T: DecCoin, repeated: true },
    { no: 2, name: "reference_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorCurrentRewards
 */
export const ValidatorCurrentRewards = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.ValidatorCurrentRewards",
  () => [
    { no: 1, name: "rewards", kind: "message", T: DecCoin, repeated: true },
    { no: 2, name: "period", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorAccumulatedCommission
 */
export const ValidatorAccumulatedCommission = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
  () => [
    { no: 1, name: "commission", kind: "message", T: DecCoin, repeated: true },
  ],
);

/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorOutstandingRewards
 */
export const ValidatorOutstandingRewards = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
  () => [
    { no: 1, name: "rewards", kind: "message", T: DecCoin, repeated: true },
  ],
);

/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorSlashEvent
 */
export const ValidatorSlashEvent = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.ValidatorSlashEvent",
  () => [
    { no: 1, name: "validator_period", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "fraction", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ValidatorSlashEvents is a collection of ValidatorSlashEvent messages.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorSlashEvents
 */
export const ValidatorSlashEvents = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.ValidatorSlashEvents",
  () => [
    { no: 1, name: "validator_slash_events", kind: "message", T: ValidatorSlashEvent, repeated: true },
  ],
);

/**
 * FeePool is the global fee pool for distribution.
 *
 * @generated from message cosmos.distribution.v1beta1.FeePool
 */
export const FeePool = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.FeePool",
  () => [
    { no: 1, name: "community_pool", kind: "message", T: DecCoin, repeated: true },
  ],
);

/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 *
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 *
 * @generated from message cosmos.distribution.v1beta1.CommunityPoolSpendProposal
 * @deprecated
 */
export const CommunityPoolSpendProposal = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "message", T: Coin, repeated: true },
  ],
);

/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegatorStartingInfo
 */
export const DelegatorStartingInfo = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.DelegatorStartingInfo",
  () => [
    { no: 1, name: "previous_period", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "stake", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegationDelegatorReward
 */
export const DelegationDelegatorReward = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.DelegationDelegatorReward",
  () => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reward", kind: "message", T: DecCoin, repeated: true },
  ],
);

/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 *
 * @generated from message cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit
 */
export const CommunityPoolSpendProposalWithDeposit = proto3.makeMessageType(
  "cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "deposit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

