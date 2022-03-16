export default {
  id: 'likecoin-public-testnet-4',
  name: 'LikeCoin public test chain',
  description:
    'LikeCoin is a decentralized publishing infrastructure. It provides a comprehensive metadata framework to facilitate content registration, licensing, and monetization for all media types.',
  logo: `logo.svg`,
  website: 'https://rinkeby.like.co',
  siteURL: 'https://dao.like.co',
  apiURL: 'https://likecoin-public-testnet-4.oursky.dev',
  rpcURL: 'https://likecoin-public-testnet-4.oursky.dev/rpc/',
  authcoreURL: 'https://authcore.like.co',
  stakingWalletURL: 'https://likecoin-public-testnet-4.netlify.app',
  stakingDenom: 'EKIL',
  coinLookup: [
    {
      viewDenom: 'EKIL',
      chainDenom: 'nanoekil',
      chainToViewConversionFactor: '0.000000001',
      icon: `currencies/like.png`,
      coinGeckoId: 'likecoin',
    },
  ],
  addressPrefix: 'cosmos',
  validatorAddressPrefix: 'cosmosvaloper',
  validatorConsensusaddressPrefix: 'cosmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'EKIL',
          amount: 0.035,
        },
      ],
    },
    ClaimRewardsTx: {
      gasEstimate: 140000,
      feeOptions: [
        {
          denom: 'EKIL',
          amount: 0.014,
        },
      ],
    },
  },
  icon: `https://like.co/logo.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
