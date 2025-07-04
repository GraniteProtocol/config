declare const StacksNetworks: readonly [
  "mainnet",
  "testnet",
  "devnet",
  "mocknet",
];
type StacksNetworkName = (typeof StacksNetworks)[number];

export enum GRANITE_MARKETS {
  MAINNET = "MAINNET",
  MAINNET_STAGING = "MAINNET_STAGING",
}

export interface Chain {
  id: GRANITE_MARKETS;
  name: string;
  tgBot: string;
  network: StacksNetworkName;
}

export interface ScaledIRParams {
  urKink: number;
  slope1: number;
  slope2: number;
  baseIR: number;
}

export type SafetyModuleParams = {
  stakedPercentageKink: number;
  slope1: number;
  slope2: number;
  baseRewardRate: number;
};

export interface Contract {
  id: string;
  name: string;
  principal: string;
}

export interface Token {
  display_name: string;
  contract: Contract;
  decimals: number;
  display_decimals: number;
  image: string;
  price_feed?: string;
  asset_cap?: number;
  dust_threshold?: number;
}

export interface CollateralToken extends Token {
  liquidationLTV: number;
  liquidationPremium: number;
  maxLTV: number;
}

export enum GraniteContracts {
  PYTH = "PYTH",
  STATE = "STATE",
  LP = "LP",
  BORROWER = "BORROWER",
  LIQUIDATOR = "LIQUIDATOR",
  INTEREST_RATE = "INTEREST_RATE",
  GOVERNANCE = "GOVERNANCE",
  WITHDRAWAL_CAPS = "WITHDRAWAL_CAPS",
  SAFETY_MODULE = "SAFETY_MODULE",
}

export interface LpIncentivesEpoch {
  startDate: number;
  endDate: number;
  rewards: number;
  initiated: boolean;
  completed: boolean;
  contract: Contract;
}

export interface WithdrawalCaps {
  lp: number;
  debt: number;
  collaterals: number[];
  timeWindow: number;
}

export interface Market {
  chain_id: GRANITE_MARKETS;
  market_asset: Token;
  share_token: Token;
  collaterals: CollateralToken[];
  contracts: Record<GraniteContracts, Contract>;
  ir_params: ScaledIRParams;
  safety_module_params: SafetyModuleParams;
  protocol_reserve_percentage: number;
  scaling_factor: number;
  lp_incentives: LpIncentivesEpoch[];
  withdrawal_caps: WithdrawalCaps;
}

export interface Config {
  defaultChainId: GRANITE_MARKETS;
  defaultNetwork: StacksNetworkName;
  chains: Record<GRANITE_MARKETS, Chain>;
  markets: Record<GRANITE_MARKETS, Market>;
  links: {
    discord: string;
    github: string;
    x: string;
    telegram: string;
  };
}
