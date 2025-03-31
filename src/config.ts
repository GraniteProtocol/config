import { Config, GRANITE_MARKETS } from "./types";

export const config: Config = {
  defaultChainId: GRANITE_MARKETS.MAINNET,
  defaultNetwork: "mainnet",
  chains: {
    TESTNET: {
      id: GRANITE_MARKETS.TESTNET,
      name: "Testnet",
      rpc: "https://rpc-public-testnet.granite.world",
      indexer: "https://indexer-staging.granite.world",
      notificationBot: "https://notification-bot-staging.granite.world",
      tgBot: "https://t.me/TestGraniteBot",
      network: "testnet",
    },
    MAINNET: {
      id: GRANITE_MARKETS.MAINNET,
      name: "Mainnet",
      rpc: "https://leather.granite.world",
      indexer: "https://indexer.granite.world",
      notificationBot: "https://notification-bot.granite.world",
      tgBot: "https://t.me/GraniteFinanceBot",
      network: "mainnet",
    },
    MAINNET_STAGING: {
      id: GRANITE_MARKETS.MAINNET_STAGING,
      name: "Mainnet staging",
      rpc: "https://leather.granite.world",
      indexer: "https://indexer.granite.world",
      notificationBot: "",
      tgBot: "",
      network: "mainnet",
    },
  },
  markets: {
    TESTNET: {
      chain_id: GRANITE_MARKETS.TESTNET,
      market_asset: {
        display_name: "USDC",
        contract: {
          id: "mock-usdc",
          name: "mock-usdc",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
        decimals: 8,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        price_feed:
          "eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
        asset_cap: 1000000000000,
        dust_threshold: 0.01,
      },
      share_token: {
        display_name: "gUSDC",
        contract: {
          id: "state-v1",
          name: "state-v1",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
        decimals: 8,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd/logo.png",
      },
      collaterals: [
        {
          display_name: "BTC",
          maxLTV: 0.7,
          liquidationLTV: 0.8,
          liquidationPremium: 0.1,
          contract: {
            id: "mock-btc",
            name: "mock-btc",
            principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
          },
          decimals: 8,
          display_decimals: 5,
          image:
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
          price_feed:
            "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        },
        {
          display_name: "ETH",
          maxLTV: 0.5,
          liquidationLTV: 0.51,
          liquidationPremium: 0.1,
          contract: {
            id: "mock-eth",
            name: "mock-eth",
            principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
          },
          decimals: 8,
          display_decimals: 4,
          image:
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
          price_feed:
            "ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
        },
      ],
      contracts: {
        PYTH: {
          id: "pyth-governance-v2",
          name: "pyth-governance-v2",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
        STATE: {
          id: "lp-token",
          name: "state-v1",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
        LP: {
          id: "liquidity-provider-v1",
          name: "liquidity-provider-v1",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
        BORROWER: {
          id: "borrower-v1",
          name: "borrower-v1",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
        LIQUIDATOR: {
          id: "liquidator-v1",
          name: "liquidator-v1",
          principal: "ST12YKQ22YZZF044Q1SW8W9A3BRZMCY2XSQ8YWBK8",
        },
        INTEREST_RATE: {
          id: "linear-kinked-ir-v1",
          name: "linear-kinked-ir-v1",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
        GOVERNANCE: {
          id: "governance-v1",
          name: "governance-v1",
          principal: "ST20M5GABDT6WYJHXBT5CDH4501V1Q65242SPRMXH",
        },
      },
      ir_params: {
        baseIR: 3,
        slope1: 0.13,
        slope2: 2,
        urKink: 0.7,
      },
      lp_incentives: [],
      protocol_reserve_percentage: 0.2,
      scaling_factor: 1000000000000,
    },
    MAINNET: {
      chain_id: GRANITE_MARKETS.MAINNET,
      market_asset: {
        display_name: "aeUSDC",
        contract: {
          id: "aeUSDC",
          name: "token-aeusdc",
          principal: "SP3Y2ZSH8P7D50B0VBTSX11S7XSG24M1VB9YFQA4K",
        },
        decimals: 6,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        price_feed:
          "eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
        asset_cap: 250000,
        dust_threshold: 0.01,
      },
      share_token: {
        display_name: "gUSDC",
        contract: {
          id: "state-v1",
          name: "state-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
        decimals: 6,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd/logo.png",
      },
      collaterals: [
        {
          display_name: "sBTC",
          maxLTV: 0.5,
          liquidationLTV: 0.65,
          liquidationPremium: 0.1,
          contract: {
            id: "sbtc-token",
            name: "sbtc-token",
            principal: "SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4",
          },
          decimals: 8,
          display_decimals: 5,
          image:
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
          price_feed:
            "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        },
      ],
      contracts: {
        PYTH: {
          id: "pyth-governance-v2",
          name: "pyth-governance-v2",
          principal: "SP3R4F6C1J3JQWWCVZ3S7FRRYPMYG6ZW6RZK31FXY",
        },
        STATE: {
          id: "lp-token",
          name: "state-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
        LP: {
          id: "liquidity-provider-v1",
          name: "liquidity-provider-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
        BORROWER: {
          id: "borrower-v1",
          name: "borrower-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
        LIQUIDATOR: {
          id: "liquidator-v1",
          name: "liquidator-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
        INTEREST_RATE: {
          id: "linear-kinked-ir-v1",
          name: "linear-kinked-ir-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
        GOVERNANCE: {
          id: "governance-v1",
          name: "governance-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
      },
      ir_params: {
        baseIR: 0.04,
        slope1: 0.05,
        slope2: 0.75,
        urKink: 0.8,
      },
      lp_incentives: [
        {
          startDate: 1742824800,
          endDate: 1742911200,
          rewards: 1000000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP2S2GQ1PPQNVEB1GRQBTJJ0WPKS0ZP8CMVX4CJ88",
          },
        },
      ],
      protocol_reserve_percentage: 0.25,
      scaling_factor: 1000000000000,
    },

    MAINNET_STAGING: {
      chain_id: GRANITE_MARKETS.MAINNET_STAGING,
      market_asset: {
        display_name: "aeUSDC",
        contract: {
          id: "aeUSDC",
          name: "token-aeusdc",
          principal: "SP3Y2ZSH8P7D50B0VBTSX11S7XSG24M1VB9YFQA4K",
        },
        decimals: 6,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        price_feed:
          "eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
        asset_cap: 250000,
        dust_threshold: 0.01,
      },
      share_token: {
        display_name: "gUSDC",
        contract: {
          id: "state-v1",
          name: "state-v1",
          principal: "SP1M6MHD4EJ70MPJSH1C0PXSHCQ3D9C881AB7CVAZ",
        },
        decimals: 6,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd/logo.png",
      },
      collaterals: [
        {
          display_name: "sBTC",
          maxLTV: 0.5,
          liquidationLTV: 0.65,
          liquidationPremium: 0.1,
          contract: {
            id: "sbtc-token",
            name: "sbtc-token",
            principal: "SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4",
          },
          decimals: 8,
          display_decimals: 5,
          image:
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
          price_feed:
            "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        },
      ],
      contracts: {
        PYTH: {
          id: "pyth-governance-v2",
          name: "pyth-governance-v2",
          principal: "SP3R4F6C1J3JQWWCVZ3S7FRRYPMYG6ZW6RZK31FXY",
        },
        STATE: {
          id: "lp-token",
          name: "state-v1",
          principal: "SP1M6MHD4EJ70MPJSH1C0PXSHCQ3D9C881AB7CVAZ",
        },
        LP: {
          id: "liquidity-provider-v1",
          name: "liquidity-provider-v1",
          principal: "SP1M6MHD4EJ70MPJSH1C0PXSHCQ3D9C881AB7CVAZ",
        },
        BORROWER: {
          id: "borrower-v1",
          name: "borrower-v1",
          principal: "SP1M6MHD4EJ70MPJSH1C0PXSHCQ3D9C881AB7CVAZ",
        },
        LIQUIDATOR: {
          id: "liquidator-v1",
          name: "liquidator-v1",
          principal: "SP1XN57PMR6X7JZ8JXMNRAE065YBA3NKRCZF5N46B",
        },
        INTEREST_RATE: {
          id: "linear-kinked-ir-v1",
          name: "linear-kinked-ir-v1",
          principal: "SP1M6MHD4EJ70MPJSH1C0PXSHCQ3D9C881AB7CVAZ",
        },
        GOVERNANCE: {
          id: "governance-v1",
          name: "governance-v1",
          principal: "SP1M6MHD4EJ70MPJSH1C0PXSHCQ3D9C881AB7CVAZ",
        },
      },
      ir_params: {
        baseIR: 0.04,
        slope1: 0.05,
        slope2: 0.75,
        urKink: 0.8,
      },
      lp_incentives: [],
      protocol_reserve_percentage: 0.25,
      scaling_factor: 1000000000000,
    },
  },
  links: {
    discord: "",
    github: "https://github.com/GraniteProtocol",
    x: "https://x.com/granitebtc",
    telegram: "https://t.me/GraniteBTC",
  },
} as const;
