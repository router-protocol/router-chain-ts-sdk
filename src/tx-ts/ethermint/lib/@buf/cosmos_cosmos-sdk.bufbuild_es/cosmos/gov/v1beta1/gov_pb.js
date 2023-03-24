// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/gov/v1beta1/gov.proto (package cosmos.gov.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, Duration, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.VoteOption
 */
export const VoteOption = proto3.makeEnum(
  "cosmos.gov.v1beta1.VoteOption",
  [
    {no: 0, name: "VOTE_OPTION_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "VOTE_OPTION_YES", localName: "YES"},
    {no: 2, name: "VOTE_OPTION_ABSTAIN", localName: "ABSTAIN"},
    {no: 3, name: "VOTE_OPTION_NO", localName: "NO"},
    {no: 4, name: "VOTE_OPTION_NO_WITH_VETO", localName: "NO_WITH_VETO"},
  ],
);

/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.ProposalStatus
 */
export const ProposalStatus = proto3.makeEnum(
  "cosmos.gov.v1beta1.ProposalStatus",
  [
    {no: 0, name: "PROPOSAL_STATUS_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "PROPOSAL_STATUS_DEPOSIT_PERIOD", localName: "DEPOSIT_PERIOD"},
    {no: 2, name: "PROPOSAL_STATUS_VOTING_PERIOD", localName: "VOTING_PERIOD"},
    {no: 3, name: "PROPOSAL_STATUS_PASSED", localName: "PASSED"},
    {no: 4, name: "PROPOSAL_STATUS_REJECTED", localName: "REJECTED"},
    {no: 5, name: "PROPOSAL_STATUS_FAILED", localName: "FAILED"},
  ],
);

/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.gov.v1beta1.WeightedVoteOption
 */
export const WeightedVoteOption = proto3.makeMessageType(
  "cosmos.gov.v1beta1.WeightedVoteOption",
  () => [
    { no: 1, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 *
 * @generated from message cosmos.gov.v1beta1.TextProposal
 */
export const TextProposal = proto3.makeMessageType(
  "cosmos.gov.v1beta1.TextProposal",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Deposit
 */
export const Deposit = proto3.makeMessageType(
  "cosmos.gov.v1beta1.Deposit",
  () => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ],
);

/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Proposal
 */
export const Proposal = proto3.makeMessageType(
  "cosmos.gov.v1beta1.Proposal",
  () => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "content", kind: "message", T: Any },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 4, name: "final_tally_result", kind: "message", T: TallyResult },
    { no: 5, name: "submit_time", kind: "message", T: Timestamp },
    { no: 6, name: "deposit_end_time", kind: "message", T: Timestamp },
    { no: 7, name: "total_deposit", kind: "message", T: Coin, repeated: true },
    { no: 8, name: "voting_start_time", kind: "message", T: Timestamp },
    { no: 9, name: "voting_end_time", kind: "message", T: Timestamp },
  ],
);

/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.TallyResult
 */
export const TallyResult = proto3.makeMessageType(
  "cosmos.gov.v1beta1.TallyResult",
  () => [
    { no: 1, name: "yes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "abstain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "no", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "no_with_veto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1beta1.Vote
 */
export const Vote = proto3.makeMessageType(
  "cosmos.gov.v1beta1.Vote",
  () => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 4, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
  ],
);

/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.DepositParams
 */
export const DepositParams = proto3.makeMessageType(
  "cosmos.gov.v1beta1.DepositParams",
  () => [
    { no: 1, name: "min_deposit", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "max_deposit_period", kind: "message", T: Duration },
  ],
);

/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.VotingParams
 */
export const VotingParams = proto3.makeMessageType(
  "cosmos.gov.v1beta1.VotingParams",
  () => [
    { no: 1, name: "voting_period", kind: "message", T: Duration },
  ],
);

/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.TallyParams
 */
export const TallyParams = proto3.makeMessageType(
  "cosmos.gov.v1beta1.TallyParams",
  () => [
    { no: 1, name: "quorum", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "threshold", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "veto_threshold", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

