import { ChainId } from "../wallet/config";

export default {
  test: {
    [ChainId.BSC_MAINNET]: "0x675e77aeb7F50CAbCE65B9d7114aeB402557679f",
    [ChainId.BSC_TESTNET]: "0x675e77aeb7F50CAbCE65B9d7114aeB402557679f",
  },
  liquidityPool: {
    [ChainId.BSC_MAINNET]: "0x675e77aeb7F50CAbCE65B9d7114aeB402557679f",
    [ChainId.BSC_TESTNET]: "0x675e77aeb7F50CAbCE65B9d7114aeB402557679f",
  },
  MutiRewardPool: {
    [ChainId.BSC_MAINNET]: "0xB88bb1D757E95EC360D2E48689fB82B89d2D3091",
    [ChainId.BSC_TESTNET]: "0x704BAdFD204f3652e1268598a5f2C71c8351472C",
  },
  oracle: {
    56: "0xAa8F3F169c3841CDfB70D5687cA5bc6feB7C4560",
    97: "0x6639fdbf6fac3a2814b20632e4496a3941238729",
  },
  multiCall: {
    [ChainId.MATIC_TESTNET]: "0x7907882587951F17B8EF4761537c9e9b1DA8b422",
    [ChainId.MAINNET]: "0x29723121199A25C446A36e5E8D0A7dcF1ac5291B",
    [ChainId.MATIC_MAINNET]: "0x4BaCa75ee473e6fc474EB1023ddEB7668E53430C",
  },
  TimeToken: {
    56: "0xc7184a87D9443A52F6E578E3C0A611468536487f",
    97: "0xd3a03c02e3DFf87a1C42eb33705440471E4F0d63",
  },
  DsgToken: {
    56: "0x9A78649501BbAAC285Ea4187299471B7ad4ABD35",
    97: "0x1cd884c01376F795017ba16b15193D82a1cb4BeD",
  },
  TimeShop: {
    56: "0x89690BbC6553c407608D75dCA7C623A5373D3D79",
    97: "0xD381c10DE700B087649C67B92d68b2A647b51f28",
  },
  tradingPool: {
    56: "0x14A495B23a6fe7938AE5da73CfA153b5E67f2681",
    97: "0xa24bc8fa9ee25dba4d4879d6b56424b87662b721",
  },
  cakeVault: {
    56: "0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC",
    97: "",
  },
};
