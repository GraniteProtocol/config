import { AEUSDC, SBTC, STX } from "./constants";
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
      pyth_fee: 10,
      flash_loan_fee: 0,
      market_asset: {
        display_name: "aeUSDC",
        contract: AEUSDC,
        decimals: 6,
        display_decimals: 4,
        image:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        price_feed:
          "eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
        asset_cap: 15000000,
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
          contract: SBTC,
          decimals: 8,
          display_decimals: 5,
          image:
            "https://teal-worldwide-cattle-228.mypinata.cloud/ipfs/bafkreigsh7sxsgbxfgx7mfvepqhtdkuec6nmzgwjscx5w3rg6ikoungz3q",
          price_feed:
            "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        },
      ],
      contracts: {
        STATE: {
          id: "lp-token",
          name: "state-v1",
          principal: "SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA",
        },
        LP: {
          id: "liquidity-provider-v1",
          name: "liquidity-provider-v1",
          principal: "SP3BJR4P3W2Y9G22HA595Z59VHBC9EQYRFWSKG743",
        },
        BORROWER: {
          id: "borrower-v1",
          name: "borrower-v1",
          principal: "SP3BJR4P3W2Y9G22HA595Z59VHBC9EQYRFWSKG743",
        },
        LIQUIDATOR: {
          id: "liquidator-v1",
          name: "liquidator-v1",
          principal: "SP3BJR4P3W2Y9G22HA595Z59VHBC9EQYRFWSKG743",
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
          id: "withdrawal-caps-v1",
          name: "withdrawal-caps-v1",
          principal: "SP3BJR4P3W2Y9G22HA595Z59VHBC9EQYRFWSKG743",
        },
        WITHDRAWAL_CAPS_UTILITY: {
          id: "withdrawal-caps-util-v1",
          name: "withdrawal-caps-util-v1",
          principal: "SP24JTGNHHZFZNG7EBD13VQRGA4HCSDVFWG9WV3RP",
        },
        SAFETY_MODULE: {
          id: "staking-v1",
          name: "staking-v1",
          principal: "SP3BJR4P3W2Y9G22HA595Z59VHBC9EQYRFWSKG743",
        },
        PYTH_STORAGE: {
          id: "pyth-storage-v3",
          name: "pyth-storage-v3",
          principal: "SP3R4F6C1J3JQWWCVZ3S7FRRYPMYG6ZW6RZK31FXY",
        },
        FLASH_LOAN: {
          id: "",
          name: "",
          principal: "",
        },
        BTC_LEVERAGE: {
          id: "",
          name: "",
          principal: "",
        },
        REPAY_WITH_COLLATERAL: {
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
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP37SS3Z22V937APV1V7F5VYDKWWX4925K2B2ZMHC",
          },
          token: AEUSDC,
        },
        {
          startDate: 1744302900,
          endDate: 1744821300,
          rewards: 1260000000,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP3ENJM52T5VE8EPK6S3A86NCWWQV8968GXVR9RQX",
          },
          token: AEUSDC,
        },
        {
          startDate: 1744824900,
          endDate: 1745418900,
          rewards: 1230000000,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP1MX62KQEB7WPHWA5V8D1VSJ0J80S9CBXJQ7Q18Q",
          },
          token: AEUSDC,
        },
        {
          startDate: 1745422500,
          endDate: 1746009300,
          rewards: 2451000000,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP26EDKK2BGBYHJW9KHK8EF9N9R3F3GQRSAFNTNYJ",
          },
          token: AEUSDC,
        },
        {
          startDate: 1746002100,
          endDate: 1746635700,
          rewards: 2685000000,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP37JC08D5EM2T53JF09Y0ZEQKYTVW1Y8K7VDDGAC",
          },
          token: AEUSDC,
        },
        {
          startDate: 1746636900,
          endDate: 1747240500,
          rewards: 4802000000,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SPQMP7TPG5C1P2FJMBJPVM1E0F751CFQWJJQ93F8",
          },
          token: AEUSDC,
        },
        {
          startDate: 1747241100,
          endDate: 1747841700,
          rewards: 9890000000,
          contract: {
            id: "lp-incentives-v1",
            name: "lp-incentives-v1",
            principal: "SP1W8S33K6JBDEDZA2P01N0ARP1M433PBAC1PF123",
          },
          token: AEUSDC,
        },
        {
          startDate: 1747842900,
          endDate: 1748446500,
          rewards: 11830000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP23MK2Z02H0D6H1SVFHFYGA45AQDW9HK9XZZXNSY",
          },
          token: AEUSDC,
        },
        {
          startDate: 1748453100,
          endDate: 1749050700,
          rewards: 15185000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP1D1RBYJ97VA3XYJ2Y19E06CX2AKGB4QX12ETBAC",
          },
          token: AEUSDC,
        },
        {
          startDate: 1749051300,
          endDate: 1749654000,
          rewards: 22260000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP6XCN5EE7KHWP4V7JP9K9RZYHK1J7S8M7NXWB5K",
          },
          token: AEUSDC,
        },
        {
          startDate: 1749655500,
          endDate: 1750260900,
          rewards: 28393000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP2JZQ7BXSEV4H8KXD6ZT0NW293V5ENJR7Y12RPJ3",
          },
          token: AEUSDC,
        },
        {
          startDate: 1750264320,
          endDate: 1750865100,
          rewards: 35491000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP2PRX1PQDFAKTP12TFMEZJNG7BAEF66ZVBD4YP24",
          },
          token: AEUSDC,
        },
        {
          startDate: 1750865700,
          endDate: 1751469900,
          rewards: 30625000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SPMCMPRRD1WQHKW5F7PRJW2AZV4K9AEH8SJTQMXF",
          },
          token: AEUSDC,
        },
        {
          startDate: 1751470500,
          endDate: 1752074700,
          rewards: 30685000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP184ER80H9V3JRA36W8EJKZ63NRMB1YPC1HFW55",
          },
          token: AEUSDC,
        },
        {
          startDate: 1752075300,
          endDate: 1752679500,
          rewards: 30685000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP332XB0Q9ZZHM1K6AJJ12FE61RNCQGF0HVWW2T80",
          },
          token: AEUSDC,
        },
        {
          startDate: 1752680100,
          endDate: 1753284300,
          rewards: 32685000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP1BXEWB1EKTCPC9G4SYCXY25P8XAHXCV2EV4A38E",
          },
          token: AEUSDC,
        },
        {
          startDate: 1753284900,
          endDate: 1753889100,
          rewards: 33282000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP3141V7G9K4WYCN2CEV4075S3NV5AFR7JVRJQRGW",
          },
          token: AEUSDC,
        },
        {
          startDate: 1753889700,
          endDate: 1754493900,
          rewards: 33753000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP25C79PQ3HTH73GR63NT7A1JS8D0633HT9KNK2JJ",
          },
          token: AEUSDC,
        },
        {
          startDate: 1754494500,
          endDate: 1755098700,
          rewards: 56315000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP3VTYKR6QSXZ32E961070K998C5V3SNCNK3KH91Z",
          },
          token: STX,
        },
        {
          startDate: 1755099300,
          endDate: 1755703500,
          rewards: 50402000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP23SGEVCMWBY7M67BEZMG3HHWXGN43KNHJX973PX",
          },
          token: STX,
        },
        {
          startDate: 1755704100,
          endDate: 1756308300,
          rewards: 58452000000,
          contract: {
            id: "lp-incentives-v2",
            name: "lp-incentives-v2",
            principal: "SP32Q8R7BS97CYSTNY1BAGF91QHYJPR2S9FBAV8B2",
          },
          token: STX,
        },
      ],
      protocol_reserve_percentage: 0.25,
      withdrawal_caps: {
        lp: 0.2,
        debt: 0.2,
        collaterals: [0.2],
        timeWindow: 86400,
      },
      scaling_factor: 1000000000000,
    },

    MAINNET_STAGING: {
      chain_id: GRANITE_MARKETS.MAINNET_STAGING,
      pyth_fee: 10,
      flash_loan_fee: 10,
      market_asset: {
        display_name: "aeUSDC",
        contract: AEUSDC,
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
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
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
          contract: SBTC,
          decimals: 8,
          display_decimals: 5,
          image:
            "https://teal-worldwide-cattle-228.mypinata.cloud/ipfs/bafkreigsh7sxsgbxfgx7mfvepqhtdkuec6nmzgwjscx5w3rg6ikoungz3q",
          price_feed:
            "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        },
      ],
      contracts: {
        STATE: {
          id: "lp-token",
          name: "state-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        LP: {
          id: "liquidity-provider-v1",
          name: "liquidity-provider-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        BORROWER: {
          id: "borrower-v1",
          name: "borrower-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        LIQUIDATOR: {
          id: "liquidator-v1",
          name: "liquidator-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        INTEREST_RATE: {
          id: "linear-kinked-ir-v1",
          name: "linear-kinked-ir-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        GOVERNANCE: {
          id: "governance-v1",
          name: "governance-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        WITHDRAWAL_CAPS: {
          id: "daily-caps-v1",
          name: "daily-caps-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        WITHDRAWAL_CAPS_UTILITY: {
          id: "withdrawal-caps-util-v1",
          name: "withdrawal-caps-util-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        SAFETY_MODULE: {
          id: "staking-v1",
          name: "staking-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        PYTH_STORAGE: {
          id: "pyth-storage-v3",
          name: "pyth-storage-v3",
          principal: "SP3R4F6C1J3JQWWCVZ3S7FRRYPMYG6ZW6RZK31FXY",
        },
        FLASH_LOAN: {
          id: "flash-loan-v1",
          name: "flash-loan-v1",
          principal: "SP3Y6GFKWN50HPA8RKRXMY0EXAJR9VXPY899P88JN",
        },
        BTC_LEVERAGE: {
          id: "leverage-v1",
          name: "leverage-v1",
          principal: "SPDBF8AA29K68CV319XST5JRK7S69CMYSGMYVFWN",
        },
        REPAY_WITH_COLLATERAL: {
          id: "repay-with-collateral-v1",
          name: "repay-with-collateral-v1",
          principal: "SPDBF8AA29K68CV319XST5JRK7S69CMYSGMYVFWN",
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
        lp: 0,
        debt: 0,
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
