# Integrating Terra Token

Integration of Terra CW20 Token is fairly straightforward and consist of following integration scheme.
Integration is done in 2 steps.

1. Adjusting zelcore files
2. Adjusting rates/markets repository

## Adjusting zelcore Files

Adjustment consist of editing 3 files AND adding logo
Zelcore repository is located at [zelcore Github](https://github.com/zelcore-io/zelcore)
Files that need to be adjusted are coinsSimple.js, coininfo.json,  and newssources.json

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in zelcore. Coin specification is a named object. In case of Terra CW20 Tokens, following configuration shall be present

```js
mamznterra: {
    coin: "mamznterra",
    name: "Mirrored Amazon TERRA",
    uri: [
      "mamznterra",
      "mamzn",
    ],
    contractAddress: "terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2",
    terraType: "CW20", // native or CW20
    addresses: [],
    api: [
      "https://lcd.terra-classic.zelcore.io/",
      "https://terra-classic-lcd.publicnode.com/",
    ],
    unit: "mAMZN",
    type: "terra",
    explorer: [
      "https://finder.terra.money/classic/tx/",
      "https://terra.stake.id/?#/tx/",
    ],
    logolink: "@/assets/logos/MAMZN.svg",
    node: [
      "https://fcd.terra-classic.zelcore.io",
      "https://terra-classic-fcd.publicnode.com",
    ],
    fee: 566,
    feepolicy: {
      economy: 3,
      normal: 4,
      fast: 6,
    },
    color: "#5493f7",
    backend: [
      "terra",
    ],
    decimals: 6,
  },
```

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique. It is reccommeded to add trc behind it.
- coin - This is unique identifier of a coin in zelcore. Cannot contain space. It is recommeded to add trc behind it.
- name - The name of the integrated coin, that will be displayed.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- contractAddress - contract address. Make sure to get this right!
- terraType - Terra has native and CW20 tokens. Value should be "CW20".
- decimals - decimal places of your token. Make sure you get this right also.
- addresses: [] - leave like this
- api - api which zelcore shall use for this coin. Note the contract address inside. This has to be changed correctly to your token
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition
- type: "terra" - leave like this for terra token
- explorer array - you can add more explorers that can be used for the showing transactions on the particular coin
- logolink - path inside zelcore to your logo. Logos are always svg file and shall be named as your UNIT.svg
- node - available infura nodes. Feel free to add yours as well or any infura compatible node
- fee - default fee used for the token. Leave as 0.1. Others shall be discouraged and are not reflected anyway.
- feepolicy - economy, normal and fast fee policies. This field is obsolete and not used for terra. It is left only for future compatibility. Leave like it is.
- color - dominant color of the Token. Shall correspond to logo
- backend - Only terra type backend is coded. Leave like this.

### coininfo.json

This files controls some social interactions of coins. Displays description, links of coins, articles, available explorer, coin circulation and so on. Again a named object.

mamznterra: {
description: "Mirrored Amazon (mAMZN) is a synthetic asset tracking the price of an Amazon stock. It can be minted on the Mirror Protocol, which references on-chain prices provided by Band Protocol's decentralized network of oracles. mAMZN exists as CW20 and ERC20 versions, which can be traded on Terraswap and Uniswap, respectively.",
total_supply: 4055,
circulating_supply: 4055,
websites: [
"https://mirror.finance",
],
explorers: [
"https://finder.terra.money/classic/address/terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2",
"https://etherscan.io/token/0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7",
"https://ethplorer.io/address/0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7",
],
medium: "https://medium.com/@mirror-protocol",
discord: "https://discord.gg/KYC22sngFn",
telegram: "https://t.me/mirror_protocol",
bitcointalk: "",
facebook: "",
twitter: "https://twitter.com/mirror_protocol",
reddit: "",
repository: "https://github.com/mirror-protocol",
youtube: "",
instagram: "",
tiktok: "",
twitch: "",
linkedin: "",
cryptoCompareID: "",
coinMarketCapID: "mirrored-amazon",
coingeckoID: "mirrored-amazon",
auditInfos: [
{
auditor: "Cyber Unit",
reportUrl: "https://docsend.com/view/p4es2dgvwadamgqg",
},
],
whitepaper: [
"https://docs.mirror.finance",
],
},

Fields are done to be self-explanatory:

- description - describe your asset
- total_supply - maximum supply of your asset
- circulating_supply - current supply in circulation
- websites - an array of projects websites
- explorers - explorer for your asset
- medium - medium link on which articles are published
- discord - invitation to discord
- telegram - main telegram group
- bitcointalk - thread for the asset
- facebook - available facebook group
- twitter - main twitter
- reddit - subreddit of asset
- repository - repository account. Does not have to be github. Bitbucket, gitlab and others possible as well.
- youtube - youtube channel of asset
- instagram - main instagram of asset
- tiktok - main tiktok of asset
- twitch - twitch channel of asset
- linkedin - main linkedin of asset
- cryptoCompareID - the ID of the asset at the cryproCompare aggregator api
- coinMarketCapID - the ID of the asset at the coinMarketCap aggregator api
- coingeckoID - the ID of the asset at the coingecko aggregator api
- auditInfos - available audit reports for the asset in dictionary format e.g. [
  {
  auditor: "Quantstamp",
  reportUrl: "https://certificate.quantstamp.com/view/serum",
  },
  ],
- whitepaper - available whitepapers for the asset e.g. [
  "https://docs.projectserum.com",
  ],
- Others - feel free to add slack, wechat groups or others. We may let it available in the future

### newssources.json

zelcore contains News section. A general one and asset news section as well. It can handle many of RSS feeds
Here is an example for Quant

mamznterra: [
{
name: "Mirror (mAMZN) Twitter",
feed: "https://nitter.zelcore.io/mirror_protocol/rss",
site: "https://twitter.com/mirror_protocol",
about: "Mirrored Amazon (mAMZN) is a synthetic asset tracking the price of an Amazon stock",
pic: "@/assets/logos/MAMZN.svg",
},
{
name: "Mirror (mAMZN) Medium",
feed: "https://medium.com/feed/@mirror-protocol",
site: "https://medium.com/@mirror-protocol",
about: "Mirrored Amazon (mAMZN) is a synthetic asset tracking the price of an Amazon stock",
pic: "@/assets/logos/MAMZN.svg",
},
],
This array is an object of available news for an asset.

- name - name of the news
- feed - rss feed for the news
- site - site for the news for browsing
- about - short description. Less than 300 characters!
- pic - logo displayed in case a news does not have a logo in the rss feed. Usually for assets we display the coin logo

### Logo

Please look at many examples in [Logos directory](https://github.com/zelcore-io/zelcore/blob/master/logos/). This is where your logo has to be placed. It has to be a nice SVG in correspondence with zelcore design of other logos. This logo will be used for your asset. Make it pretty and clean :)

## Rates & Markets

Zelcore uses its own Rates and Markets services. The repository can be found in [rates-api](https://github.com/zelcore-io/rates-api).
1 File have to be adjusted at rates-api/src/services/. Add the asset's aggregator ID on the corresponding list. Adding the ID of one aggregetor is enough.

1. coinAggregatorIDs.js

You can find them in [services folder](https://github.com/zelcore-io/rates-api/blob/master/src/services/) of rates-api.
Adjustment is usually very simple and adding just your UNIT to an api call will do. Or you can write a custom call specifically for your asset. Note that the output of the asset has to be the UNIT used in zelcore coinSimple.js file.

## Notes

Please follow the styling, try using linting in your pull requests. We use 2 spaces, double quotes, commas.

## Thank you for your PRs

Zelcore Team

