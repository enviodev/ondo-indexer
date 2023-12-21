/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
    CashKYCSenderReceiverContract_Approval_loader,
    CashKYCSenderReceiverContract_Approval_handler,
    CashKYCSenderReceiverContract_Initialized_loader,
    CashKYCSenderReceiverContract_Initialized_handler,
    CashKYCSenderReceiverContract_KYCRegistrySet_loader,
    CashKYCSenderReceiverContract_KYCRegistrySet_handler,
    CashKYCSenderReceiverContract_KYCRequirementGroupSet_loader,
    CashKYCSenderReceiverContract_KYCRequirementGroupSet_handler,
    CashKYCSenderReceiverContract_Paused_loader,
    CashKYCSenderReceiverContract_Paused_handler,
    CashKYCSenderReceiverContract_RoleAdminChanged_loader,
    CashKYCSenderReceiverContract_RoleAdminChanged_handler,
    CashKYCSenderReceiverContract_RoleGranted_loader,
    CashKYCSenderReceiverContract_RoleGranted_handler,
    CashKYCSenderReceiverContract_RoleRevoked_loader,
    CashKYCSenderReceiverContract_RoleRevoked_handler,
    CashKYCSenderReceiverContract_Transfer_loader,
    CashKYCSenderReceiverContract_Transfer_handler,
    CashKYCSenderReceiverContract_Unpaused_loader,
    CashKYCSenderReceiverContract_Unpaused_handler,
    CashManagerContract_AdminMintedCash_loader,
    CashManagerContract_AdminMintedCash_handler,
    CashManagerContract_AssetRecipientSet_loader,
    CashManagerContract_AssetRecipientSet_handler,
    CashManagerContract_AssetSenderSet_loader,
    CashManagerContract_AssetSenderSet_handler,
    CashManagerContract_EpochDurationSet_loader,
    CashManagerContract_EpochDurationSet_handler,
    CashManagerContract_EpochStartTimestampOffsetSet_loader,
    CashManagerContract_EpochStartTimestampOffsetSet_handler,
    CashManagerContract_ExcessMintClaimed_loader,
    CashManagerContract_ExcessMintClaimed_handler,
    CashManagerContract_ExchangeRateDeltaLimitSet_loader,
    CashManagerContract_ExchangeRateDeltaLimitSet_handler,
    CashManagerContract_FeeRecipientSet_loader,
    CashManagerContract_FeeRecipientSet_handler,
    CashManagerContract_InstantMint_loader,
    CashManagerContract_InstantMint_handler,
    CashManagerContract_InstantMintFeeSet_loader,
    CashManagerContract_InstantMintFeeSet_handler,
    CashManagerContract_InstantMintPercentSet_loader,
    CashManagerContract_InstantMintPercentSet_handler,
    CashManagerContract_InstantMintingEnabled_loader,
    CashManagerContract_InstantMintingEnabled_handler,
    CashManagerContract_KYCRegistrySet_loader,
    CashManagerContract_KYCRegistrySet_handler,
    CashManagerContract_KYCRequirementGroupSet_loader,
    CashManagerContract_KYCRequirementGroupSet_handler,
    CashManagerContract_MaxAdminMintAmountSet_loader,
    CashManagerContract_MaxAdminMintAmountSet_handler,
    CashManagerContract_MinimumDepositAmountSet_loader,
    CashManagerContract_MinimumDepositAmountSet_handler,
    CashManagerContract_MinimumRedeemAmountSet_loader,
    CashManagerContract_MinimumRedeemAmountSet_handler,
    CashManagerContract_MintCompleted_loader,
    CashManagerContract_MintCompleted_handler,
    CashManagerContract_MintExchangeRateCheckFailed_loader,
    CashManagerContract_MintExchangeRateCheckFailed_handler,
    CashManagerContract_MintExchangeRateOverridden_loader,
    CashManagerContract_MintExchangeRateOverridden_handler,
    CashManagerContract_MintExchangeRateSet_loader,
    CashManagerContract_MintExchangeRateSet_handler,
    CashManagerContract_MintFeeSet_loader,
    CashManagerContract_MintFeeSet_handler,
    CashManagerContract_MintLimitSet_loader,
    CashManagerContract_MintLimitSet_handler,
    CashManagerContract_MintRequested_loader,
    CashManagerContract_MintRequested_handler,
    CashManagerContract_Paused_loader,
    CashManagerContract_Paused_handler,
    CashManagerContract_PendingInstantMintBalanceSet_loader,
    CashManagerContract_PendingInstantMintBalanceSet_handler,
    CashManagerContract_PendingMintBalanceSet_loader,
    CashManagerContract_PendingMintBalanceSet_handler,
    CashManagerContract_PendingRedemptionBalanceSet_loader,
    CashManagerContract_PendingRedemptionBalanceSet_handler,
    CashManagerContract_RedeemLimitSet_loader,
    CashManagerContract_RedeemLimitSet_handler,
    CashManagerContract_RedemptionCompleted_loader,
    CashManagerContract_RedemptionCompleted_handler,
    CashManagerContract_RedemptionFeesCollected_loader,
    CashManagerContract_RedemptionFeesCollected_handler,
    CashManagerContract_RedemptionRequested_loader,
    CashManagerContract_RedemptionRequested_handler,
    CashManagerContract_RefundIssued_loader,
    CashManagerContract_RefundIssued_handler,
    CashManagerContract_RoleAdminChanged_loader,
    CashManagerContract_RoleAdminChanged_handler,
    CashManagerContract_RoleGranted_loader,
    CashManagerContract_RoleGranted_handler,
    CashManagerContract_RoleRevoked_loader,
    CashManagerContract_RoleRevoked_handler,
    CashManagerContract_Unpaused_loader,
    CashManagerContract_Unpaused_handler,
    KYCRegistryContract_KYCAddressAddViaSignature_loader,
    KYCRegistryContract_KYCAddressAddViaSignature_handler,
    KYCRegistryContract_KYCAddressesAdded_loader,
    KYCRegistryContract_KYCAddressesAdded_handler,
    KYCRegistryContract_KYCAddressesRemoved_loader,
    KYCRegistryContract_KYCAddressesRemoved_handler,
    KYCRegistryContract_RoleAdminChanged_loader,
    KYCRegistryContract_RoleAdminChanged_handler,
    KYCRegistryContract_RoleAssignedToKYCGroup_loader,
    KYCRegistryContract_RoleAssignedToKYCGroup_handler,
    KYCRegistryContract_RoleGranted_loader,
    KYCRegistryContract_RoleGranted_handler,
    KYCRegistryContract_RoleRevoked_loader,
    KYCRegistryContract_RoleRevoked_handler,
    OUSGManagerContract_AssetSenderSet_loader,
    OUSGManagerContract_AssetSenderSet_handler,
    OUSGManagerContract_DepositProofAdded_loader,
    OUSGManagerContract_DepositProofAdded_handler,
    OUSGManagerContract_DepositorOverwritten_loader,
    OUSGManagerContract_DepositorOverwritten_handler,
    OUSGManagerContract_FeeRecipientSet_loader,
    OUSGManagerContract_FeeRecipientSet_handler,
    OUSGManagerContract_KYCRegistrySet_loader,
    OUSGManagerContract_KYCRegistrySet_handler,
    OUSGManagerContract_KYCRequirementGroupSet_loader,
    OUSGManagerContract_KYCRequirementGroupSet_handler,
    OUSGManagerContract_MinimumDepositAmountSet_loader,
    OUSGManagerContract_MinimumDepositAmountSet_handler,
    OUSGManagerContract_MinimumRedemptionAmountSet_loader,
    OUSGManagerContract_MinimumRedemptionAmountSet_handler,
    OUSGManagerContract_MintCompleted_loader,
    OUSGManagerContract_MintCompleted_handler,
    OUSGManagerContract_MintFeeSet_loader,
    OUSGManagerContract_MintFeeSet_handler,
    OUSGManagerContract_MintRequested_loader,
    OUSGManagerContract_MintRequested_handler,
    OUSGManagerContract_NewPricerSet_loader,
    OUSGManagerContract_NewPricerSet_handler,
    OUSGManagerContract_OffChainRedemptionMinimumSet_loader,
    OUSGManagerContract_OffChainRedemptionMinimumSet_handler,
    OUSGManagerContract_OffChainRedemptionPaused_loader,
    OUSGManagerContract_OffChainRedemptionPaused_handler,
    OUSGManagerContract_OffChainRedemptionUnpaused_loader,
    OUSGManagerContract_OffChainRedemptionUnpaused_handler,
    OUSGManagerContract_PriceIdSetForDeposit_loader,
    OUSGManagerContract_PriceIdSetForDeposit_handler,
    OUSGManagerContract_PriceIdSetForRedemption_loader,
    OUSGManagerContract_PriceIdSetForRedemption_handler,
    OUSGManagerContract_RedeemerOverwritten_loader,
    OUSGManagerContract_RedeemerOverwritten_handler,
    OUSGManagerContract_RedemptionCompleted_loader,
    OUSGManagerContract_RedemptionCompleted_handler,
    OUSGManagerContract_RedemptionFeeSet_loader,
    OUSGManagerContract_RedemptionFeeSet_handler,
    OUSGManagerContract_RedemptionPaused_loader,
    OUSGManagerContract_RedemptionPaused_handler,
    OUSGManagerContract_RedemptionProofAdded_loader,
    OUSGManagerContract_RedemptionProofAdded_handler,
    OUSGManagerContract_RedemptionRequested_loader,
    OUSGManagerContract_RedemptionRequested_handler,
    OUSGManagerContract_RedemptionRequestedServicedOffChain_loader,
    OUSGManagerContract_RedemptionRequestedServicedOffChain_handler,
    OUSGManagerContract_RedemptionUnpaused_loader,
    OUSGManagerContract_RedemptionUnpaused_handler,
    OUSGManagerContract_RoleAdminChanged_loader,
    OUSGManagerContract_RoleAdminChanged_handler,
    OUSGManagerContract_RoleGranted_loader,
    OUSGManagerContract_RoleGranted_handler,
    OUSGManagerContract_RoleRevoked_loader,
    OUSGManagerContract_RoleRevoked_handler,
    OUSGManagerContract_SubscriptionPaused_loader,
    OUSGManagerContract_SubscriptionPaused_handler,
    OUSGManagerContract_SubscriptionUnpaused_loader,
    OUSGManagerContract_SubscriptionUnpaused_handler,
} from "../generated/src/Handlers.gen";

import {
    CashKYCSenderReceiver_ApprovalEntity,
    CashKYCSenderReceiver_InitializedEntity,
    CashKYCSenderReceiver_KYCRegistrySetEntity,
    CashKYCSenderReceiver_KYCRequirementGroupSetEntity,
    CashKYCSenderReceiver_PausedEntity,
    CashKYCSenderReceiver_RoleAdminChangedEntity,
    CashKYCSenderReceiver_RoleGrantedEntity,
    CashKYCSenderReceiver_RoleRevokedEntity,
    CashKYCSenderReceiver_TransferEntity,
    CashKYCSenderReceiver_UnpausedEntity,
    CashManager_AdminMintedCashEntity,
    CashManager_AssetRecipientSetEntity,
    CashManager_AssetSenderSetEntity,
    CashManager_EpochDurationSetEntity,
    CashManager_EpochStartTimestampOffsetSetEntity,
    CashManager_ExcessMintClaimedEntity,
    CashManager_ExchangeRateDeltaLimitSetEntity,
    CashManager_FeeRecipientSetEntity,
    CashManager_InstantMintEntity,
    CashManager_InstantMintFeeSetEntity,
    CashManager_InstantMintPercentSetEntity,
    CashManager_InstantMintingEnabledEntity,
    CashManager_KYCRegistrySetEntity,
    CashManager_KYCRequirementGroupSetEntity,
    CashManager_MaxAdminMintAmountSetEntity,
    CashManager_MinimumDepositAmountSetEntity,
    CashManager_MinimumRedeemAmountSetEntity,
    CashManager_MintCompletedEntity,
    CashManager_MintExchangeRateCheckFailedEntity,
    CashManager_MintExchangeRateOverriddenEntity,
    CashManager_MintExchangeRateSetEntity,
    CashManager_MintFeeSetEntity,
    CashManager_MintLimitSetEntity,
    CashManager_MintRequestedEntity,
    CashManager_PausedEntity,
    CashManager_PendingInstantMintBalanceSetEntity,
    CashManager_PendingMintBalanceSetEntity,
    CashManager_PendingRedemptionBalanceSetEntity,
    CashManager_RedeemLimitSetEntity,
    CashManager_RedemptionCompletedEntity,
    CashManager_RedemptionFeesCollectedEntity,
    CashManager_RedemptionRequestedEntity,
    CashManager_RefundIssuedEntity,
    CashManager_RoleAdminChangedEntity,
    CashManager_RoleGrantedEntity,
    CashManager_RoleRevokedEntity,
    CashManager_UnpausedEntity,
    KYCRegistry_KYCAddressAddViaSignatureEntity,
    KYCRegistry_KYCAddressesAddedEntity,
    KYCRegistry_KYCAddressesRemovedEntity,
    KYCRegistry_RoleAdminChangedEntity,
    KYCRegistry_RoleAssignedToKYCGroupEntity,
    KYCRegistry_RoleGrantedEntity,
    KYCRegistry_RoleRevokedEntity,
    OUSGManager_AssetSenderSetEntity,
    OUSGManager_DepositProofAddedEntity,
    OUSGManager_DepositorOverwrittenEntity,
    OUSGManager_FeeRecipientSetEntity,
    OUSGManager_KYCRegistrySetEntity,
    OUSGManager_KYCRequirementGroupSetEntity,
    OUSGManager_MinimumDepositAmountSetEntity,
    OUSGManager_MinimumRedemptionAmountSetEntity,
    OUSGManager_MintCompletedEntity,
    OUSGManager_MintFeeSetEntity,
    OUSGManager_MintRequestedEntity,
    OUSGManager_NewPricerSetEntity,
    OUSGManager_OffChainRedemptionMinimumSetEntity,
    OUSGManager_OffChainRedemptionPausedEntity,
    OUSGManager_OffChainRedemptionUnpausedEntity,
    OUSGManager_PriceIdSetForDepositEntity,
    OUSGManager_PriceIdSetForRedemptionEntity,
    OUSGManager_RedeemerOverwrittenEntity,
    OUSGManager_RedemptionCompletedEntity,
    OUSGManager_RedemptionFeeSetEntity,
    OUSGManager_RedemptionPausedEntity,
    OUSGManager_RedemptionProofAddedEntity,
    OUSGManager_RedemptionRequestedEntity,
    OUSGManager_RedemptionRequestedServicedOffChainEntity,
    OUSGManager_RedemptionUnpausedEntity,
    OUSGManager_RoleAdminChangedEntity,
    OUSGManager_RoleGrantedEntity,
    OUSGManager_RoleRevokedEntity,
    OUSGManager_SubscriptionPausedEntity,
    OUSGManager_SubscriptionUnpausedEntity,
EventsSummaryEntity
} from "./src/Types.gen";

const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
    cashKYCSenderReceiver_ApprovalCount: BigInt(0),
    cashKYCSenderReceiver_InitializedCount: BigInt(0),
    cashKYCSenderReceiver_KYCRegistrySetCount: BigInt(0),
    cashKYCSenderReceiver_KYCRequirementGroupSetCount: BigInt(0),
    cashKYCSenderReceiver_PausedCount: BigInt(0),
    cashKYCSenderReceiver_RoleAdminChangedCount: BigInt(0),
    cashKYCSenderReceiver_RoleGrantedCount: BigInt(0),
    cashKYCSenderReceiver_RoleRevokedCount: BigInt(0),
    cashKYCSenderReceiver_TransferCount: BigInt(0),
    cashKYCSenderReceiver_UnpausedCount: BigInt(0),
    cashManager_AdminMintedCashCount: BigInt(0),
    cashManager_AssetRecipientSetCount: BigInt(0),
    cashManager_AssetSenderSetCount: BigInt(0),
    cashManager_EpochDurationSetCount: BigInt(0),
    cashManager_EpochStartTimestampOffsetSetCount: BigInt(0),
    cashManager_ExcessMintClaimedCount: BigInt(0),
    cashManager_ExchangeRateDeltaLimitSetCount: BigInt(0),
    cashManager_FeeRecipientSetCount: BigInt(0),
    cashManager_InstantMintCount: BigInt(0),
    cashManager_InstantMintFeeSetCount: BigInt(0),
    cashManager_InstantMintPercentSetCount: BigInt(0),
    cashManager_InstantMintingEnabledCount: BigInt(0),
    cashManager_KYCRegistrySetCount: BigInt(0),
    cashManager_KYCRequirementGroupSetCount: BigInt(0),
    cashManager_MaxAdminMintAmountSetCount: BigInt(0),
    cashManager_MinimumDepositAmountSetCount: BigInt(0),
    cashManager_MinimumRedeemAmountSetCount: BigInt(0),
    cashManager_MintCompletedCount: BigInt(0),
    cashManager_MintExchangeRateCheckFailedCount: BigInt(0),
    cashManager_MintExchangeRateOverriddenCount: BigInt(0),
    cashManager_MintExchangeRateSetCount: BigInt(0),
    cashManager_MintFeeSetCount: BigInt(0),
    cashManager_MintLimitSetCount: BigInt(0),
    cashManager_MintRequestedCount: BigInt(0),
    cashManager_PausedCount: BigInt(0),
    cashManager_PendingInstantMintBalanceSetCount: BigInt(0),
    cashManager_PendingMintBalanceSetCount: BigInt(0),
    cashManager_PendingRedemptionBalanceSetCount: BigInt(0),
    cashManager_RedeemLimitSetCount: BigInt(0),
    cashManager_RedemptionCompletedCount: BigInt(0),
    cashManager_RedemptionFeesCollectedCount: BigInt(0),
    cashManager_RedemptionRequestedCount: BigInt(0),
    cashManager_RefundIssuedCount: BigInt(0),
    cashManager_RoleAdminChangedCount: BigInt(0),
    cashManager_RoleGrantedCount: BigInt(0),
    cashManager_RoleRevokedCount: BigInt(0),
    cashManager_UnpausedCount: BigInt(0),
    kYCRegistry_KYCAddressAddViaSignatureCount: BigInt(0),
    kYCRegistry_KYCAddressesAddedCount: BigInt(0),
    kYCRegistry_KYCAddressesRemovedCount: BigInt(0),
    kYCRegistry_RoleAdminChangedCount: BigInt(0),
    kYCRegistry_RoleAssignedToKYCGroupCount: BigInt(0),
    kYCRegistry_RoleGrantedCount: BigInt(0),
    kYCRegistry_RoleRevokedCount: BigInt(0),
    oUSGManager_AssetSenderSetCount: BigInt(0),
    oUSGManager_DepositProofAddedCount: BigInt(0),
    oUSGManager_DepositorOverwrittenCount: BigInt(0),
    oUSGManager_FeeRecipientSetCount: BigInt(0),
    oUSGManager_KYCRegistrySetCount: BigInt(0),
    oUSGManager_KYCRequirementGroupSetCount: BigInt(0),
    oUSGManager_MinimumDepositAmountSetCount: BigInt(0),
    oUSGManager_MinimumRedemptionAmountSetCount: BigInt(0),
    oUSGManager_MintCompletedCount: BigInt(0),
    oUSGManager_MintFeeSetCount: BigInt(0),
    oUSGManager_MintRequestedCount: BigInt(0),
    oUSGManager_NewPricerSetCount: BigInt(0),
    oUSGManager_OffChainRedemptionMinimumSetCount: BigInt(0),
    oUSGManager_OffChainRedemptionPausedCount: BigInt(0),
    oUSGManager_OffChainRedemptionUnpausedCount: BigInt(0),
    oUSGManager_PriceIdSetForDepositCount: BigInt(0),
    oUSGManager_PriceIdSetForRedemptionCount: BigInt(0),
    oUSGManager_RedeemerOverwrittenCount: BigInt(0),
    oUSGManager_RedemptionCompletedCount: BigInt(0),
    oUSGManager_RedemptionFeeSetCount: BigInt(0),
    oUSGManager_RedemptionPausedCount: BigInt(0),
    oUSGManager_RedemptionProofAddedCount: BigInt(0),
    oUSGManager_RedemptionRequestedCount: BigInt(0),
    oUSGManager_RedemptionRequestedServicedOffChainCount: BigInt(0),
    oUSGManager_RedemptionUnpausedCount: BigInt(0),
    oUSGManager_RoleAdminChangedCount: BigInt(0),
    oUSGManager_RoleGrantedCount: BigInt(0),
    oUSGManager_RoleRevokedCount: BigInt(0),
    oUSGManager_SubscriptionPausedCount: BigInt(0),
    oUSGManager_SubscriptionUnpausedCount: BigInt(0),
};

    CashKYCSenderReceiverContract_Approval_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_Approval_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_ApprovalCount: currentSummaryEntity.cashKYCSenderReceiver_ApprovalCount + BigInt(1),
  };

  const cashKYCSenderReceiver_ApprovalEntity: CashKYCSenderReceiver_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      spender: event.params.spender      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_Approval.set(cashKYCSenderReceiver_ApprovalEntity);
});
    CashKYCSenderReceiverContract_Initialized_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_Initialized_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_InitializedCount: currentSummaryEntity.cashKYCSenderReceiver_InitializedCount + BigInt(1),
  };

  const cashKYCSenderReceiver_InitializedEntity: CashKYCSenderReceiver_InitializedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      version: event.params.version      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_Initialized.set(cashKYCSenderReceiver_InitializedEntity);
});
    CashKYCSenderReceiverContract_KYCRegistrySet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_KYCRegistrySet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_KYCRegistrySetCount: currentSummaryEntity.cashKYCSenderReceiver_KYCRegistrySetCount + BigInt(1),
  };

  const cashKYCSenderReceiver_KYCRegistrySetEntity: CashKYCSenderReceiver_KYCRegistrySetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRegistry: event.params.oldRegistry      ,
      newRegistry: event.params.newRegistry      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_KYCRegistrySet.set(cashKYCSenderReceiver_KYCRegistrySetEntity);
});
    CashKYCSenderReceiverContract_KYCRequirementGroupSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_KYCRequirementGroupSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_KYCRequirementGroupSetCount: currentSummaryEntity.cashKYCSenderReceiver_KYCRequirementGroupSetCount + BigInt(1),
  };

  const cashKYCSenderReceiver_KYCRequirementGroupSetEntity: CashKYCSenderReceiver_KYCRequirementGroupSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRequirementGroup: event.params.oldRequirementGroup      ,
      newRequirementGroup: event.params.newRequirementGroup      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_KYCRequirementGroupSet.set(cashKYCSenderReceiver_KYCRequirementGroupSetEntity);
});
    CashKYCSenderReceiverContract_Paused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_Paused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_PausedCount: currentSummaryEntity.cashKYCSenderReceiver_PausedCount + BigInt(1),
  };

  const cashKYCSenderReceiver_PausedEntity: CashKYCSenderReceiver_PausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_Paused.set(cashKYCSenderReceiver_PausedEntity);
});
    CashKYCSenderReceiverContract_RoleAdminChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_RoleAdminChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_RoleAdminChangedCount: currentSummaryEntity.cashKYCSenderReceiver_RoleAdminChangedCount + BigInt(1),
  };

  const cashKYCSenderReceiver_RoleAdminChangedEntity: CashKYCSenderReceiver_RoleAdminChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      previousAdminRole: event.params.previousAdminRole      ,
      newAdminRole: event.params.newAdminRole      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_RoleAdminChanged.set(cashKYCSenderReceiver_RoleAdminChangedEntity);
});
    CashKYCSenderReceiverContract_RoleGranted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_RoleGranted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_RoleGrantedCount: currentSummaryEntity.cashKYCSenderReceiver_RoleGrantedCount + BigInt(1),
  };

  const cashKYCSenderReceiver_RoleGrantedEntity: CashKYCSenderReceiver_RoleGrantedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_RoleGranted.set(cashKYCSenderReceiver_RoleGrantedEntity);
});
    CashKYCSenderReceiverContract_RoleRevoked_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_RoleRevoked_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_RoleRevokedCount: currentSummaryEntity.cashKYCSenderReceiver_RoleRevokedCount + BigInt(1),
  };

  const cashKYCSenderReceiver_RoleRevokedEntity: CashKYCSenderReceiver_RoleRevokedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_RoleRevoked.set(cashKYCSenderReceiver_RoleRevokedEntity);
});
    CashKYCSenderReceiverContract_Transfer_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_Transfer_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_TransferCount: currentSummaryEntity.cashKYCSenderReceiver_TransferCount + BigInt(1),
  };

  const cashKYCSenderReceiver_TransferEntity: CashKYCSenderReceiver_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_Transfer.set(cashKYCSenderReceiver_TransferEntity);
});
    CashKYCSenderReceiverContract_Unpaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashKYCSenderReceiverContract_Unpaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashKYCSenderReceiver_UnpausedCount: currentSummaryEntity.cashKYCSenderReceiver_UnpausedCount + BigInt(1),
  };

  const cashKYCSenderReceiver_UnpausedEntity: CashKYCSenderReceiver_UnpausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashKYCSenderReceiver_Unpaused.set(cashKYCSenderReceiver_UnpausedEntity);
});
    CashManagerContract_AdminMintedCash_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_AdminMintedCash_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_AdminMintedCashCount: currentSummaryEntity.cashManager_AdminMintedCashCount + BigInt(1),
  };

  const cashManager_AdminMintedCashEntity: CashManager_AdminMintedCashEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      amount: event.params.amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_AdminMintedCash.set(cashManager_AdminMintedCashEntity);
});
    CashManagerContract_AssetRecipientSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_AssetRecipientSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_AssetRecipientSetCount: currentSummaryEntity.cashManager_AssetRecipientSetCount + BigInt(1),
  };

  const cashManager_AssetRecipientSetEntity: CashManager_AssetRecipientSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldAssetRecipient: event.params.oldAssetRecipient      ,
      newAssetRecipient: event.params.newAssetRecipient      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_AssetRecipientSet.set(cashManager_AssetRecipientSetEntity);
});
    CashManagerContract_AssetSenderSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_AssetSenderSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_AssetSenderSetCount: currentSummaryEntity.cashManager_AssetSenderSetCount + BigInt(1),
  };

  const cashManager_AssetSenderSetEntity: CashManager_AssetSenderSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldAssetSender: event.params.oldAssetSender      ,
      newAssetSender: event.params.newAssetSender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_AssetSenderSet.set(cashManager_AssetSenderSetEntity);
});
    CashManagerContract_EpochDurationSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_EpochDurationSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_EpochDurationSetCount: currentSummaryEntity.cashManager_EpochDurationSetCount + BigInt(1),
  };

  const cashManager_EpochDurationSetEntity: CashManager_EpochDurationSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldDuration: event.params.oldDuration      ,
      newDuration: event.params.newDuration      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_EpochDurationSet.set(cashManager_EpochDurationSetEntity);
});
    CashManagerContract_EpochStartTimestampOffsetSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_EpochStartTimestampOffsetSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_EpochStartTimestampOffsetSetCount: currentSummaryEntity.cashManager_EpochStartTimestampOffsetSetCount + BigInt(1),
  };

  const cashManager_EpochStartTimestampOffsetSetEntity: CashManager_EpochStartTimestampOffsetSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldOffset: event.params.oldOffset      ,
      newOffset: event.params.newOffset      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_EpochStartTimestampOffsetSet.set(cashManager_EpochStartTimestampOffsetSetEntity);
});
    CashManagerContract_ExcessMintClaimed_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_ExcessMintClaimed_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_ExcessMintClaimedCount: currentSummaryEntity.cashManager_ExcessMintClaimedCount + BigInt(1),
  };

  const cashManager_ExcessMintClaimedEntity: CashManager_ExcessMintClaimedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      cashAmountOwed: event.params.cashAmountOwed      ,
      cashAmountGiven: event.params.cashAmountGiven      ,
      collateralAmountDeposited: event.params.collateralAmountDeposited      ,
      exchangeRate: event.params.exchangeRate      ,
      epochClaimedFrom: event.params.epochClaimedFrom      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_ExcessMintClaimed.set(cashManager_ExcessMintClaimedEntity);
});
    CashManagerContract_ExchangeRateDeltaLimitSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_ExchangeRateDeltaLimitSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_ExchangeRateDeltaLimitSetCount: currentSummaryEntity.cashManager_ExchangeRateDeltaLimitSetCount + BigInt(1),
  };

  const cashManager_ExchangeRateDeltaLimitSetEntity: CashManager_ExchangeRateDeltaLimitSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldLimit: event.params.oldLimit      ,
      newLimit: event.params.newLimit      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_ExchangeRateDeltaLimitSet.set(cashManager_ExchangeRateDeltaLimitSetEntity);
});
    CashManagerContract_FeeRecipientSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_FeeRecipientSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_FeeRecipientSetCount: currentSummaryEntity.cashManager_FeeRecipientSetCount + BigInt(1),
  };

  const cashManager_FeeRecipientSetEntity: CashManager_FeeRecipientSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldFeeRecipient: event.params.oldFeeRecipient      ,
      newFeeRecipient: event.params.newFeeRecipient      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_FeeRecipientSet.set(cashManager_FeeRecipientSetEntity);
});
    CashManagerContract_InstantMint_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_InstantMint_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_InstantMintCount: currentSummaryEntity.cashManager_InstantMintCount + BigInt(1),
  };

  const cashManager_InstantMintEntity: CashManager_InstantMintEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      epoch: event.params.epoch      ,
      collateralAmountDeposited: event.params.collateralAmountDeposited      ,
      depositAmountAfterFee: event.params.depositAmountAfterFee      ,
      feeAmount: event.params.feeAmount      ,
      instantMintAmount: event.params.instantMintAmount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_InstantMint.set(cashManager_InstantMintEntity);
});
    CashManagerContract_InstantMintFeeSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_InstantMintFeeSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_InstantMintFeeSetCount: currentSummaryEntity.cashManager_InstantMintFeeSetCount + BigInt(1),
  };

  const cashManager_InstantMintFeeSetEntity: CashManager_InstantMintFeeSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldFee: event.params.oldFee      ,
      newFee: event.params.newFee      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_InstantMintFeeSet.set(cashManager_InstantMintFeeSetEntity);
});
    CashManagerContract_InstantMintPercentSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_InstantMintPercentSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_InstantMintPercentSetCount: currentSummaryEntity.cashManager_InstantMintPercentSetCount + BigInt(1),
  };

  const cashManager_InstantMintPercentSetEntity: CashManager_InstantMintPercentSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldInstantMintBPS: event.params.oldInstantMintBPS      ,
      newInstantMintBPS: event.params.newInstantMintBPS      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_InstantMintPercentSet.set(cashManager_InstantMintPercentSetEntity);
});
    CashManagerContract_InstantMintingEnabled_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_InstantMintingEnabled_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_InstantMintingEnabledCount: currentSummaryEntity.cashManager_InstantMintingEnabledCount + BigInt(1),
  };

  const cashManager_InstantMintingEnabledEntity: CashManager_InstantMintingEnabledEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      status: event.params.status      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_InstantMintingEnabled.set(cashManager_InstantMintingEnabledEntity);
});
    CashManagerContract_KYCRegistrySet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_KYCRegistrySet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_KYCRegistrySetCount: currentSummaryEntity.cashManager_KYCRegistrySetCount + BigInt(1),
  };

  const cashManager_KYCRegistrySetEntity: CashManager_KYCRegistrySetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRegistry: event.params.oldRegistry      ,
      newRegistry: event.params.newRegistry      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_KYCRegistrySet.set(cashManager_KYCRegistrySetEntity);
});
    CashManagerContract_KYCRequirementGroupSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_KYCRequirementGroupSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_KYCRequirementGroupSetCount: currentSummaryEntity.cashManager_KYCRequirementGroupSetCount + BigInt(1),
  };

  const cashManager_KYCRequirementGroupSetEntity: CashManager_KYCRequirementGroupSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRequirementGroup: event.params.oldRequirementGroup      ,
      newRequirementGroup: event.params.newRequirementGroup      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_KYCRequirementGroupSet.set(cashManager_KYCRequirementGroupSetEntity);
});
    CashManagerContract_MaxAdminMintAmountSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MaxAdminMintAmountSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MaxAdminMintAmountSetCount: currentSummaryEntity.cashManager_MaxAdminMintAmountSetCount + BigInt(1),
  };

  const cashManager_MaxAdminMintAmountSetEntity: CashManager_MaxAdminMintAmountSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldMaxAdminMintAmount: event.params.oldMaxAdminMintAmount      ,
      newMaxAdminMintAmount: event.params.newMaxAdminMintAmount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MaxAdminMintAmountSet.set(cashManager_MaxAdminMintAmountSetEntity);
});
    CashManagerContract_MinimumDepositAmountSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MinimumDepositAmountSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MinimumDepositAmountSetCount: currentSummaryEntity.cashManager_MinimumDepositAmountSetCount + BigInt(1),
  };

  const cashManager_MinimumDepositAmountSetEntity: CashManager_MinimumDepositAmountSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldMinimum: event.params.oldMinimum      ,
      newMinimum: event.params.newMinimum      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MinimumDepositAmountSet.set(cashManager_MinimumDepositAmountSetEntity);
});
    CashManagerContract_MinimumRedeemAmountSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MinimumRedeemAmountSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MinimumRedeemAmountSetCount: currentSummaryEntity.cashManager_MinimumRedeemAmountSetCount + BigInt(1),
  };

  const cashManager_MinimumRedeemAmountSetEntity: CashManager_MinimumRedeemAmountSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRedeemMin: event.params.oldRedeemMin      ,
      newRedeemMin: event.params.newRedeemMin      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MinimumRedeemAmountSet.set(cashManager_MinimumRedeemAmountSetEntity);
});
    CashManagerContract_MintCompleted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MintCompleted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MintCompletedCount: currentSummaryEntity.cashManager_MintCompletedCount + BigInt(1),
  };

  const cashManager_MintCompletedEntity: CashManager_MintCompletedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      cashAmountOut: event.params.cashAmountOut      ,
      collateralAmountDeposited: event.params.collateralAmountDeposited      ,
      exchangeRate: event.params.exchangeRate      ,
      epochClaimedFrom: event.params.epochClaimedFrom      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MintCompleted.set(cashManager_MintCompletedEntity);
});
    CashManagerContract_MintExchangeRateCheckFailed_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MintExchangeRateCheckFailed_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MintExchangeRateCheckFailedCount: currentSummaryEntity.cashManager_MintExchangeRateCheckFailedCount + BigInt(1),
  };

  const cashManager_MintExchangeRateCheckFailedEntity: CashManager_MintExchangeRateCheckFailedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      epoch: event.params.epoch      ,
      lastEpochRate: event.params.lastEpochRate      ,
      newRate: event.params.newRate      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MintExchangeRateCheckFailed.set(cashManager_MintExchangeRateCheckFailedEntity);
});
    CashManagerContract_MintExchangeRateOverridden_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MintExchangeRateOverridden_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MintExchangeRateOverriddenCount: currentSummaryEntity.cashManager_MintExchangeRateOverriddenCount + BigInt(1),
  };

  const cashManager_MintExchangeRateOverriddenEntity: CashManager_MintExchangeRateOverriddenEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      epoch: event.params.epoch      ,
      oldRate: event.params.oldRate      ,
      newRate: event.params.newRate      ,
      lastSetMintExchangeRate: event.params.lastSetMintExchangeRate      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MintExchangeRateOverridden.set(cashManager_MintExchangeRateOverriddenEntity);
});
    CashManagerContract_MintExchangeRateSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MintExchangeRateSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MintExchangeRateSetCount: currentSummaryEntity.cashManager_MintExchangeRateSetCount + BigInt(1),
  };

  const cashManager_MintExchangeRateSetEntity: CashManager_MintExchangeRateSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      epoch: event.params.epoch      ,
      oldRate: event.params.oldRate      ,
      newRate: event.params.newRate      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MintExchangeRateSet.set(cashManager_MintExchangeRateSetEntity);
});
    CashManagerContract_MintFeeSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MintFeeSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MintFeeSetCount: currentSummaryEntity.cashManager_MintFeeSetCount + BigInt(1),
  };

  const cashManager_MintFeeSetEntity: CashManager_MintFeeSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldFee: event.params.oldFee      ,
      newFee: event.params.newFee      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MintFeeSet.set(cashManager_MintFeeSetEntity);
});
    CashManagerContract_MintLimitSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MintLimitSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MintLimitSetCount: currentSummaryEntity.cashManager_MintLimitSetCount + BigInt(1),
  };

  const cashManager_MintLimitSetEntity: CashManager_MintLimitSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldLimit: event.params.oldLimit      ,
      newLimit: event.params.newLimit      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MintLimitSet.set(cashManager_MintLimitSetEntity);
});
    CashManagerContract_MintRequested_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_MintRequested_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_MintRequestedCount: currentSummaryEntity.cashManager_MintRequestedCount + BigInt(1),
  };

  const cashManager_MintRequestedEntity: CashManager_MintRequestedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      epoch: event.params.epoch      ,
      collateralAmountDeposited: event.params.collateralAmountDeposited      ,
      depositAmountAfterFee: event.params.depositAmountAfterFee      ,
      feeAmount: event.params.feeAmount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_MintRequested.set(cashManager_MintRequestedEntity);
});
    CashManagerContract_Paused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_Paused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_PausedCount: currentSummaryEntity.cashManager_PausedCount + BigInt(1),
  };

  const cashManager_PausedEntity: CashManager_PausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_Paused.set(cashManager_PausedEntity);
});
    CashManagerContract_PendingInstantMintBalanceSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_PendingInstantMintBalanceSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_PendingInstantMintBalanceSetCount: currentSummaryEntity.cashManager_PendingInstantMintBalanceSetCount + BigInt(1),
  };

  const cashManager_PendingInstantMintBalanceSetEntity: CashManager_PendingInstantMintBalanceSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      epoch: event.params.epoch      ,
      oldBalance: event.params.oldBalance      ,
      newBalance: event.params.newBalance      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_PendingInstantMintBalanceSet.set(cashManager_PendingInstantMintBalanceSetEntity);
});
    CashManagerContract_PendingMintBalanceSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_PendingMintBalanceSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_PendingMintBalanceSetCount: currentSummaryEntity.cashManager_PendingMintBalanceSetCount + BigInt(1),
  };

  const cashManager_PendingMintBalanceSetEntity: CashManager_PendingMintBalanceSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      epoch: event.params.epoch      ,
      oldBalance: event.params.oldBalance      ,
      newBalance: event.params.newBalance      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_PendingMintBalanceSet.set(cashManager_PendingMintBalanceSetEntity);
});
    CashManagerContract_PendingRedemptionBalanceSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_PendingRedemptionBalanceSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_PendingRedemptionBalanceSetCount: currentSummaryEntity.cashManager_PendingRedemptionBalanceSetCount + BigInt(1),
  };

  const cashManager_PendingRedemptionBalanceSetEntity: CashManager_PendingRedemptionBalanceSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      epoch: event.params.epoch      ,
      balance: event.params.balance      ,
      totalBurned: event.params.totalBurned      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_PendingRedemptionBalanceSet.set(cashManager_PendingRedemptionBalanceSetEntity);
});
    CashManagerContract_RedeemLimitSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RedeemLimitSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RedeemLimitSetCount: currentSummaryEntity.cashManager_RedeemLimitSetCount + BigInt(1),
  };

  const cashManager_RedeemLimitSetEntity: CashManager_RedeemLimitSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldLimit: event.params.oldLimit      ,
      newLimit: event.params.newLimit      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RedeemLimitSet.set(cashManager_RedeemLimitSetEntity);
});
    CashManagerContract_RedemptionCompleted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RedemptionCompleted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RedemptionCompletedCount: currentSummaryEntity.cashManager_RedemptionCompletedCount + BigInt(1),
  };

  const cashManager_RedemptionCompletedEntity: CashManager_RedemptionCompletedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      cashAmountRequested: event.params.cashAmountRequested      ,
      collateralAmountReturned: event.params.collateralAmountReturned      ,
      epoch: event.params.epoch      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RedemptionCompleted.set(cashManager_RedemptionCompletedEntity);
});
    CashManagerContract_RedemptionFeesCollected_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RedemptionFeesCollected_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RedemptionFeesCollectedCount: currentSummaryEntity.cashManager_RedemptionFeesCollectedCount + BigInt(1),
  };

  const cashManager_RedemptionFeesCollectedEntity: CashManager_RedemptionFeesCollectedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      beneficiary: event.params.beneficiary      ,
      collateralAmountOut: event.params.collateralAmountOut      ,
      epoch: event.params.epoch      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RedemptionFeesCollected.set(cashManager_RedemptionFeesCollectedEntity);
});
    CashManagerContract_RedemptionRequested_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RedemptionRequested_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RedemptionRequestedCount: currentSummaryEntity.cashManager_RedemptionRequestedCount + BigInt(1),
  };

  const cashManager_RedemptionRequestedEntity: CashManager_RedemptionRequestedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      cashAmountIn: event.params.cashAmountIn      ,
      epoch: event.params.epoch      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RedemptionRequested.set(cashManager_RedemptionRequestedEntity);
});
    CashManagerContract_RefundIssued_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RefundIssued_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RefundIssuedCount: currentSummaryEntity.cashManager_RefundIssuedCount + BigInt(1),
  };

  const cashManager_RefundIssuedEntity: CashManager_RefundIssuedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      cashAmountOut: event.params.cashAmountOut      ,
      epoch: event.params.epoch      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RefundIssued.set(cashManager_RefundIssuedEntity);
});
    CashManagerContract_RoleAdminChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RoleAdminChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RoleAdminChangedCount: currentSummaryEntity.cashManager_RoleAdminChangedCount + BigInt(1),
  };

  const cashManager_RoleAdminChangedEntity: CashManager_RoleAdminChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      previousAdminRole: event.params.previousAdminRole      ,
      newAdminRole: event.params.newAdminRole      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RoleAdminChanged.set(cashManager_RoleAdminChangedEntity);
});
    CashManagerContract_RoleGranted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RoleGranted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RoleGrantedCount: currentSummaryEntity.cashManager_RoleGrantedCount + BigInt(1),
  };

  const cashManager_RoleGrantedEntity: CashManager_RoleGrantedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RoleGranted.set(cashManager_RoleGrantedEntity);
});
    CashManagerContract_RoleRevoked_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_RoleRevoked_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_RoleRevokedCount: currentSummaryEntity.cashManager_RoleRevokedCount + BigInt(1),
  };

  const cashManager_RoleRevokedEntity: CashManager_RoleRevokedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_RoleRevoked.set(cashManager_RoleRevokedEntity);
});
    CashManagerContract_Unpaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    CashManagerContract_Unpaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    cashManager_UnpausedCount: currentSummaryEntity.cashManager_UnpausedCount + BigInt(1),
  };

  const cashManager_UnpausedEntity: CashManager_UnpausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.CashManager_Unpaused.set(cashManager_UnpausedEntity);
});
    KYCRegistryContract_KYCAddressAddViaSignature_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    KYCRegistryContract_KYCAddressAddViaSignature_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    kYCRegistry_KYCAddressAddViaSignatureCount: currentSummaryEntity.kYCRegistry_KYCAddressAddViaSignatureCount + BigInt(1),
  };

  const kYCRegistry_KYCAddressAddViaSignatureEntity: KYCRegistry_KYCAddressAddViaSignatureEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      user: event.params.user      ,
      signer: event.params.signer      ,
      kycRequirementGroup: event.params.kycRequirementGroup      ,
      deadline: event.params.deadline      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.KYCRegistry_KYCAddressAddViaSignature.set(kYCRegistry_KYCAddressAddViaSignatureEntity);
});
    KYCRegistryContract_KYCAddressesAdded_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    KYCRegistryContract_KYCAddressesAdded_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    kYCRegistry_KYCAddressesAddedCount: currentSummaryEntity.kYCRegistry_KYCAddressesAddedCount + BigInt(1),
  };

  const kYCRegistry_KYCAddressesAddedEntity: KYCRegistry_KYCAddressesAddedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      kycRequirementGroup: event.params.kycRequirementGroup      ,
      addresses: event.params.addresses      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.KYCRegistry_KYCAddressesAdded.set(kYCRegistry_KYCAddressesAddedEntity);
});
    KYCRegistryContract_KYCAddressesRemoved_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    KYCRegistryContract_KYCAddressesRemoved_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    kYCRegistry_KYCAddressesRemovedCount: currentSummaryEntity.kYCRegistry_KYCAddressesRemovedCount + BigInt(1),
  };

  const kYCRegistry_KYCAddressesRemovedEntity: KYCRegistry_KYCAddressesRemovedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      kycRequirementGroup: event.params.kycRequirementGroup      ,
      addresses: event.params.addresses      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.KYCRegistry_KYCAddressesRemoved.set(kYCRegistry_KYCAddressesRemovedEntity);
});
    KYCRegistryContract_RoleAdminChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    KYCRegistryContract_RoleAdminChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    kYCRegistry_RoleAdminChangedCount: currentSummaryEntity.kYCRegistry_RoleAdminChangedCount + BigInt(1),
  };

  const kYCRegistry_RoleAdminChangedEntity: KYCRegistry_RoleAdminChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      previousAdminRole: event.params.previousAdminRole      ,
      newAdminRole: event.params.newAdminRole      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.KYCRegistry_RoleAdminChanged.set(kYCRegistry_RoleAdminChangedEntity);
});
    KYCRegistryContract_RoleAssignedToKYCGroup_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    KYCRegistryContract_RoleAssignedToKYCGroup_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    kYCRegistry_RoleAssignedToKYCGroupCount: currentSummaryEntity.kYCRegistry_RoleAssignedToKYCGroupCount + BigInt(1),
  };

  const kYCRegistry_RoleAssignedToKYCGroupEntity: KYCRegistry_RoleAssignedToKYCGroupEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      kycRequirementGroup: event.params.kycRequirementGroup      ,
      role: event.params.role      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.KYCRegistry_RoleAssignedToKYCGroup.set(kYCRegistry_RoleAssignedToKYCGroupEntity);
});
    KYCRegistryContract_RoleGranted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    KYCRegistryContract_RoleGranted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    kYCRegistry_RoleGrantedCount: currentSummaryEntity.kYCRegistry_RoleGrantedCount + BigInt(1),
  };

  const kYCRegistry_RoleGrantedEntity: KYCRegistry_RoleGrantedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.KYCRegistry_RoleGranted.set(kYCRegistry_RoleGrantedEntity);
});
    KYCRegistryContract_RoleRevoked_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    KYCRegistryContract_RoleRevoked_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    kYCRegistry_RoleRevokedCount: currentSummaryEntity.kYCRegistry_RoleRevokedCount + BigInt(1),
  };

  const kYCRegistry_RoleRevokedEntity: KYCRegistry_RoleRevokedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.KYCRegistry_RoleRevoked.set(kYCRegistry_RoleRevokedEntity);
});
    OUSGManagerContract_AssetSenderSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_AssetSenderSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_AssetSenderSetCount: currentSummaryEntity.oUSGManager_AssetSenderSetCount + BigInt(1),
  };

  const oUSGManager_AssetSenderSetEntity: OUSGManager_AssetSenderSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldAssetSender: event.params.oldAssetSender      ,
      newAssetSender: event.params.newAssetSender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_AssetSenderSet.set(oUSGManager_AssetSenderSetEntity);
});
    OUSGManagerContract_DepositProofAdded_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_DepositProofAdded_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_DepositProofAddedCount: currentSummaryEntity.oUSGManager_DepositProofAddedCount + BigInt(1),
  };

  const oUSGManager_DepositProofAddedEntity: OUSGManager_DepositProofAddedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      txHash: event.params.txHash      ,
      user: event.params.user      ,
      depositAmountAfterFee: event.params.depositAmountAfterFee      ,
      feeAmount: event.params.feeAmount      ,
      timestamp: event.params.timestamp      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_DepositProofAdded.set(oUSGManager_DepositProofAddedEntity);
});
    OUSGManagerContract_DepositorOverwritten_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_DepositorOverwritten_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_DepositorOverwrittenCount: currentSummaryEntity.oUSGManager_DepositorOverwrittenCount + BigInt(1),
  };

  const oUSGManager_DepositorOverwrittenEntity: OUSGManager_DepositorOverwrittenEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      depositId: event.params.depositId      ,
      oldDepositor: event.params.oldDepositor      ,
      newDepositor: event.params.newDepositor      ,
      oldPriceId: event.params.oldPriceId      ,
      newPriceId: event.params.newPriceId      ,
      oldDepositAmount: event.params.oldDepositAmount      ,
      newDepositAmount: event.params.newDepositAmount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_DepositorOverwritten.set(oUSGManager_DepositorOverwrittenEntity);
});
    OUSGManagerContract_FeeRecipientSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_FeeRecipientSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_FeeRecipientSetCount: currentSummaryEntity.oUSGManager_FeeRecipientSetCount + BigInt(1),
  };

  const oUSGManager_FeeRecipientSetEntity: OUSGManager_FeeRecipientSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldFeeRecipient: event.params.oldFeeRecipient      ,
      newFeeRecipient: event.params.newFeeRecipient      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_FeeRecipientSet.set(oUSGManager_FeeRecipientSetEntity);
});
    OUSGManagerContract_KYCRegistrySet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_KYCRegistrySet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_KYCRegistrySetCount: currentSummaryEntity.oUSGManager_KYCRegistrySetCount + BigInt(1),
  };

  const oUSGManager_KYCRegistrySetEntity: OUSGManager_KYCRegistrySetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRegistry: event.params.oldRegistry      ,
      newRegistry: event.params.newRegistry      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_KYCRegistrySet.set(oUSGManager_KYCRegistrySetEntity);
});
    OUSGManagerContract_KYCRequirementGroupSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_KYCRequirementGroupSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_KYCRequirementGroupSetCount: currentSummaryEntity.oUSGManager_KYCRequirementGroupSetCount + BigInt(1),
  };

  const oUSGManager_KYCRequirementGroupSetEntity: OUSGManager_KYCRequirementGroupSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRequirementGroup: event.params.oldRequirementGroup      ,
      newRequirementGroup: event.params.newRequirementGroup      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_KYCRequirementGroupSet.set(oUSGManager_KYCRequirementGroupSetEntity);
});
    OUSGManagerContract_MinimumDepositAmountSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_MinimumDepositAmountSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_MinimumDepositAmountSetCount: currentSummaryEntity.oUSGManager_MinimumDepositAmountSetCount + BigInt(1),
  };

  const oUSGManager_MinimumDepositAmountSetEntity: OUSGManager_MinimumDepositAmountSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldMinimum: event.params.oldMinimum      ,
      newMinimum: event.params.newMinimum      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_MinimumDepositAmountSet.set(oUSGManager_MinimumDepositAmountSetEntity);
});
    OUSGManagerContract_MinimumRedemptionAmountSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_MinimumRedemptionAmountSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_MinimumRedemptionAmountSetCount: currentSummaryEntity.oUSGManager_MinimumRedemptionAmountSetCount + BigInt(1),
  };

  const oUSGManager_MinimumRedemptionAmountSetEntity: OUSGManager_MinimumRedemptionAmountSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldRedemptionMin: event.params.oldRedemptionMin      ,
      newRedemptionMin: event.params.newRedemptionMin      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_MinimumRedemptionAmountSet.set(oUSGManager_MinimumRedemptionAmountSetEntity);
});
    OUSGManagerContract_MintCompleted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_MintCompleted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_MintCompletedCount: currentSummaryEntity.oUSGManager_MintCompletedCount + BigInt(1),
  };

  const oUSGManager_MintCompletedEntity: OUSGManager_MintCompletedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      depositId: event.params.depositId      ,
      rwaAmountOut: event.params.rwaAmountOut      ,
      collateralAmountDeposited: event.params.collateralAmountDeposited      ,
      price: event.params.price      ,
      priceId: event.params.priceId      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_MintCompleted.set(oUSGManager_MintCompletedEntity);
});
    OUSGManagerContract_MintFeeSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_MintFeeSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_MintFeeSetCount: currentSummaryEntity.oUSGManager_MintFeeSetCount + BigInt(1),
  };

  const oUSGManager_MintFeeSetEntity: OUSGManager_MintFeeSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldFee: event.params.oldFee      ,
      newFee: event.params.newFee      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_MintFeeSet.set(oUSGManager_MintFeeSetEntity);
});
    OUSGManagerContract_MintRequested_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_MintRequested_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_MintRequestedCount: currentSummaryEntity.oUSGManager_MintRequestedCount + BigInt(1),
  };

  const oUSGManager_MintRequestedEntity: OUSGManager_MintRequestedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      depositId: event.params.depositId      ,
      collateralAmountDeposited: event.params.collateralAmountDeposited      ,
      depositAmountAfterFee: event.params.depositAmountAfterFee      ,
      feeAmount: event.params.feeAmount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_MintRequested.set(oUSGManager_MintRequestedEntity);
});
    OUSGManagerContract_NewPricerSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_NewPricerSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_NewPricerSetCount: currentSummaryEntity.oUSGManager_NewPricerSetCount + BigInt(1),
  };

  const oUSGManager_NewPricerSetEntity: OUSGManager_NewPricerSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldPricer: event.params.oldPricer      ,
      newPricer: event.params.newPricer      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_NewPricerSet.set(oUSGManager_NewPricerSetEntity);
});
    OUSGManagerContract_OffChainRedemptionMinimumSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_OffChainRedemptionMinimumSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_OffChainRedemptionMinimumSetCount: currentSummaryEntity.oUSGManager_OffChainRedemptionMinimumSetCount + BigInt(1),
  };

  const oUSGManager_OffChainRedemptionMinimumSetEntity: OUSGManager_OffChainRedemptionMinimumSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldMinimum: event.params.oldMinimum      ,
      newMinimum: event.params.newMinimum      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_OffChainRedemptionMinimumSet.set(oUSGManager_OffChainRedemptionMinimumSetEntity);
});
    OUSGManagerContract_OffChainRedemptionPaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_OffChainRedemptionPaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_OffChainRedemptionPausedCount: currentSummaryEntity.oUSGManager_OffChainRedemptionPausedCount + BigInt(1),
  };

  const oUSGManager_OffChainRedemptionPausedEntity: OUSGManager_OffChainRedemptionPausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_OffChainRedemptionPaused.set(oUSGManager_OffChainRedemptionPausedEntity);
});
    OUSGManagerContract_OffChainRedemptionUnpaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_OffChainRedemptionUnpaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_OffChainRedemptionUnpausedCount: currentSummaryEntity.oUSGManager_OffChainRedemptionUnpausedCount + BigInt(1),
  };

  const oUSGManager_OffChainRedemptionUnpausedEntity: OUSGManager_OffChainRedemptionUnpausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_OffChainRedemptionUnpaused.set(oUSGManager_OffChainRedemptionUnpausedEntity);
});
    OUSGManagerContract_PriceIdSetForDeposit_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_PriceIdSetForDeposit_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_PriceIdSetForDepositCount: currentSummaryEntity.oUSGManager_PriceIdSetForDepositCount + BigInt(1),
  };

  const oUSGManager_PriceIdSetForDepositEntity: OUSGManager_PriceIdSetForDepositEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      depositIdSet: event.params.depositIdSet      ,
      priceIdSet: event.params.priceIdSet      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_PriceIdSetForDeposit.set(oUSGManager_PriceIdSetForDepositEntity);
});
    OUSGManagerContract_PriceIdSetForRedemption_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_PriceIdSetForRedemption_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_PriceIdSetForRedemptionCount: currentSummaryEntity.oUSGManager_PriceIdSetForRedemptionCount + BigInt(1),
  };

  const oUSGManager_PriceIdSetForRedemptionEntity: OUSGManager_PriceIdSetForRedemptionEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      redemptionIdSet: event.params.redemptionIdSet      ,
      priceIdSet: event.params.priceIdSet      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_PriceIdSetForRedemption.set(oUSGManager_PriceIdSetForRedemptionEntity);
});
    OUSGManagerContract_RedeemerOverwritten_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedeemerOverwritten_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedeemerOverwrittenCount: currentSummaryEntity.oUSGManager_RedeemerOverwrittenCount + BigInt(1),
  };

  const oUSGManager_RedeemerOverwrittenEntity: OUSGManager_RedeemerOverwrittenEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      redemptionId: event.params.redemptionId      ,
      oldRedeemer: event.params.oldRedeemer      ,
      newRedeemer: event.params.newRedeemer      ,
      oldPriceId: event.params.oldPriceId      ,
      newPriceId: event.params.newPriceId      ,
      oldRWATokenAmountBurned: event.params.oldRWATokenAmountBurned      ,
      newRWATokenAmountBurned: event.params.newRWATokenAmountBurned      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedeemerOverwritten.set(oUSGManager_RedeemerOverwrittenEntity);
});
    OUSGManagerContract_RedemptionCompleted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedemptionCompleted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedemptionCompletedCount: currentSummaryEntity.oUSGManager_RedemptionCompletedCount + BigInt(1),
  };

  const oUSGManager_RedemptionCompletedEntity: OUSGManager_RedemptionCompletedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      redemptionId: event.params.redemptionId      ,
      rwaAmountRequested: event.params.rwaAmountRequested      ,
      collateralAmountReturned: event.params.collateralAmountReturned      ,
      feeAmount: event.params.feeAmount      ,
      price: event.params.price      ,
      priceId: event.params.priceId      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedemptionCompleted.set(oUSGManager_RedemptionCompletedEntity);
});
    OUSGManagerContract_RedemptionFeeSet_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedemptionFeeSet_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedemptionFeeSetCount: currentSummaryEntity.oUSGManager_RedemptionFeeSetCount + BigInt(1),
  };

  const oUSGManager_RedemptionFeeSetEntity: OUSGManager_RedemptionFeeSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldFee: event.params.oldFee      ,
      newFee: event.params.newFee      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedemptionFeeSet.set(oUSGManager_RedemptionFeeSetEntity);
});
    OUSGManagerContract_RedemptionPaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedemptionPaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedemptionPausedCount: currentSummaryEntity.oUSGManager_RedemptionPausedCount + BigInt(1),
  };

  const oUSGManager_RedemptionPausedEntity: OUSGManager_RedemptionPausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedemptionPaused.set(oUSGManager_RedemptionPausedEntity);
});
    OUSGManagerContract_RedemptionProofAdded_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedemptionProofAdded_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedemptionProofAddedCount: currentSummaryEntity.oUSGManager_RedemptionProofAddedCount + BigInt(1),
  };

  const oUSGManager_RedemptionProofAddedEntity: OUSGManager_RedemptionProofAddedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      txHash: event.params.txHash      ,
      user: event.params.user      ,
      rwaAmountBurned: event.params.rwaAmountBurned      ,
      timestamp: event.params.timestamp      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedemptionProofAdded.set(oUSGManager_RedemptionProofAddedEntity);
});
    OUSGManagerContract_RedemptionRequested_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedemptionRequested_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedemptionRequestedCount: currentSummaryEntity.oUSGManager_RedemptionRequestedCount + BigInt(1),
  };

  const oUSGManager_RedemptionRequestedEntity: OUSGManager_RedemptionRequestedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      redemptionId: event.params.redemptionId      ,
      rwaAmountIn: event.params.rwaAmountIn      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedemptionRequested.set(oUSGManager_RedemptionRequestedEntity);
});
    OUSGManagerContract_RedemptionRequestedServicedOffChain_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedemptionRequestedServicedOffChain_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedemptionRequestedServicedOffChainCount: currentSummaryEntity.oUSGManager_RedemptionRequestedServicedOffChainCount + BigInt(1),
  };

  const oUSGManager_RedemptionRequestedServicedOffChainEntity: OUSGManager_RedemptionRequestedServicedOffChainEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      redemptionId: event.params.redemptionId      ,
      rwaTokenAmountIn: event.params.rwaTokenAmountIn      ,
      offChainDestination: event.params.offChainDestination      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedemptionRequestedServicedOffChain.set(oUSGManager_RedemptionRequestedServicedOffChainEntity);
});
    OUSGManagerContract_RedemptionUnpaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RedemptionUnpaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RedemptionUnpausedCount: currentSummaryEntity.oUSGManager_RedemptionUnpausedCount + BigInt(1),
  };

  const oUSGManager_RedemptionUnpausedEntity: OUSGManager_RedemptionUnpausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RedemptionUnpaused.set(oUSGManager_RedemptionUnpausedEntity);
});
    OUSGManagerContract_RoleAdminChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RoleAdminChanged_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RoleAdminChangedCount: currentSummaryEntity.oUSGManager_RoleAdminChangedCount + BigInt(1),
  };

  const oUSGManager_RoleAdminChangedEntity: OUSGManager_RoleAdminChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      previousAdminRole: event.params.previousAdminRole      ,
      newAdminRole: event.params.newAdminRole      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RoleAdminChanged.set(oUSGManager_RoleAdminChangedEntity);
});
    OUSGManagerContract_RoleGranted_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RoleGranted_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RoleGrantedCount: currentSummaryEntity.oUSGManager_RoleGrantedCount + BigInt(1),
  };

  const oUSGManager_RoleGrantedEntity: OUSGManager_RoleGrantedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RoleGranted.set(oUSGManager_RoleGrantedEntity);
});
    OUSGManagerContract_RoleRevoked_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_RoleRevoked_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_RoleRevokedCount: currentSummaryEntity.oUSGManager_RoleRevokedCount + BigInt(1),
  };

  const oUSGManager_RoleRevokedEntity: OUSGManager_RoleRevokedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      role: event.params.role      ,
      account: event.params.account      ,
      sender: event.params.sender      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_RoleRevoked.set(oUSGManager_RoleRevokedEntity);
});
    OUSGManagerContract_SubscriptionPaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_SubscriptionPaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_SubscriptionPausedCount: currentSummaryEntity.oUSGManager_SubscriptionPausedCount + BigInt(1),
  };

  const oUSGManager_SubscriptionPausedEntity: OUSGManager_SubscriptionPausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_SubscriptionPaused.set(oUSGManager_SubscriptionPausedEntity);
});
    OUSGManagerContract_SubscriptionUnpaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    OUSGManagerContract_SubscriptionUnpaused_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oUSGManager_SubscriptionUnpausedCount: currentSummaryEntity.oUSGManager_SubscriptionUnpausedCount + BigInt(1),
  };

  const oUSGManager_SubscriptionUnpausedEntity: OUSGManager_SubscriptionUnpausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OUSGManager_SubscriptionUnpaused.set(oUSGManager_SubscriptionUnpausedEntity);
});
