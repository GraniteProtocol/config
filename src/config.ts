import { Config, GRANITE_MARKETS } from "./types";

export const config: Config = {
  defaultChainId: GRANITE_MARKETS.MAINNET,
  defaultNetwork: "mainnet",
  chains: {
    MAINNET: {
      id: GRANITE_MARKETS.MAINNET,
      name: "Mainnet",
      tgBot: "https://t.me/GraniteFinanceBot",
      network: "mainnet",
    },
    MAINNET_STAGING: {
      id: GRANITE_MARKETS.MAINNET_STAGING,
      name: "Mainnet staging",
      tgBot: "",
      network: "mainnet",
    },
  },
  markets: {
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
        asset_cap: 12500000,
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
          principal: "SPRZH8YN496DYPM7Z2KY1V4P4B4NPJYWE5Q7D56Y",
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
        WITHDRAWAL_CAPS: {
          id: "",
          name: "",
          principal: "",
        },
        SAFETY_MODULE: {
          id: "",
          name: "",
          principal: "",
        },
      },
      ir_params: {
        baseIR: 0.005,
        slope1: 0.04,
        slope2: 3.1,
        urKink: 0.85,
      },
      safety_module_params: {
        stakedPercentageKink: 0,
        slope1: 0,
        slope2: 0,
        baseRewardRate: 0,
      },
      lp_incentives: [
        {
          startDate: 1744221780,
          endDate: 1744122780,
          rewards: 10000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP37SS3Z22V937APV1V7F5VYDKWWX4925K2B2ZMHC",
          },
        },
        {
          startDate: 1744302900,
          endDate: 1744821300,
          rewards: 1260000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP3ENJM52T5VE8EPK6S3A86NCWWQV8968GXVR9RQX",
          },
        },
        {
          startDate: 1744824900,
          endDate: 1745418900,
          rewards: 1230000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP1MX62KQEB7WPHWA5V8D1VSJ0J80S9CBXJQ7Q18Q",
          },
        },
        {
          startDate: 1745422500,
          endDate: 1746009300,
          rewards: 2451000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP26EDKK2BGBYHJW9KHK8EF9N9R3F3GQRSAFNTNYJ",
          },
        },
        {
          startDate: 1746002100,
          endDate: 1746635700,
          rewards: 2685000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP37JC08D5EM2T53JF09Y0ZEQKYTVW1Y8K7VDDGAC",
          },
        },
        {
          startDate: 1746636900,
          endDate: 1747240500,
          rewards: 4802000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SPQMP7TPG5C1P2FJMBJPVM1E0F751CFQWJJQ93F8",
          },
        },
        {
          startDate: 1747241100,
          endDate: 1747841700,
          rewards: 9890000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP1W8S33K6JBDEDZA2P01N0ARP1M433PBAC1PF123",
          },
        },
        {
          startDate: 1747842900,
          endDate: 1748446500,
          rewards: 11830000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP23MK2Z02H0D6H1SVFHFYGA45AQDW9HK9XZZXNSY",
          },
        },
        {
          startDate: 1748453100,
          endDate: 1749050700,
          rewards: 15185000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP1D1RBYJ97VA3XYJ2Y19E06CX2AKGB4QX12ETBAC",
          },
        },
        {
          startDate: 1749051300,
          endDate: 1749654000,
          rewards: 22260000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP6XCN5EE7KHWP4V7JP9K9RZYHK1J7S8M7NXWB5K",
          },
        },
        {
          startDate: 1749655500,
          endDate: 1750260900,
          rewards: 28393000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP2JZQ7BXSEV4H8KXD6ZT0NW293V5ENJR7Y12RPJ3",
          },
        },
        {
          startDate: 1750264320,
          endDate: 1750865100,
          rewards: 35491000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP2PRX1PQDFAKTP12TFMEZJNG7BAEF66ZVBD4YP24",
          },
        },
        {
          startDate: 1750865700,
          endDate: 1751469900,
          rewards: 30625000000,
          initiated: true,
          completed: true,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SPMCMPRRD1WQHKW5F7PRJW2AZV4K9AEH8SJTQMXF",
          },
        },
        {
          startDate: 1751470500,
          endDate: 1752074700,
          rewards: 30685000000,
          initiated: true,
          completed: false,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP184ER80H9V3JRA36W8EJKZ63NRMB1YPC1HFW55",
          },
        },
      ],
      protocol_reserve_percentage: 0.25,
      withdrawal_caps: {
        lp: 0,
        debt: 0,
        collaterals: [0],
        timeWindow: 86400,
      },
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
        asset_cap: 100000000000000,
        dust_threshold: 0.01,
      },
      share_token: {
        display_name: "gUSDC",
        contract: {
          id: "state-v1",
          name: "state-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        decimals: 6,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd/logo.png",
      },
      collaterals: [
        {
          display_name: "sBTC",
          maxLTV: 0.45,
          liquidationLTV: 0.45000001,
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
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        STATE: {
          id: "lp-token",
          name: "state-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        LP: {
          id: "liquidity-provider-v1",
          name: "liquidity-provider-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        BORROWER: {
          id: "borrower-v1",
          name: "borrower-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        LIQUIDATOR: {
          id: "liquidator-v1",
          name: "liquidator-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        INTEREST_RATE: {
          id: "linear-kinked-ir-v1",
          name: "linear-kinked-ir-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        GOVERNANCE: {
          id: "governance-v1",
          name: "governance-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        WITHDRAWAL_CAPS: {
          id: "daily-caps-v1",
          name: "daily-caps-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
        SAFETY_MODULE: {
          id: "staking-v1",
          name: "staking-v1",
          principal: "SP2R995XG7W1KHYSTGC6Q8AT0C79379W7C6133AQZ",
        },
      },
      ir_params: {
        baseIR: 3,
        slope1: 0.13,
        slope2: 2.0,
        urKink: 0.7,
      },
      safety_module_params: {
        stakedPercentageKink: 0.7,
        slope1: -0.5,
        slope2: -0.7,
        baseRewardRate: 0.3,
      },
      lp_incentives: [],
      protocol_reserve_percentage: 0,
      withdrawal_caps: {
        lp: 0.1,
        debt: 0.1,
        collaterals: [0],
        timeWindow: 86400,
      },
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
